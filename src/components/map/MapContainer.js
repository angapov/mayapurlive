import React from 'react'

import { geolocated } from 'react-geolocated'

import Map from './MapElement'

/*
// here is a solution I'm successfully using to get a bounding box for a bunch of points and then to center and zoom the map accordingly:
import turfBbox from '@turf/bbox'
import { featureCollection as turfFeatureCollection, point as turfPoint } from '@turf/helpers'
import geoViewport from '@mapbox/geo-viewport'

class MyMap extends Component {

  constructor (props) {
    super(props)
    this.state = this.centerZoomFromLocations(props.locations)
  }

  function centerZoomFromLocations (locations, width = 564, height = 300) => {
    const points = locations.map(location => turfPoint([location.longitude, location.latitude]))
    const features = turfFeatureCollection(points)
    const bounds = turfBbox(features)

    const { center, zoom } = geoViewport.viewport(bounds, [width, height])

    return {
      center: [center[1], center[0]],
      zoom: Math.min(zoom, 13)
    }
  }

}
*/

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
    zoom: 16
  }

  handleClick = marker => {
    this.setState(state => ({ active: marker, center: [marker.location[0], marker.location[1]], zoom: state.zoom }))
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
    return <Map results={places} active={active} handleClick={this.handleClick} center={center} zoom={zoom} handleBoundsChanged={this.handleBoundsChanged} handleReset={this.handleReset} geolocation={geolocation} />
  }
}

export default geolocated(geolocationOptions)(MapContainer)
