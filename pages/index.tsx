import React from 'react'
import { Grid, ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core'

import Layout from '../components/Layout'
import FleckHeader from '../components/FleckHeader'
import Content from '../components/Content'
import Footer from '../components/abstractions/Footer'
import { NextPageContext } from 'next'

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
      MuiLink: {
        root: {
          color: 'var(--primary-color)',
          borderColor: 'var(--primary-color)',
          textDecoration: 'none',
        },
        underlineHover: {
          border: 'none',
          borderColor: 'transparent',
          '&:hover': {
            color: 'var(--secondary-color)',
            textDecoration: 'none',
            borderBottom: '4px solid var(--secondary-color)',
            transition: 'color 0.5s, border 0.5s;',
          },
          '&:focus': {
            color: 'var(--secondary-color)',
            textDecoration: 'none',
            borderBottom: '4px solid var(--secondary-color)',
            transition: 'color 0.5s, border 0.5s;',
          },
        },
      },
      MuiDrawer: {
        paper: {
          backgroundColor: 'var(--background-primary)',
          padding: '7px',
        },
        paperAnchorDockedRight: {
          borderLeft: '1px solid var(--background-secondary)',
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
          fontSize: '54px',
          fontWeight: 600,
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
          textDecoration: 'none',
          letterSpacing: 'normal',
        },
        h2: {
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '36px',
          fontFamily:
            'Raleway, San Frediano, BloggerSans, Helvetica Neue, Helvetica, Arial, sans-serif',
          fontStyle: 'normal',
          textDecoration: 'none',
          letterSpacing: 'normal',
        },
        h3: {
          fontWeight: 700,
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
          <FleckHeader />
          <Content />
          <Footer />
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
