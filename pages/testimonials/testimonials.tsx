import styles from './testimonials.module.css'
import classNames from 'classnames'

import { Grid, ThemeProvider } from '@material-ui/core'

import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckHero from 'components/FleckHero'

const TestimonialsPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['reviews-container'])}>
          <Grid container direction="column" className={classNames(styles['reviews'])}>
            <FleckHero
              primaryText="Fleck Roofing & Construction Customer Testimonials"
              imageUrl="/img/testimonials/testimonials-hero.webp"
            />
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default TestimonialsPage
