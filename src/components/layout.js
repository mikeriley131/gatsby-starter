import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/main.scss'

import {Header} from './header'

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className='main' id='main' role='main'>
          {children}
        </main>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
