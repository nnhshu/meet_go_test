'use client';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/navigation';

import {APIProvider, Map, Marker, useMap, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import {MarkerWithInfowindow} from './marker-with-infowindow';


import icon_default from '../../../../public/img/icons/Map/default.png';
import icon_pending from '../../../../public/img/icons/Map/pending.png';
import icon_buy from '../../../../public/img/icons/Map/buy.png';
import icon_shop from '../../../../public/img/icons/Map/shop.png';
import icon_gift from '../../../../public/img/icons/Map/gift.png';

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
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                    <Map
                    style={{width: '100vw', height: '100vh'}}
                    defaultCenter={{
                        lat: userLocation ? parseFloat(userLocation[0]) : 21.0227784,
                        lng: userLocation ? parseFloat(userLocation[1]): 105.8163641,
                    }}
                    defaultZoom={15}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    styles={
                        [
                            {
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#1d2c4d"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#8ec3b9"
                                }
                              ]
                            },
                            {
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#1a3646"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.country",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#4b6878"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.land_parcel",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#64779e"
                                }
                              ]
                            },
                            {
                              "featureType": "administrative.province",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#4b6878"
                                }
                              ]
                            },
                            {
                              "featureType": "landscape.man_made",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#334e87"
                                }
                              ]
                            },
                            {
                              "featureType": "landscape.natural",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#023e58"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#283d6a"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#6f9ba5"
                                }
                              ]
                            },
                            {
                              "featureType": "poi",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#1d2c4d"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#023e58"
                                }
                              ]
                            },
                            {
                              "featureType": "poi.park",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#3C7680"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#304a7d"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#98a5be"
                                }
                              ]
                            },
                            {
                              "featureType": "road",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#1d2c4d"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#2c6675"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "geometry.stroke",
                              "stylers": [
                                {
                                  "color": "#255763"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#b0d5ce"
                                }
                              ]
                            },
                            {
                              "featureType": "road.highway",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#023e58"
                                }
                              ]
                            },
                            {
                              "featureType": "transit",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#98a5be"
                                }
                              ]
                            },
                            {
                              "featureType": "transit",
                              "elementType": "labels.text.stroke",
                              "stylers": [
                                {
                                  "color": "#1d2c4d"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.line",
                              "elementType": "geometry.fill",
                              "stylers": [
                                {
                                  "color": "#283d6a"
                                }
                              ]
                            },
                            {
                              "featureType": "transit.station",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#3a4762"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "geometry",
                              "stylers": [
                                {
                                  "color": "#0e1626"
                                }
                              ]
                            },
                            {
                              "featureType": "water",
                              "elementType": "labels.text.fill",
                              "stylers": [
                                {
                                  "color": "#4e6d70"
                                }
                              ]
                            }
                          ]
                    }
                    />
                    <Marker
                        position={{
                            lat: userLocation ? parseFloat(userLocation[0]) : 21.0227784,
                            lng: userLocation ? parseFloat(userLocation[1]) : 105.8163641,
                        }}
                        icon={{
                            url: '/img/icons/Map/user_location.svg',
                            scaledSize: { height: 50, width: 50 }
                        }}
                        setAnimation={{ animation: "BOUNCE" }}
                    />
                    <Marker
                        position={{
                            lat: 21.349542,
                            lng: 106.329702
                        }}
                        icon={{
                            url: '/img/icons/Map/default.svg',
                            scaledSize: { height: 50, width: 50 }
                        }}
                        setAnimation={{ animation: "BOUNCE" }}
                        onClick={() =>  handleMarkerClick(12312)}
                    />
                    {/* <MarkerWithInfowindow />
                    {infoWindowRef && (
                        <InfoWindow
                            anchor={infoWindowRef}
                            onClose={() => setInfoWindowRef(null)}
                            minWidth={150}
                        >
                            <div className="box-marker">
                                <div className="box-left">
                                    <img src="/img/icons/Map/coin.svg" />
                                    <span>80.0000</span>
                                </div>
                                <div className="box-right">
                                    <img src="/img/icons/Map/gps.svg" />
                                    <span>20m</span>
                                </div>
                            </div>
                        </InfoWindow>
                    )} */}
                </APIProvider>
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