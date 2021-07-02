import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'

import fleckTheme from '../../../themes/fleckTheme'
import Layout from '../../../components/Layout'
import FleckHeader from '../../../components/FleckHeader'
import FleckFooter from '../../../components/FleckFooter'
import FleckHero from '../../../components/FleckHero'

const ResidentialRoofingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid
          className={classNames('app height-full', styles['test'])}
          itemScope
          itemType="http://schema.org/LocalBusiness"
        >
          <FleckHeader />
          <Grid className={classNames(styles['residential-container'])}>
            <Grid container direction="column" className={classNames(styles['residential'])}>
              <FleckHero
                primaryText="Residential Roofing Services"
                imageUrl="/img/services/residential-hero.jpeg"
              />
            </Grid>
          </Grid>
          <FleckFooter />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default ResidentialRoofingPage
