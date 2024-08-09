import React, { useRef, useState, useEffect, useCallback } from "react";
import axios from 'axios';

import { GoogleMapProvider, useGoogleMap, GoogleMap, useJsApiLoader, Marker, InfoWindow  } from "@ubilabs/google-maps-react-hooks";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import SuperClusterAlgorithm from "./SuperClusterAlgorithm";

import icon_default from '../../../../public/img/icons/Map/default.png';
import icon_pending from '../../../../public/img/icons/Map/pending.png';
import icon_buy from '../../../../public/img/icons/Map/buy.png';
import icon_shop from '../../../../public/img/icons/Map/shop.png';
import icon_gift from '../../../../public/img/icons/Map/gift.png';

var marker = null;
var gmarkers = [];
function updatePlaceDetails(latLng, marker) {
    var geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ 'location': latLng }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                var placeName = results[0].formatted_address;
                marker.setTitle(placeName);
                marker.getPosition().lat = latLng.lat();
                marker.getPosition().lng = latLng.lng();

                // Update info window content
                var infoWindowContent = '<div><strong>Tên địa điểm:</strong> ' + placeName + '</div>';
                marker.infoWindow.setContent(infoWindowContent);
            }
        } else {
            console.log('Cập nhật địa điểm không thành công: ' + status);
        }
    });
}


function MapContainer({ mapList, selectedLocation }) {
    const [mapContainer, setMapContainer] = useState(null);
    const [dataFetched, setDataFetched] = useState(false);
    const [userLocation, setUserLocation] = useState([21.0227784, 105.8163641]);
    const onLoad = useCallback((map) => addMarkers(map, mapList, selectedLocation), []);
    // const onClickAddMarker = useCallback((e, map) => placeMarkerAndPanTo(e.latLng, map), []);

    const addMarkers = (map, mapList, selectedLocation) => {
        var icon_pin = icon_default;
        const infoWindow = new window.google.maps.InfoWindow();
        const markers = mapList.map((item) => {
            const lat = parseFloat(item.latitude);
            const lng = parseFloat(item.longitude);
            switch (item.statusLocation) {
                case "BUYED":
                    icon_pin = icon_buy
                    break;
                case "SHOP":
                    icon_pin = icon_shop
                    break;
                case "GIFT":
                    icon_pin = icon_gift
                    break;
                case "PENDING":
                    icon_pin = icon_pending
                    break;
                default:
                    icon_pin = icon_default
            };
            const icon_marker = {
                url: icon_pin, // url
                scaledSize: new window.google.maps.Size(50, 50), // scaled size
                zIndex: 1000
            };
            const marker = new window.google.maps.Marker({
                position: { lat, lng },
                icon: icon_marker,
            });

            function toggleBounce() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                } else {
                    marker.setAnimation(window.google.maps.Animation.BOUNCE);
                }
            }

            map.addListener("click", (e) => {
                getPlaceName(e.latLng, map);
            });

            marker.addListener("click", () => {
                // toggleBounce();
                infoWindow.setPosition({ lat, lng });
                infoWindow.setContent(`
                  <div class="info-window">
                    <img 
                        class="card-img-top img-responsive" 
                        src=${item.statusLocation === "SHOP" ? item.imageShopLocation : item.imageLocation} 
                        alt=${item.address} 
                    />
                    <ul class="list-group list-group-flush nft-item-content">
                        <li class="list-group-item nft-item-author fs-3 text-dark fw-bolder">${item.address}</span></li>
                        <li class="list-group-item nft-item-author">Chủ sở hữu: <span class="text-primary fw-bolder">${item.ownerLocation ? item.ownerLocation : item.owner}</span></li>
                        <li class="list-group-item nft-item-desc">Latitude: <strong>${lat}</strong></li>
                        <li class="list-group-item nft-item-desc">Longitude: <strong>${lng}</strong></li>
                    </ul>
                  </div>
                `);
                // marker.setAnimation(window.google.maps.Animation.BOUNCE);
                infoWindow.open(map,marker);
                // infoWindow.addListener('closeclick', function() {
                //     marker.setAnimation(null);
                // });
            });

            new window.google.maps.event.addListener(map, 'click', function() {
                if (infoWindow) {
                    infoWindow.close();
                    // marker.setAnimation(null);
                }
            });
            gmarkers.push(marker);
            return marker;
        })

        new MarkerClusterer({
            markers,
            map,
            algorithm: new SuperClusterAlgorithm({ radius: 200 }),
        });
    }

    function getPlaceName(latLng, map) {
        var geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ 'location': latLng }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    var placeName = results[0].formatted_address;
                    placeMarkerAndPanTo(latLng, placeName, map);
                }
            } else {
                console.log('Lấy tên địa điểm không thành công: ' + status);
            }
        });
    }

    function placeMarkerAndPanTo(latLng, placeName, map) {
        if (marker) {
            marker.setMap(null); // Loại bỏ marker cũ
        }

        const icon_marker = {
            url: icon_default, // url
            scaledSize: new window.google.maps.Size(50, 50), // scaled size
        };

        marker = new window.google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon_marker,
            title: placeName
        });

        var infoWindow = new window.google.maps.InfoWindow({
            content: `
            <div class="info-window">
                <ul class="list-group list-group-flush nft-item-content">
                    <li class="list-group-item nft-item-author fs-3 text-dark">Vị trí đang chọn: <strong>${placeName}</strong></span></li>
                    <li class="list-group-item nft-item-desc">Latitude: ${latLng.lat()}</li>
                    <li class="list-group-item nft-item-desc">Longitude: ${latLng.lng()}</li>
                </ul>
            </div>`
        });

        infoWindow.open(map, marker);

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

        map.panTo(latLng);
    }

    useEffect(() => {
        // Kiểm tra nếu trình duyệt hỗ trợ Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation([latitude, longitude]);
                    setDataFetched(true);
                },
                error => {
                    setUserLocation([21.0227784, 105.8163641]);
                    setDataFetched(true);
                    console.error('Lỗi lấy vị trí:', error);
                }
            );
        } else {
            console.error('Trình duyệt không hỗ trợ Geolocation.');
        }
    }, []);

    return (
        <GoogleMapProvider
            googleMapsAPIKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
            options={{
                zoom: 12,
                minZoom: 4,
                center: {
                    lat: 21.0227784,
                    lng: 105.8163641,
                },
                gestureHandling: "greedy"
            }}
            mapContainer={mapContainer}
            onLoad={onLoad}
            language='vi'
        >
            <div ref={(node) => setMapContainer(node)} style={{ height: "calc(100vh - 71px)" }} />
            {
                selectedLocation ?  <Location selected={selectedLocation} /> : null
            }
        </GoogleMapProvider>
    );
}

function Location({selected}) {
    var icon_pin = icon_default;
    var img = selected.imageLocation;
    // const [lat, setLat] = useState(selected.latitude);
    // const [lng, setLng] = useState(selected.longitude);
    const lat = selected.latitude;
    const lng = selected.longitude;
    const address = selected.address;
    const owner = selected.ownerLocation;
    // const img = selected.imageLocation;
    const statusLocation = selected.statusLocation;
    switch (statusLocation) {
        case "BUYED":
            icon_pin = icon_buy;
            img = selected.imageLocation;
            break;
        case "SHOP":
            icon_pin = icon_shop;
            img = selected.imageShopLocation;
            break;
        case "GIFT":
            icon_pin = icon_gift;
            img = selected.imageLocation;
            break;
        case "PENDING":
            icon_pin = icon_pending;
            img = selected.imageLocation;
            break;
        default:
            icon_pin = icon_default;
            img = selected.imageLocation;
    };
    const { map } = useGoogleMap();
    const markerRef = useRef(null);
    const infoWindowRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() =>{
        if (!map || markerRef.current) return;
        markerRef.current = new window.google.maps.Marker({
            position: { lat, lng },
            icon: icon_pin,
        });
    })

    useEffect(() => {
        
        if (!markerRef.current) return;
        if (isNaN(lat) || isNaN(lng)) return;
        markerRef.current.setPosition({ lat, lng });
       
        const icon_marker = {
            url: icon_pin, // url
            scaledSize: new window.google.maps.Size(50, 50), // scaled size
            zIndex: 1000
        };

        // function toggleBounce() {
        //     if (marker.getAnimation() !== null) {
        //         marker.setAnimation(null);
        //     } else {
        //         marker.setAnimation(window.google.maps.Animation.BOUNCE);
        //     }
        // }

        markerRef.current = new window.google.maps.Marker({
            position: { lat, lng },
            icon: icon_marker,
            map: map
        });

        if (infoWindowRef.current) {
            infoWindowRef.current.close();
        }
        
        const content = `
        <div class="info-window">
            <img 
                class="card-img-top img-responsive" 
                src=${img ? img : "https://storage.googleapis.com/demoblock-1a9d1/LocationImage/10.3869961_105.4393828.jpg?1691864582"} 
                alt=${address} 
            />
            <ul class="list-group list-group-flush nft-item-content">
                <li class="list-group-item nft-item-author fs-3 text-dark fw-bolder">${address}</span></li>
                <li class="list-group-item nft-item-author">Chủ sở hữu: <span class="text-primary fw-bolder">${owner ? owner : selected.owner}</span></li>
                <li class="list-group-item nft-item-desc">Latitude: <strong>${lat}</strong></li>
                <li class="list-group-item nft-item-desc">Longitude: <strong>${lng}</strong></li>
            </ul>
        </div>
        `;
        const infoWindow = new window.google.maps.InfoWindow({
            content: content
        });

        markerRef.current.addListener("click", () => {
            // toggleBounce();
            infoWindow.open(map,markerRef.current);
            // infoWindow.addListener('closeclick', function() {
            //     marker.setAnimation(null);
            // });
        });

        infoWindow.open(mapRef.current, marker);
        infoWindowRef.current = infoWindow;

        infoWindow.open(map, markerRef.current);
        map.panTo(markerRef.current.getPosition());
        map.setCenter({ lat, lng });
        map.setZoom(18);      
    }, [address, icon_pin, img, lat, lng, map, owner, selected]);
}

export default MapContainer;