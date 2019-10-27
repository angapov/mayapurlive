import React from 'react'
import { withRouter } from 'next/router'

import withApi from '../../lib/withApi'

import Search from './Search'

class SearchContainer extends React.Component {
  state = { results: [] }
  async componentDidMount () {
    this.setState({ results: await this.getResults() })
  }

  async componentDidUpdate (prevProps, prevState) {
    const { lang, category, q } = this.props.router.query
    const { lang: prevLang, category: prevCategory, q: prevQ } = prevProps.router.query
    if ((lang !== prevLang) || (category !== prevCategory) || (q !== prevQ)) {
      this.setState({ results: await this.getResults() })
    }
  }

  async getResults () {
    const { lang = 'en', category, q } = this.props.router.query
    let params = { category__slug: category }
    if (q) {
      params.search = q
    }
    const res = await this.props.api.get('/posts/', { params, headers: { 'Accept-Language': lang } })
    const results = await res.data
    return results
  }

  render () {
    const { results } = this.state
    return <Search results={results} />
  }
}

export default withRouter(withApi(SearchContainer))
