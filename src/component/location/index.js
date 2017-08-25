import React from 'react';
import { GOOGLE_API_KEY } from '../../config.js';
import GoogleMapReact from 'google-map-react';
import MapMarker from './map-marker/index.js';

import './_location.scss';

class Location extends React.Component {
  render(){
    const mapCenter = {
      lat: 47.599868,
      lng: -122.303041
    }

    const MAP_OPTIONS = {
      scrollwheel: false,
    }

    return(
      <div className='location-div' id='location'>
        <GoogleMapReact
          options={ MAP_OPTIONS }
          defaultCenter={ mapCenter }
          defaultZoom={ 16 }
        >
          <MapMarker lat={ mapCenter.lat } lng={ mapCenter.lng } />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Location;
