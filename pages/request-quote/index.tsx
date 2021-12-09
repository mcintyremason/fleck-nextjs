import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from '../../themes/fleckTheme'
import Layout from '../../components/Layout'
import FleckHeader from '../../components/FleckHeader'
import FleckFooter from '../../components/FleckFooter'

const RequestQuotePage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">{/* <Content /> */}</Layout>
    </ThemeProvider>
  )
}

export default RequestQuotePage
