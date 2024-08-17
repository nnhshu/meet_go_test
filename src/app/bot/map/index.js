'use client';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/navigation';

import {APIProvider, Map, Marker, useMap, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import {MarkerWithInfowindow} from './marker-with-infowindow';

import MapContainer from "@/app/components/Map/MapContainer";


import icon_default from '../../../../public/img/icons/Map/default.png';
import icon_pending from '../../../../public/img/icons/Map/pending.png';
import icon_buy from '../../../../public/img/icons/Map/buy.png';
import icon_shop from '../../../../public/img/icons/Map/shop.png';
import icon_gift from '../../../../public/img/icons/Map/gift.png';
import dataLocations from "../data";
var marker = null;
const AnyReactComponent = ({ text }) => <div>{text}</div>;


function MapShowListNft({ locations, selectedLocation }) {
  const router = useRouter();

    const mapOptions = {
        zoom: 12,
        center: {
            lat: selectedLocation ? selectedLocation.latitude : 21.0227784,
            lng: selectedLocation ? selectedLocation.longitude : 105.8163641,
        },
        gestureHandling: "greedy"
    };    
    const [mapContainer, setMapContainer] = useState(null);
    const [userLocation, setUserLocation] = useState([21.0227784, 105.8163641]);
    const [dataFetched, setDataFetched] = useState(false);
    const [infoWindowRef, setInfoWindowRef] = useState(null);

    const [markerRef, marker] = useAdvancedMarkerRef();

    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const [infoPinShown, setInfoPinShown] = useState(false);

    const handleMarkerClick = useCallback(
      (location) => {
        // Chuyển hướng đến route tương ứng
        window.location.href = `/bot/detail/123`;
      },
      [router]
    );

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(false), []);

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
        <>
            {dataFetched ? (
                <MapContainer mapList={dataLocations} selectedLocation={selectedLocation} />
            ) : (
                <div className="text-center d-flex h-100 w-100 align-items-center justify-content-center flex-column p-5">
                    <p className="mt-2">Đang tải dữ liệu...</p>
                </div>
            )}
        </>
        
    );
}

function Location({selectedLocation}) {
    var icon_pin = icon_default;
    var img = selectedLocation.imageLocation;
    // const [lat, setLat] = useState(selected.latitude);
    // const [lng, setLng] = useState(selected.longitude);
    const lat = selectedLocation[0];
    const lng = selectedLocation[1];
    const address = selectedLocation.address;
    const owner = selectedLocation.ownerLocation;
    
    const statusLocation = selectedLocation.statusLocation;
    const visionAddress = selectedLocation.visionAddress;
    const map = useMap();
    const markerRef = useRef(null);
    const infoWindowRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() =>{
        if ( markerRef.current) return;
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
                <li class="list-group-item nft-item-author fs-3 text-dark fw-bolder">${visionAddress ? visionAddress : address}</span></li>
                <li class="list-group-item nft-item-author">Chủ sở hữu: <span class="text-primary fw-bolder">${owner ? owner : selectedLocation.owner}</span></li>
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
    }, [address, icon_pin, img, lat, lng, map, owner, selectedLocation]);
}

export default MapShowListNft;