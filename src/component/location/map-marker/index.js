import React from 'react';

import './_map-marker.scss';

class MapMarker extends React.Component {
  render() {
    return(
      <div className='map-marker-div'
        lat={ this.props.lat }
        lng={ this.props.lng }
      >
        <i className='fa fa-map-marker fa-2x' />
        <em>CENTRAL BARBER</em>
      </div>
    )
  }
}

export default MapMarker;
