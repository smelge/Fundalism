import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../config.js';

export class MapContainer extends Component {
  render() {

    return (
      <Map google={this.props.google}
      initialCenter={{
            lat: 55.947130,
            lng: -3.201872
        }} zoom={15}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>You're here</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (apiKey)
})(MapContainer)
