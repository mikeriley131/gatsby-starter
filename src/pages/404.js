import React from 'react'

import { Layout } from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

// or if you just want to redirect to home page:
// const NotFoundPage = () => {
//   if (typeof window !== 'undefined') {
//     window.location = '/'
//   }

//   return null
// }

// export default NotFoundPage
