import styles from './roofReplacement.module.css'
import classNames from 'classnames'

import { Grid, ThemeProvider } from '@material-ui/core'
import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckHero from 'components/FleckHero'

const RoofReplacementPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['roof-replacement-container'])}>
          <Grid container direction="column" className={classNames(styles['roof-replacement'])}>
            <FleckHero
              primaryText="Roof Replacement Services"
              imageUrl="/img/services/roof-replacement-hero.webp"
            />

            {/*
              <FleckLearnMore />
              <FleckCustomerSays /> */}
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default RoofReplacementPage
