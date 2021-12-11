import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, ThemeProvider, Typography } from '@material-ui/core'

import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckFooter from 'components/FleckFooter'
import FleckHero from 'components/FleckHero'

const AboutPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['about-container'])}>
          <Grid container direction="column" className={classNames(styles['about'])}>
            <FleckHero
              primaryText="About Fleck Roofing & Construction"
              imageUrl="/img/about/about-hero.png"
            />
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" className={styles['about-content']}>
                <Grid item xs={12}>
                  <Grid container className={styles['about-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h2"
                        color="primary"
                        align="center"
                        className={styles['title']}
                      >
                        Advanced Protection for Your Business
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item xs={12} md={9} lg={6}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          className={styles['about-text-container']}
                        >
                          <Typography className={styles['about-text']} align="center">
                            Your business is your livelihood. That's why the facility that houses
                            your business deserves the advanced protection that only a quality roof
                            can provide.
                          </Typography>
                          <Typography className={styles['about-text']} align="center">
                            Established in 1988, Fleck Roofing & Construction Specializes in
                            roofing, siding, and gutters.
                          </Typography>
                          <Typography className={styles['about-text']} align="center">
                            We use only reputable brands like Atlas Roofing Producs, RPI Roofing
                            Products, CertainTeed, Mastic, and Owens Corning. We're also certified
                            to ensure the highest quality work possible, with Atlas and RPI
                            certifications.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container justifyContent="center">
                        <Grid container justifyContent="center">
                          <Typography
                            variant="h2"
                            color="primary"
                            align="center"
                            className={(styles['title'], styles['about-text-heading'])}
                          >
                            Our Trusted Specialties
                          </Typography>
                        </Grid>
                        <Grid container justifyContent="center">
                          <Grid
                            container
                            justifyContent="center"
                            className={styles['about-services']}
                          >
                            <Grid container justifyContent="center" item xs={9}>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Slate roofing repair</Typography>
                              </Grid>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Metal roofing repair</Typography>
                              </Grid>
                            </Grid>
                            <Grid container justifyContent="center" item xs={9}>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Leak detection and repair</Typography>
                              </Grid>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Storm and wind damage repair</Typography>
                              </Grid>
                            </Grid>
                            <Grid container justifyContent="center" item xs={9}>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Roof drain system fixes</Typography>
                              </Grid>
                              <Grid container justifyContent="center" item xs={3}>
                                <Typography>Gutter installation and repair</Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="center" className={styles['banner-contaner']}>
                      <Typography variant="h2" align="center">
                        In Business Since 1988 | Warranties Available | Free Quotes
                      </Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                      <Grid item xs={12} md={8}>
                        <iframe
                          className={styles['about-map']}
                          frameBorder="0"
                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBXUzkyFX7TcltENw5Z0Cv5zmvRfdKInRc&q=2100+Edgewood+Avenue%2C%2CEaston%2CPA%2C18045%2C"
                          allowFullScreen
                        ></iframe>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <FleckFooter />
      </Layout>
    </ThemeProvider>
  )
}

export default AboutPage
