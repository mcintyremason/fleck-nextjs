import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from '../../themes/fleckTheme'
import Layout from '../../components/Layout'
import FleckHeader from '../../components/FleckHeader'
import FleckFooter from '../../components/FleckFooter'
import FleckHero from '../../components/FleckHero'
import Hero from '../../components/abstractions/Hero'

const ContactPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Grid className={classNames(styles['contact-container'])}>
            <Grid container direction="column" className={classNames(styles['contact'])}>
              <Hero
                primaryText="Contact Fleck Roofing & Construction"
                gutters
                overlay
                justify="center"
                imageUrl="/img/reviews/reviews-hero.webp"
              />
            </Grid>
          </Grid>
          <FleckFooter />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default ContactPage
