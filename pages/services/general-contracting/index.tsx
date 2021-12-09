import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined'

import fleckTheme from '../../../themes/fleckTheme'
import Layout from '../../../components/Layout'
import FleckHeader from '../../../components/FleckHeader'
import FleckFooter from '../../../components/FleckFooter'
import FleckHero from '../../../components/FleckHero'
import FleckCTA from '../../../components/FleckCTA'

const GeneralContractingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['contracting-container'])}>
          <Grid container direction="column" className={classNames(styles['contracting'])}>
            <FleckHero
              primaryText="General Contracting Services"
              imageUrl="/img/services/general-contracting-hero.jpeg"
              className={styles['contracting-hero']}
            />
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" className={styles['contracting-content']}>
                <Grid item xs={12} sm={8} className={styles['contracting-text-container']}>
                  <Grid container className={styles['contracting-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['contracting-text-heading']}
                      >
                        Remodeling With Your Vision in Mind
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['contracting-text']}>
                        Do you love the home you live in but feel it's not as modern as you'd like
                        it to be? Bring it up to date with general contracting services provided by
                        Fleck Roofing & Construction. Our experienced remodeling team has been
                        transforming homes like yours since 1988.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['contracting-text']}>
                        When you hire us, you'll be working with a second-generation, family-run
                        company that will take the time to understand your goals and make them a
                        reality. It's what helps separate us from the competition!{' '}
                        <Link href="/contact">Contact</Link> us today!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['contracting-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['contracting-text-heading']}
                      >
                        Rely on Our One-Call General Contracting Team
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
                        <li>
                          <Typography>New construction</Typography>
                        </li>
                        <li>
                          <Typography>Dormer additions</Typography>
                        </li>
                        <li>
                          <Typography>Chimney demolitions</Typography>
                        </li>
                        <li>
                          <Typography>Window & door installations</Typography>
                        </li>
                        <li>
                          <Typography>Skylight installations</Typography>
                        </li>
                        <li>
                          <Typography>Framing repairs</Typography>
                        </li>
                        <li>
                          <Typography>Junk removal</Typography>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4} className={styles['contracting-cta-container']}>
                  <FleckCTA
                    color="secondary"
                    icon={
                      <HouseOutlinedIcon
                        fontSize="large"
                        className={classNames(styles['cta-icon'])}
                      />
                    }
                    className={styles['roof-integrity-cta']}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        For All Your Home Improvement Needs
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography align="center" gutterBottom color="textPrimary">
                        Call today for a free quote.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" align="center">
                        <Link
                          href="tel:(610)250-0737"
                          className={classNames(
                            styles['contracting-cta-link'],
                            styles['contracting-cta-phone'],
                          )}
                        >
                          (610) 250-0737
                        </Link>
                      </Typography>
                    </Grid>
                  </FleckCTA>
                  <FleckCTA color="text-primary" borderColor="text-primary">
                    <Typography align="center">
                      Veteran and senior discounts are available! Call to let us know if you
                      qualify.
                    </Typography>
                  </FleckCTA>
                  <FleckCTA
                    color="secondary"
                    icon={
                      <ChatOutlinedIcon
                        fontSize="large"
                        className={classNames(styles['cta-icon'])}
                      />
                    }
                  >
                    <Typography
                      variant="body1"
                      align="center"
                      gutterBottom
                      className={styles['italic']}
                    >
                      Has done multiple roofs for me over the years. Hard to find a roofer you can
                      trust, but they will get the job done.
                    </Typography>
                    <Typography variant="body1" align="center" color="textPrimary">
                      - Colden Properties, Google Review
                    </Typography>
                  </FleckCTA>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default GeneralContractingPage
