import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

// stateless container
export default (props) => {

  return (
    <div>
    <GoogleMapLoader
      containerElement={ <div style={{height:'600px', width:'100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={13} defaultCenter={{lat: props.lat, lng: props.lon}}   />
      }
      />
    </div>
  )
}
