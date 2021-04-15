import React from 'react'
import { Grid, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import RatingBar from '../components/RatingBar'

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 768,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        main: '#e43d30;',
        contrastText: '#000000',
      },
      secondary: {
        main: '#ffd040',
        contrastText: '#000000',
      },
    },
    // only overrides can use CSS variables
    overrides: {
      MuiDrawer: {
        paper: {
          backgroundColor: 'var(--background-primary)',
          padding: '7px',
        },
      },
      MuiTypography: {
        colorTextPrimary: {
          color: '#000000',
        },
        colorTextSecondary: {
          color: '#ffffff',
        },
        h1: {
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '54px',
          fontWeight: 700,
          fontStyle: 'normal',
          textDecoration: 'none',
          letterSpacing: 'normal',
        },
      },
    },
  }),
)

theme.typography.h5 = {
  fontSize: '1em',
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}

type IndexPageProps = {
  testJson: any
}

const IndexPage = (props: IndexPageProps) => {
  const { testJson } = props

  return (
    <ThemeProvider theme={theme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <Header />
          <Content />
          <Footer />
          {console.log(testJson)}
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const json = await res.json()
  return { testJson: json }
}

export default IndexPage
