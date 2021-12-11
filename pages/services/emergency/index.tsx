import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckHero from 'components/FleckHero'
import FleckCTA from 'components/FleckCTA'
import AvailabilityIcon from 'components/icons/AvailabilityIcon'

const EmergencyRoofingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['emergency-container'])}>
          <Grid container direction="column" className={classNames(styles['emergency'])}>
            <FleckHero
              primaryText="Emergency Roofing Services"
              imageUrl="/img/services/emergency-hero.jpeg"
            />
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" className={styles['emergency-content']}>
                <Grid item xs={12} sm={8} className={styles['emergency-text-container']}>
                  <Grid container className={styles['emergency-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['emergency-text-heading']}
                      >
                        Expect a Quick Response for Your Damaged Roof
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['emergency-text']}>
                        In the eyes of a homeowner, a damaged roof qualifies as an emergency. If
                        you're dealing with this unfortunate situation, give Fleck Roofing &
                        Construction a call. Our responsive crew will get to your property quickly,
                        assess the damage, and make a recommendation on the best course of action.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['emergency-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['emergency-text-heading']}
                      >
                        Available Whenever You Need Us
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['emergency-text']}>
                        For your convenience, our crews are available 24 hours a day. You can call
                        us for all your urgent roofing-related needs, from storm damage repair to
                        roof leak repair and beyond. For a free quote on any of our services, please{' '}
                        <Link href="/contact">contact us</Link> today.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4} className={styles['emergency-cta-container']}>
                  <FleckCTA
                    color="secondary"
                    icon={
                      <AvailabilityIcon
                        fontSize="large"
                        className={classNames(styles['cta-icon'], styles['team-icon'])}
                      />
                    }
                    className={styles['roof-integrity-cta']}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        24/7 Emergency Services Available
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
                            styles['emergency-cta-link'],
                            styles['emergency-cta-phone'],
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
                </Grid>
                <Grid item xs={12} className={styles['emergency-review-container']}>
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
                      We recently had Fleck Roofing & Construction come over and handle a leak due
                      to a flashing issue. The team was very professional in identifying the problem
                      and explaining to me how they fixed it!
                    </Typography>
                    <Typography variant="body1" align="center" color="textPrimary">
                      - Grover Bigley, Google Review
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

export default EmergencyRoofingPage
