import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Demo />
  </Layout>
)

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Disney API</h1>
      <h2>The REST API based on Disney characters</h2>
    </div>
  </div>
)

const Demo = () => (
  <div className={styles.demo}>
    <div className="container">
      <h3 className={styles.demoTitle}>Try it</h3>
      <div className={styles.demoRequest}>
        <span className={styles.demoUrl}>https://disneyapi.dev/api/</span>
        <input className={styles.demoInput} type="text" placeholder="characters" aria-label="api endpoint"/>
        <button className={styles.demoButton}>send</button>
      </div>
      <div className={styles.demoResult}>
        <pre>
          {'{ name: "Mickey Mouse" }'}.
        </pre>
      </div>
    </div>
  </div>
)

export default IndexPage
