import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div
      className="container"
      style={{
        color: `#2f2f30`,
        textAlign: `center`
      }}
    >
      <h1
        style={{
          fontSize: `20vw`,
          margin: `0`,
          textDecoration: `underline #f9dc5c solid`
        }}
      >
        404
      </h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
