import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import { compose, withProps } from 'recompose'

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC9Dn49n6cgyTLPI0wZ5u0QanW3OLItgLs&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%`, marginTop: '90px' }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -37.808973, lng: 144.968828 }}
    defaultOptions={{
      styles: [
        {
          featureType: 'administrative',
          elementType: 'all',
          stylers: [{ saturation: '-100' }],
        },
        {
          featureType: 'administrative.province',
          elementType: 'all',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [
            { saturation: -100 },
            { lightness: 65 },
            { visibility: 'on' },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [
            { saturation: -100 },
            { lightness: '50' },
            { visibility: 'simplified' },
          ],
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [{ saturation: '-100' }],
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [{ visibility: 'simplified' }],
        },
        {
          featureType: 'road.arterial',
          elementType: 'all',
          stylers: [{ lightness: '30' }],
        },
        {
          featureType: 'road.local',
          elementType: 'all',
          stylers: [{ lightness: '40' }],
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [{ saturation: -100 }, { visibility: 'simplified' }],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            { hue: '#ffff00' },
            { lightness: -25 },
            { saturation: -97 },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels',
          stylers: [{ lightness: -25 }, { saturation: -100 }],
        },
      ],
    }}
  >
    <Marker
      position={{ lat: -37.808973, lng: 144.968828 }}
      icon={{
        url: '/images/icon-map-marker.svg',
        anchor: new google.maps.Point(26, 69),
        scaledSize: new google.maps.Size(52, 69),
      }}
    />
  </GoogleMap>
))

export default Map
