import React from 'react'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

import sizeMe from 'react-sizeme'

import { Box, Text } from 'grommet'
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
    direction='row'
    flex
    style={{
      cursor: 'pointer',
      position: 'absolute',
      left: left,
      top: top
    }}
    pad='2px'
    className='pigeon-click-block'
    background={active ? activeBackground : payload.id === 'geolocation' ? background : { color: 'black', opacity: 'strong', dark: true }}
    // background={active ? activeBackground : background}
    round='xlarge'
    onClick={() => onClick && onClick({ payload })}
    {...rest}
  >
    {icon || <Location size='medium' color={active ? activeColor : color} />}
    <Box flex align='center' justify='center'><Text size='xsmall'>{payload.title}</Text></Box>
  </Box>
)

const MyMap = ({ results = [], active = null, handleClick, handleBoundsChanged, center, zoom, handleReset, overlayOffset = [150, 200], geolocation }) => {
  return (
    <Map center={center} zoom={zoom} onBoundsChanged={handleBoundsChanged}>
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
        // FIXME: css for .pigeon-map-overlay is in global styles in Layout component.
        <Overlay className='pigeon-map-overlay' key={active.id} anchor={[active.location[0], active.location[1]]} offset={active && active.id === 'geolocation' ? [-25, 25] : overlayOffset}>
          {active.id !== 'geolocation' ? <SearchResult post={active} background='background' /> : <Box round='xsmall' pad='xsmall' background='dark-1'>{active.text}</Box>}
        </Overlay>}
      {geolocation.coords &&
        <Marker
          icon={<Target size='small' color='white' />}
          payload={{ id: 'geolocation', location: [geolocation.coords.latitude, geolocation.coords.longitude], text: phrases[Math.floor(Math.random() * phrases.length)] }}
          anchor={[geolocation.coords.latitude, geolocation.coords.longitude]}
          onClick={({ payload }) => handleClick(payload)}
          background={{ color: '#6b76ff', dark: true }}
          color='white'
          animation='pulse'
        />}
    </Map>
  )
}

export default sizeMe({ monitorHeight: true })(MyMap)
