import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

import { Box } from 'grommet'
import { Location, Target } from 'grommet-icons'

import SearchResult from './SearchResult'

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
    className='pigeon-click-block'
    background={active ? activeBackground : background}
    round
    onClick={() => onClick && onClick({ payload })}
    {...rest}>
    {icon || <Location color={active ? activeColor : color} />}
  </Box>
)

const MyMap = ({ size, results = [], active = null, handleClick, handleBoundsChanged, center, zoom, handleReset, overlayOffset = [-20, 300], geolocation }) => (
  <Map center={center} zoom={zoom} onBoundsChanged={handleBoundsChanged} onClick={() => console.log('click')}>
    <Box style={{ height: '100%', width: '100%', position: 'absolute', left: 0, top: 0 }} onClick={() => handleReset()} />
    {results.filter(result => result.location).map(result => (
      <Marker key={result.id} anchor={[result.location.coordinates[1], result.location.coordinates[0]]} payload={result} active={active && (result.id === active.id)} onClick={({ payload }) => handleClick(payload)} />
    ))}
    {active && <Overlay key={active.id} anchor={[active.location.coordinates[1], active.location.coordinates[0]]} offset={active && active.id === 'geolocation' ? [-25, 25] : overlayOffset}>
      {active.id !== 'geolocation' ? <SearchResult post={active} background='background' /> : <Box round='xsmall' pad='xsmall' background='dark-1'>{active.text}</Box>}
    </Overlay>}
    {geolocation.coords && <Marker
      icon={<Target color='white' />}
      payload={{ id: 'geolocation', location: { coordinates: [geolocation.coords.longitude, geolocation.coords.latitude] }, text: phrases[Math.floor(Math.random() * phrases.length)] }}
      anchor={[geolocation.coords.latitude, geolocation.coords.longitude]}
      onClick={({ payload }) => handleClick(payload)}
      background='#6b76ff'
      color='white'
      animation='pulse' />}
  </Map>)

export default MyMap
