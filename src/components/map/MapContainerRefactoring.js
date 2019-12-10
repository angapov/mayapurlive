import React from 'react'

import turfBbox from '@turf/bbox'
import {
  featureCollection as turfFeatureCollection,
  point as turfPoint
} from '@turf/helpers'
import geoViewport from '@mapbox/geo-viewport'

import { geolocated } from 'react-geolocated'

import Map from './MapElement'

// import { useLocation } from '../../lib'

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

const centerZoomFromPlaces = (places, size = [100, 100]) => {
  const [height, width] = size
  const points = places.map(({ location }) =>
    turfPoint([location[1], location[0]])
  )
  const features = turfFeatureCollection(points)
  const bounds = turfBbox(features)

  const { center, zoom } = geoViewport.viewport(bounds, [width, height])

  return {
    zoom: Math.min(zoom - 0.3, 19), // Zoom out a little to fit places labels.
    center: [center[1], center[0]]
  }
}

const MapContainer = ({ places, isGeolocationAvailable, isGeolocationEnabled, coords, positionError }) => {
  // const { location, navigate } = useLocation()
  // const defaultCenterZoom = active ? active :centerZoomFromPlaces(places)
  const defaultCenterZoom = centerZoomFromPlaces(places)
  const [mapState, setMapState] = React.useState(defaultCenterZoom)
  const [active, setActive] = React.useState(null)
  const [size, setSize] = React.useState(null)

  const geolocation = { isGeolocationAvailable, isGeolocationEnabled, coords, positionError }

  React.useEffect(() => {
    if (size && !active) {
      setMapState(centerZoomFromPlaces(places, size))
    }
  }, [active, size, places])

  const handleClick = marker => {
    setActive(marker)
    setMapState({ center: [marker.location[0], marker.location[1]], zoom: mapState.zoom })
  }

  const handleResize = ({ height, width }) => {
    setSize(() => [height, width])
  }

  const handleBoundsChanged = ({ center, zoom, bounds, initial }) => {
    setMapState({
      center,
      zoom
    })
  }

  const handleReset = () => {
    setActive(null)
  }

  return (
    <Map
      active={active}
      center={mapState.center}
      geolocation={geolocation}
      handleBoundsChanged={handleBoundsChanged}
      handleClick={handleClick}
      handleReset={handleReset}
      onSize={handleResize}
      results={places}
      zoom={mapState.zoom}
    />
  )
}

export default geolocated(geolocationOptions)(MapContainer)
