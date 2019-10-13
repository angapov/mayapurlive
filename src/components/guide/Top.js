import { withRouter } from 'next/router'

import { Box, Stack, Form, Button, FormField, TextInput, Text, Anchor } from 'grommet'
import { Search } from 'grommet-icons'

import withSize from '../withSize'
import { SmartProgressiveImage } from '../Image'

import translations from '../../lib/translations'

const SearchOnMain = ({ onSubmit, lang = 'en' }) => (
  <Box align='center' justify='center' pad='xsmall' fill='horizontal' direction='row' gap='xsmall' background={{ color: 'black', opacity: 'medium' }}>
    <Form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Box direction='row' fill gap='small'>
        <FormField name='search' style={{ width: '100%' }} >
          <TextInput data-testid='search.input' placeholder={translations.searchPlaceholder[lang]} onChange={event => onSubmit({ value: { search: event.target.value } })} />
        </FormField>
        <Button size='small' type='submit' icon={<Search color='control' />} />
      </Box>
    </Form>
  </Box>
)

const Quote = ({ size, lang = 'en' }) => (
  <Box data-testid='quote' gap='small' pad='xsmall' background={{ color: 'black', opacity: 'medium' }} align='center' justify='center' direction={size === 'small' ? 'column' : 'row'}>
    <Box align='center' justify='center'><Text textAlign='center' weight='bold'><em>"{translations.home.quote[lang]}"</em></Text></Box>
    <Box direction='row' gap='xsmall'>
      <Box height='xxsmall' width='xxsmall' background='url(/static/img/prabhupada.png)' />
      <Box>
        <Anchor>{translations.home.prabhupada[lang]}</Anchor>
        <Text size='small'>{translations.home.prabhupadaStatus[lang]}</Text>
      </Box>
    </Box>
  </Box>
)

const Top = ({ size, router }) => (
  <Box fill='horizontal' height='medium'>
    <Stack fill>
      <Box fill>
        <SmartProgressiveImage
          data-testid='banner'
          src={require('./tovp-banner.jpg')}
          webpSrc={require('./tovp-banner.jpg?webp')}
          placeholder={require('./tovp-banner.jpg?lqip')}
          fit='cover'
        />
      </Box>
      <Box fill justify='between'>
        <Quote size={size} lang={router.query.lang} />
        <SearchOnMain onSubmit={({ value }) => router.push({ pathname: '/search', query: { q: value.search } })} lang={router.query.lang} />
      </Box>
    </Stack>
  </Box>
)

export default withRouter(withSize(Top))
