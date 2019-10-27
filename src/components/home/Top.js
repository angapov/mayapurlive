import React from 'react'
import { Box, Stack, Text, ResponsiveContext, TextInput, Form, FormField, Button, Layer } from 'grommet'
import { Search as SearchIcon, LinkPrevious } from 'grommet-icons'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../Image'
import InDevelopment from '../InDevelopment'
import Link from '../Link'
import intl from '../../intl'
import { useLocale } from '../../lib'

const Search = ({ onSubmit, lang = 'en' }) => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'
  return (
    <Box align='center' justify='center' fill='horizontal' direction='row' gap='xsmall' background={{ color: 'black', opacity: 'medium' }}>
      <Form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Box direction='row' fill gap='small' background={{ dark: true }} pad={!isSmall && 'xsmall'}>
          <FormField name='search' style={{ width: '100%' }}>
            <TextInput data-testid='search.input' placeholder={intl.searchPlaceholder[lang]} onChange={event => onSubmit({ value: { search: event.target.value } })} />
          </FormField>
          <Button size='small' type='submit' icon={<SearchIcon color='control' />} />
        </Box>
      </Form>
    </Box>
  )
}

const Quote = ({ lang = 'en', prabhupadImage }) => {
  const size = React.useContext(ResponsiveContext)
  return (
    <Box data-testid='quote' gap='small' pad='xsmall' background={{ color: 'black', opacity: 'medium' }} align='center' justify='center' direction={size === 'small' ? 'column' : 'row'}>
      <Box align='center' justify='center'><Text size={size} color='light-1' textAlign='center' weight='bold'><em>"{intl.home_quote[lang]}"</em></Text></Box>
      <Box direction='row' gap='xsmall'>
        <Box round='xlarge' height='xxsmall' width='xxsmall'>
          <Link to='/srila-prabhupada'><Image gatsbyImage={prabhupadImage.childImageSharp} /></Link>
        </Box>
        <Box>
          <Link to='/srila-prabhupada'>{intl.home_prabhupada[lang]}</Link>
          <Text color='light-1' size='small'>{intl.home_prabhupadaStatus[lang]}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const Services = () => {
  const [open, setOpen] = React.useState()
  const locale = useLocale()
  const screen = React.useContext(ResponsiveContext)
  const isSmall = screen === 'small'
  const textSize = isSmall ? 'small' : 'medium'
  const services = [
    { id: 'visa', title: { en: 'Get Visa', ru: 'Получить визу' } },
    { id: 'flights', title: { en: 'Search Flights', ru: 'Найти билеты' } },
    { id: 'rent', title: { en: 'Rent Room', ru: 'Арендовать жилье' } },
    { id: 'tour', title: { en: 'Book Tour', ru: 'Бронировать тур' } }
  ]
  return (
    <>
      <Box height={{ max: 'xsmall' }} fill='horizontal' align='center' justify='center' direction='row' pad='small' round='small' gap='small'>
        {services.map(service => (
          <Box pad='small' align='center' justify='center' key={service.title[locale]} basis='full'>
            <Box elevation='small' border={{ color: 'control' }} round='xsmall' background={!isSmall && { color: 'black', opacity: 'strong' }} width='small' height='xsmall' align='center' justify='center'>
              <Button onClick={() => setOpen(service.id)} fill plain label={<Box fill align='center' justify='center'><Text textAlign='center' size={textSize} color='light-1' weight='bold'>{service.title[locale]}</Text></Box>} />
            </Box>
          </Box>
        ))}
      </Box>
      {open && (
        <Layer full={isSmall} onClickOutside={() => setOpen(null)}>
          <Box height='large' width='large' align='center' justify='center'>
            {open === 'flights' ? <Flights width={isSmall ? '100%' : '650px'} height='370px' /> : <InDevelopment />}
          </Box>
          <Button onClick={() => setOpen(null)} icon={<LinkPrevious color='control' />} />
        </Layer>
      )}
    </>
  )
}

const Flights = ({ width = 620, height = 250 }) => {
  const locale = useLocale()
  const src = { // FIXME: remove hardcode
    ru: '//www.travelpayouts.com/widgets/7c669dfab8d675d4dfe6d0bf8be8a44d.html?v=1831',
    en: '//www.travelpayouts.com/widgets/7d98780e8e66ae3983a9fad6d886e6f1.html?v=1884'
  }
  return (
    <iframe scrolling='no' width={width} height={height} frameborder='0' src={src[locale]} />
  )
}

const Top = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "tovp-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      prabhupadImage: file(relativePath: { eq: "prabhupada.png" }) {
        childImageSharp {
          fixed(width: 48, height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const locale = useLocale()
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'
  return (
    <Box fill>
      <Stack fill>
        <Box fill height={{ max: 'medium' }}>
          <Image gatsbyImage={data.bannerImage.childImageSharp} />
        </Box>
        <Box fill justify='between'>
          <Quote lang={locale} prabhupadImage={data.prabhupadImage} />
          {/* {!isSmall && <Box fill='horizontal' align='center' justify='center'><Flights /></Box>} */}
          {!isSmall && <Services />}
          <Search lang={locale} onSubmit={value => console.log(value)} />
        </Box>
      </Stack>
      {/* {isSmall && <Box fill='horizontal' align='center' justify='center'><Flights width='100%' height='370' /></Box>} */}
      {isSmall && <Box fill='horizontal' align='center' justify='center'><Services /></Box>}
    </Box>
  )
}

export default Top
