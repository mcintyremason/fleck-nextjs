import React from 'react'
import { Grid, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 769,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        main: '#e43d30',
      },
      secondary: {
        main: '#ffd040',
      },
    },
    overrides: {
      MuiDrawer: {
        paper: {
          backgroundColor: 'var(--background-secondary)',
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
          fontSize: '40px',
          fontWeight: 700,
          fontStyle: 'normal',
          textDecoration: 'none',
        },
      },
    },
  }),
)

theme.typography.h5 = {
  fontSize: '.7rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
}

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout title="Fleck Roofing & Construction">
      <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
        <Header />
        <Content />
        <Footer />
      </Grid>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
