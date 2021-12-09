import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider } from '@material-ui/core'

import Layout from '../components/Layout'
import FleckFooter from '../components/FleckFooter'
import FleckHero from '../components/FleckHero'
import FleckLearnMore from '../components/FleckLearnMore'
import FleckCustomerSays from '../components/FleckCustomerSays'

import fleckTheme from '../themes/fleckTheme'

type IndexPageProps = {
  testJson: any
}

const IndexPage = (props: IndexPageProps) => {
  const { testJson } = props

  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['home-container'])}>
          <Grid container direction="column" className={classNames(styles['home'])}>
            <FleckHero primaryText="We're the Guys That Keep You Dry" />
            <FleckLearnMore />
            <FleckCustomerSays />
          </Grid>
        </Grid>
        {console.log(testJson)}
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage
