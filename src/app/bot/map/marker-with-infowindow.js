import React, {useState} from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export const MarkerWithInfowindow = () => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={{lat: 21.0227784, lng: 105.8163641}}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={150}>
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
      )}
    </>
  );
};