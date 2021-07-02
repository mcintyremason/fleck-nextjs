import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'

import fleckTheme from '../../themes/fleckTheme'
import Layout from '../../components/Layout'
import FleckHeader from '../../components/FleckHeader'
import FleckFooter from '../../components/FleckFooter'
import FleckHero from '../../components/FleckHero'

const ReviewsPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Grid className={classNames(styles['reviews-container'])}>
            <Grid container direction="column" className={classNames(styles['reviews'])}>
              <FleckHero
                primaryText="Fleck Roofing & Construction Customer Reviews"
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

export default ReviewsPage
