import React from 'react'
import { debounce } from 'lodash'

import { withRouter } from 'next/router'

import { Box, Form, FormField, Button, TextInput } from 'grommet'
import { Search, List, Map } from 'grommet-icons'

import Layout from '../Layout'
import SearchResults from './SearchResults'
import MapContainer from './MapContainer'
import withSize from '../withSize'

import { str2bool } from '../../lib/utils'

const SearchContainer = ({ results, router, size }) => {
  const isSmall = size === 'small'
  const showMap = router.query.showMap ? str2bool(router.query.showMap) : !isSmall
  const search = router.query.q
  const showList = router.query.showList ? str2bool(router.query.showList) : true
  const _onSubmit = ({ value }) => router.push({ pathname: router.pathname, query: { ...router.query, q: value.search } })
  const onSubmit = debounce(_onSubmit, 200)
  const toggleMap = () => router.push({ pathname: router.pathname, query: { ...router.query, showMap: !showMap } })
  const toggleList = () => router.push({ pathname: router.pathname, query: { ...router.query, showList: !showList } })
  const toggleMapList = ({ map, list }) => router.push({ pathname: router.pathname, query: { ...router.query, showList: list, showMap: map } })
  return <Search_ results={results} showMap={showMap} onSubmit={onSubmit} toggleMap={toggleMap} showList={showList} toggleList={toggleList} size={size} toggleMapList={toggleMapList} search={search} />
}

const Search_ = ({ results = [], showMap, showList, onSubmit, toggleMap, toggleList, size, toggleMapList, search }) => (
  <Layout showFooter={false}>
    <Box fill flex>
      <Box align='center' justify='center' pad='xsmall' fill='horizontal' direction='row' gap='xsmall'>
        <Form onSubmit={onSubmit} style={{ width: '100%' }}>
          <Box direction='row' fill gap='small'>
            <FormField name='search' style={{ width: '100%' }}>
              <TextInput data-testid='search.input' placeholder='Search' defaultValue={search} autoFocus={search} onChange={event => onSubmit({ value: { search: event.target.value } })} />
            </FormField>
            <Button size='small' type='submit' icon={<Search color='control' />} />
          </Box>
        </Form>
      </Box>
      {size !== 'small' && <Box fill='horizontal' justify='between' direction='row'>
        <Box width='xxsmall'><Button size='small' disabled={!showMap} icon={showList ? <List color='control' /> : <List />} onClick={toggleList} /></Box>
        <Box width='xxsmall'><Button size='small' disabled={!showList} icon={showMap ? <Map color='control' /> : <Map />} onClick={toggleMap} /></Box>
      </Box>}
      <Box gap='small' pad='small' flex direction='row' justify='between'>
        {showList && <Box data-testid='posts' flex animation={{ type: 'slideRight', duration: 750 }} overflow='scroll'><SearchResults results={results} /></Box>}
        {showMap && <Box data-testid='map' flex animation={{ type: 'slideLeft', duration: 750 }}><MapContainer results={results} /></Box>}
      </Box>
      {size === 'small' && <Box align='center' fill='horizontal' style={{ position: 'fixed', bottom: '20px' }}>
        <Box
          align='center'
          justify='center'
          border={{ color: 'control' }}
          background={{ color: 'black', opacity: 'strong' }}
          pad='xsmall'
          width='xxsmall'
          height='xxsmall'
          round='medium'
        >
          <Button
            size='small'
            icon={showList ? <Map color='control' /> : <List color='control' />}
            onClick={() => toggleMapList({ map: showList, list: showMap })} />
        </Box>
      </Box>}
    </Box>
  </Layout>
)

export default withRouter(withSize(SearchContainer))
