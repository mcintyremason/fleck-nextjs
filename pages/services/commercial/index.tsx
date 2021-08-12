import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined'

import fleckTheme from '../../../themes/fleckTheme'
import Layout from '../../../components/Layout'
import FleckHeader from '../../../components/FleckHeader'
import FleckFooter from '../../../components/FleckFooter'
import FleckHero from '../../../components/FleckHero'
import FleckCTA from '../../../components/FleckCTA'

const CommercialRoofingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Grid className={classNames(styles['commercial-container'])}>
            <Grid container direction="column" className={classNames(styles['commercial'])}>
              <FleckHero
                primaryText="Commercial Roofing Services"
                imageUrl="/img/services/commercial-hero.webp"
                className={styles['commercial-hero']}
              />
              <Grid container justify="center">
                <Grid container justify="center" className={styles['commercial-content']}>
                  <Grid item xs={12} sm={8} className={styles['commercial-text-container']}>
                    <Grid container className={styles['commercial-text-group']}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h4"
                          color="primary"
                          align="center"
                          className={styles['commercial-text-heading']}
                        >
                          Advanced Protection for Your Business
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={styles['commercial-text']}>
                          Your business is your livelihood. That's why the facility that houses your
                          business deserves the advanced protection that only a quality roof can
                          provide.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={styles['commercial-text']}>
                          If you're looking for a contractor you can trust to work on your
                          commercial building's roof, choose Fleck Roofing & Construction. Our
                          locally and family owned company has a proven track record of providing
                          exceptional roofing services that dates to 1988.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={styles['commercial-text']}>
                          We understand the importance of your roof and will make sure it protects
                          your facility for decades to come.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container className={styles['commercial-text-group']}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h4"
                          color="primary"
                          align="center"
                          className={styles['commercial-text-heading']}
                        >
                          Expert Maintenance and Roof Repair
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={styles['commercial-text']}>
                          A commercial roof can be more complex than the residential variety. That's
                          why it's important to have someone with the necessary skills to work on
                          it.
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={styles['commercial-text']}>
                          You'll be pleased to know that the experts at Fleck Roofing & Construction
                          have those skills. We will provide thorough inspections of your facility's
                          roof, locating and repairing minor issues before they become more serious
                          and costly problems. This regular maintenance is designed to save you
                          money in the long run.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={4} className={styles['commercial-cta-container']}>
                    <FleckCTA
                      color="secondary"
                      icon={
                        <GroupAddOutlinedIcon
                          fontSize="large"
                          className={classNames(styles['cta-icon'])}
                        />
                      }
                      className={styles['roof-integrity-cta']}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h4" align="center" gutterBottom>
                          Multiple Crews Available
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
                              styles['commercial-cta-link'],
                              styles['commercial-cta-phone'],
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
          <FleckFooter />
        </Grid>
      </Layout>
    </ThemeProvider>
  )
}

export default CommercialRoofingPage
