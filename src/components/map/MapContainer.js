import React from 'react'

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
    center: [23.43, 88.39],
    zoom: 15
  }

  handleClick = async (marker) => {
    this.setState({ active: marker, center: [marker.location[0], marker.location[1]] })
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

  render () {
    const { places, isGeolocationAvailable, isGeolocationEnabled, coords, positionError } = this.props
    const { active, center, zoom } = this.state
    const geolocation = { isGeolocationAvailable, isGeolocationEnabled, coords, positionError }
    return <Map results={places} active={active} handleClick={this.handleClick} center={center} zoom={zoom} handleBoundsChanged={this.handleBoundsChange} handleReset={this.handleReset} geolocation={geolocation} />
  }
}

export default geolocated(geolocationOptions)(MapContainer)
