import { Grid } from 'grommet'

import withSize from '../withSize'

import SearchResult from './SearchResult'

const SearchResults = ({ router, size, results }) => (
  <Grid
    align='start'
    columns={size !== 'small' && { count: 'fill', size: 'medium' }}
    gap='medium'
  >
    {results.map((result, index) => (
      <SearchResult
        key={result.id}
        post={result}
      />
    ))}
  </Grid>
)

export default withSize(SearchResults)
