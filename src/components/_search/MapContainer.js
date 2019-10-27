import React from 'react'

import { withRouter } from 'next/router'
// import dynamic from 'next/dynamic'

import { geolocated } from 'react-geolocated'

import Map from './Map'
import withSize from '../withSize'

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
    this.setState({ active: marker, center: [marker.location.coordinates[1], marker.location.coordinates[0]] })
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
    const { results, size, isGeolocationAvailable, isGeolocationEnabled, coords, positionError } = this.props
    const { active, center, zoom } = this.state
    const geolocation = { isGeolocationAvailable, isGeolocationEnabled, coords, positionError }
    return <Map size={size} results={results} active={active} handleClick={this.handleClick} center={center} zoom={zoom} handleBoundsChanged={this.handleBoundsChange} handleReset={this.handleReset} geolocation={geolocation} />
  }
}

export default withRouter(withSize(geolocated(geolocationOptions)(MapContainer)))
