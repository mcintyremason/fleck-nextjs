import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import { NextPageContext } from 'next'

import Layout from '../components/Layout'
import FleckHeader from '../components/FleckHeader'
import Content from '../components/Content'
import FleckFooter from '../components/FleckFooter'
import { customTheme } from '../utils/customTheme'

type IndexPageProps = {
  testJson: any
}

const IndexPage = (props: IndexPageProps) => {
  const { testJson } = props

  return (
    <ThemeProvider theme={customTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Content />
          <FleckFooter />
          {console.log(testJson)}
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

IndexPage.getInitialProps = async (_: NextPageContext) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await res.json()
  return { testJson: json }
}

export default IndexPage
