import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from '../../themes/fleckTheme'
import Layout from '../../components/Layout'
import FleckHeader from '../../components/FleckHeader'
import FleckFooter from '../../components/FleckFooter'

const RequestQuotePage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          {/* <Content /> */}
          <FleckFooter />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default RequestQuotePage
