import React from 'react'

import turfBbox from '@turf/bbox'
import {
  featureCollection as turfFeatureCollection,
  point as turfPoint,
} from '@turf/helpers'
import geoViewport from '@mapbox/geo-viewport'

import { geolocated } from 'react-geolocated'

import Map from './MapElement'

const geolocationOptions = {
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false
}

class MapContainer extends React.Component {
  state = {
    active: null,
    center: [23.42477, 88.38907], // NOTE: TOVP
    size: [100, 100], // Default until map size is calculated
    zoom: 16
  }

  handleClick = marker => {
    this.setState(state => ({ active: marker, center: [marker.location[0], marker.location[1]], zoom: state.zoom }))
  }

  handleResize = ({ height, width }) => {
    this.setState(() => ({
      size: [height, width],
    }))
  }

  handleBoundsChanged = ({ center, zoom, bounds, initial }) => {
    this.setState({
      center,
      zoom
    })
  }

  handleReset = () => {
    this.setState({
      active: null
    })
  }

  centerZoomFromPlaces = places => {
    const [height, width] = this.state.size
    const points = places.map(({ location }) =>
      turfPoint([location[1], location[0]])
    )
    const features = turfFeatureCollection(points)
    const bounds = turfBbox(features)

    const { center, zoom } = geoViewport.viewport(bounds, [width, height])

    return {
      zoom: Math.min(zoom - 0.3, 19), // Zoom out a little to fit places labels.
      center: [center[1], center[0]],
    }
  }

  render () {
    const { places, isGeolocationAvailable, isGeolocationEnabled, coords, positionError } = this.props
    let { center, zoom } = this.state

    const { active } = this.state
    // If not specific place selected calc center point and zoom to display places.
    if (!active) {
      ;({ center, zoom } = this.centerZoomFromPlaces(places))
    }

    const geolocation = { isGeolocationAvailable, isGeolocationEnabled, coords, positionError }
    return (
      <Map
        active={active}
        center={center}
        geolocation={geolocation}
        handleBoundsChanged={this.handleBoundsChanged}
        handleClick={this.handleClick}
        handleReset={this.handleReset}
        onSize={this.handleResize}
        results={places}
        zoom={zoom}
      />
    )
  }
}

export default geolocated(geolocationOptions)(MapContainer)
