import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import Hero from 'components/abstractions/Hero'

export const ContactPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['contact-container'])}>
          <Grid container direction="column" className={classNames(styles['contact'])}>
            <Hero
              primaryText="Contact Fleck Roofing & Construction"
              gutters
              overlay
              justify="center"
              imageUrl="/img/testimonials/testimonials-hero.webp"
            />
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}
