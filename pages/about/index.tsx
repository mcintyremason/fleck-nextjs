import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import fleckTheme from '../../themes/fleckTheme'
import Layout from '../../components/Layout'
import FleckHeader from '../../components/FleckHeader'
import FleckFooter from '../../components/FleckFooter'
import FleckHero from '../../components/FleckHero'
import FleckCTA from '../../components/FleckCTA'

const AboutPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
          <FleckHeader />
          <Grid className={classNames(styles['about-container'])}>
            <Grid container direction="column" className={classNames(styles['about'])}>
              <FleckHero
                primaryText="About Fleck Roofing & Construction"
                imageUrl="/img/about/about-hero.png"
              />
              <Grid container justifyContent="center">
                <Grid container justifyContent="center" className={styles['about-content']}>
                  <Grid item xs={12} sm={8} className={styles['about-text-container']}>
                    <Grid container className={styles['about-text-group']}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h4"
                          color="primary"
                          align="center"
                          className={styles['about-text-heading']}
                        >
                          Advanced Protection for Your Business
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
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
                      <Grid item xs={12} md={6}>
                        <Grid container justifyContent="center">
                          <Typography variant="h2" align="center">
                            Our Specialties
                          </Typography>
                          <ul className={styles['about-services']}>
                            <li>
                              <Typography>Slate roofing repair</Typography>
                            </li>
                            <li>
                              <Typography>Metal roofing repair</Typography>
                            </li>
                            <li>
                              <Typography>Leak detection and repair</Typography>
                            </li>
                            <li>
                              <Typography>Storm and wind damage repair</Typography>
                            </li>
                            <li>
                              <Typography>Roof drain system fixes</Typography>
                            </li>
                            <li>
                              <Typography>Gutter installation and repair</Typography>
                            </li>
                          </ul>
                        </Grid>
                      </Grid>
                      <Grid container className={styles['banner-contaner']}>
                        <Typography variant="h4" align="center">
                          In Business Since 1988 | Warranties Available | Free Quotes
                        </Typography>
                      </Grid>
                      <Grid container>
                        <Grid item xs={12} md={6}>
                          <iframe
                            className={styles['about-map']}
                            frameBorder="0"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBXUzkyFX7TcltENw5Z0Cv5zmvRfdKInRc&q=2100+Edgewood+Avenue%2C%2CEaston%2CPA%2C18045%2C"
                            allowFullScreen
                          ></iframe>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography>Fleck Roofing & Construction</Typography>
                          <Typography>2100 Edgewood Avenue</Typography>
                          <Typography>Easton, PA 18015</Typography>
                          <Typography>
                            <Link href="https://maps.google.com/maps?daddr=2100%20Edgewood%20Avenue,%20Easton,%20PA%2018045&hl=en">
                              Get Directions
                            </Link>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
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

export default AboutPage
