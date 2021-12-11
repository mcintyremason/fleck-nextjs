import styles from './residential.module.css'
import classNames from 'classnames'

import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckHero from 'components/FleckHero'
import FleckCTA from 'components/FleckCTA'
import RoofWithIntegrityIcon from 'components/icons/RoofWithIntegrityIcon'

const ResidentialRoofingPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['residential-container'])}>
          <Grid container direction="column" className={classNames(styles['residential'])}>
            <FleckHero
              primaryText="Residential Roofing Services"
              imageUrl="/img/services/residential-hero.jpeg"
              className={styles['residential-hero']}
            />
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" className={styles['residential-content']}>
                <Grid item xs={12} sm={8} className={styles['residential-text-container']}>
                  <Grid container className={styles['residential-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['residential-text-heading']}
                      >
                        A Roofing Company You Can Trust
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['residential-text']}>
                        Make sure your home has a roof that adequately protects it with help from
                        Fleck Roofing & Construction. Our second-generation-owned family business
                        has been providing high-quality work since 1988.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['residential-text']}>
                        You can expect complete honesty and reliability when you hire our
                        professionals to work on your roof. We'll take the time to make sure you
                        understand what needs to be done and why we're doing it. And we won't sell
                        you on anything that's unnecessary. Service with integrity - that's what
                        we're all about!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['residential-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['residential-text-heading']}
                      >
                        Is It Time to Replace Your Roof?
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['residential-text']}>
                        If your roof is 15 to 20 years or older or in need of extensive repairs, it
                        may be time for a roof replacement. When you’re ready to make this wise
                        investment, turn to Fleck Roofing & Construction. Our family-run business
                        has been replacing roofs like yours since 1988. You can count on us to get
                        the job done right the first time.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['residential-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['residential-text-heading']}
                      >
                        Full-Service Roof Replacement Contractors
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['residential-text']}>
                        When you hire our residential roof replacement experts, you won't need to
                        call anybody else. Our full-service team will take care of everything from
                        the demolition of your existing roof to the installation of the new roof. We
                        offer a wide range of services, including:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
                        <li>
                          <Typography>Residential roofing installation</Typography>
                        </li>
                        <li>
                          <Typography>Slate roofing</Typography>
                        </li>
                        <li>
                          <Typography>Metal Roofing</Typography>
                        </li>
                        <li>
                          <Typography>Plywood installation, replacement, and repair</Typography>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['residential-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['residential-text-heading']}
                      >
                        Roofing That Includes Excellent Warranties
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['residential-text']}>
                        When we’re done replacing your old roof with a new one, we don’t just walk
                        away and hope for the best. Our full roof replacements come backed by a
                        10-year workmanship warranty and a manufacturers’ warranty to boot!
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['residential-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['residential-text-heading']}
                      >
                        Comprehensive Roofing-Related Repair
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
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
                </Grid>
                <Grid item xs={12} sm={4} className={styles['residential-cta-container']}>
                  <FleckCTA
                    color="secondary"
                    icon={<RoofWithIntegrityIcon className={styles['cta-icon']} />}
                    className={styles['roof-integrity-cta']}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        Roofers With Integrity
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
                            styles['residential-cta-link'],
                            styles['residential-cta-phone'],
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
                      Did the work as scheduled. Constantly stayed in touch. Answered all my
                      questions. Would recommend them!
                    </Typography>
                    <Typography variant="body1" align="center" color="textPrimary">
                      - Virginia S., HomeAdvisor Review
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

export default ResidentialRoofingPage
