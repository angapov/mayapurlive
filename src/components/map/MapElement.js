import React from 'react'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

import { Box } from 'grommet'
import { Location, Target } from 'grommet-icons'

import PostPreview from '../posts/PostPreview'

const SearchResult = ({ post, background }) => <Box background={background}><PostPreview post={post} /></Box>

const phrases = [
  'It is you!',
  'Chant and be happy.',
  'You are not this material body.',
  'Krishna is a Supreme Personality of Godhead.',
  'Hare Krishna!',
  'Jaya Radhe!'
]

const Marker = ({ left, top, latLngToPixel, onClick, payload, icon, active = false, color = 'control', activeColor = 'background', background = 'background', activeBackground = 'accent-4', children, ...rest }) => (
  <Box
    style={{
      cursor: 'pointer',
      position: 'absolute',
      left: left,
      top: top
    }}
    pad='xxsmall'
    className='pigeon-click-block'
    background={active ? activeBackground : background}
    round
    onClick={() => onClick && onClick({ payload })}
    {...rest}
  >
    {icon || <Location size='small' color={active ? activeColor : color} />}
  </Box>
)

// const MyMap = ({ results = [], active = null, handleClick, handleBoundsChanged, center, zoom, handleReset, overlayOffset = [-20, 300], geolocation }) => (
const MyMap = ({ results = [], active = null, handleClick, handleBoundsChanged, center, zoom, handleReset, overlayOffset = [150, 200], geolocation }) => {
  return (
    <Map center={center} zoom={zoom} onBoundsChanged={handleBoundsChanged} onClick={() => console.log('click')}>
      <Box style={{ height: '100%', width: '100%', position: 'absolute', left: 0, top: 0 }} onClick={() => handleReset()} />
      {results.filter(result => result.location).map(result => (
        <Marker
          key={result.id}
          anchor={[result.location[0], result.location[1]]}
          payload={result}
          active={active && (result.id === active.id)}
          onClick={({ payload }) => handleClick(payload)}
        />
      ))}
      {active &&
        <Overlay key={active.id} anchor={[active.location[0], active.location[1]]} offset={active && active.id === 'geolocation' ? [-25, 25] : overlayOffset}>
          {active.id !== 'geolocation' ? <SearchResult post={active} background='background' /> : <Box round='xsmall' pad='xsmall' background='dark-1'>{active.text}</Box>}
        </Overlay>}
      {geolocation.coords &&
        <Marker
          icon={<Target size='small' color='white' />}
          payload={{ id: 'geolocation', location: [geolocation.coords.latitude, geolocation.coords.longitude], text: phrases[Math.floor(Math.random() * phrases.length)] }}
          anchor={[geolocation.coords.latitude, geolocation.coords.longitude]}
          onClick={({ payload }) => handleClick(payload)}
          background='#6b76ff'
          color='white'
          animation='pulse'
        />}
    </Map>
  )
}

export default MyMap
