import './requestQuote.module.css'

import { ThemeProvider } from '@material-ui/core'
import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'

const RequestQuotePage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">{/* <Content /> */}</Layout>
    </ThemeProvider>
  )
}

export default RequestQuotePage
