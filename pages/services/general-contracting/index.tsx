import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from '../../../themes/fleckTheme'
import Layout from '../../../components/Layout'
import FleckHeader from '../../../components/FleckHeader'
import FleckFooter from '../../../components/FleckFooter'
import FleckHero from '../../../components/FleckHero'

const GeneralContractingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Grid className={classNames(styles['general-contracting-container'])}>
            <Grid
              container
              direction="column"
              className={classNames(styles['general-contracting'])}
            >
              <FleckHero
                primaryText="General Contracting Services"
                imageUrl="/img/services/general-contracting-hero.jpeg"
              />
              {/*
              <FleckLearnMore />
              <FleckCustomerSays /> */}
            </Grid>
          </Grid>
          <FleckFooter />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default GeneralContractingPage
