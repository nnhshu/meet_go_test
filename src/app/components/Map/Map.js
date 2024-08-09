import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const defaultCenter = { lat: 21.0317076, lng: 105.8011348 };

const getMapOptions = (maps) => {
    return {
        streetViewControl: false,
        scaleControl: true,
        fullscreenControl: true,
        styles: [
            {
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            }
        ],
        gestureHandling: "greedy",
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeId: maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: maps.ControlPosition.BOTTOM_CENTER,
            mapTypeIds: [
                maps.MapTypeId.ROADMAP,
                maps.MapTypeId.SATELLITE,
                maps.MapTypeId.HYBRID
            ]
        },

        zoomControl: true,
        clickableIcons: false
    };
};

export default function Map(props) {
    const { setMap, children } = props;
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAxsVfNmQ5Q8WypE7HRmnE8W9oGIajqJsw"
    });

    const renderMap = () => {
        const loadHandler = (map) => {
            const bounds = new window.google.maps.LatLngBounds(defaultCenter);
            map.fitBounds(bounds);
            // setMap(map);
        };

        return (
            <GoogleMap
                mapContainerStyle={{
                    height: "800px",
                    width: "100%"
                }}
                zoom={6}
                center={defaultCenter}
                options={getMapOptions}
                onLoad={loadHandler}
            >
                {children}
            </GoogleMap>
        );
    };

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>;
    }

    return isLoaded ? renderMap() : <div>Loading...</div>;
}
