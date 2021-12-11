import styles from './sidingSoffitFascia.module.css'
import classNames from 'classnames'

import { Grid, Link, ThemeProvider, Typography } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import fleckTheme from 'themes/fleckTheme'
import Layout from 'components/Layout'
import FleckHero from 'components/FleckHero'
import FleckCTA from 'components/FleckCTA'
import TeamIcon from 'components/icons/TeamIcon'

const SidingSoffitFasciaPage = () => {
  return (
    <ThemeProvider theme={fleckTheme}>
      <Layout title="Fleck Roofing & Construction">
        <Grid className={classNames(styles['siding-container'])}>
          <Grid container direction="column" className={classNames(styles['siding'])}>
            <FleckHero
              primaryText="Siding, Soffit, & Fascia Services"
              imageUrl="/img/services/siding-soffit-fascia-hero.jpeg"
            />
            <Grid container justifyContent="center">
              <Grid container justifyContent="center" className={styles['siding-content']}>
                <Grid item xs={12} sm={8} className={styles['siding-text-container']}>
                  <Grid container className={styles['siding-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['siding-text-heading']}
                      >
                        Update Your Home's Exterior
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['siding-text']}>
                        Aging and degraded siding can detract from your home's appeal and value. If
                        you're ready for a positive change, Fleck Roofing & Construction is the
                        company to call. Our experienced team will replace your existing siding with
                        a more modern product that looks fantastic. You'll be able to choose from a
                        range of siding options, including:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
                        <li>
                          <Typography>Vinyl</Typography>
                        </li>
                        <li>
                          <Typography>Treated wood siding</Typography>
                        </li>
                        <li>
                          <Typography>Soffit & Fascia</Typography>
                        </li>
                        <li>
                          <Typography>Window & door wraps</Typography>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                  <Grid container className={styles['siding-text-group']}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        color="primary"
                        align="center"
                        className={styles['siding-text-heading']}
                      >
                        When Should I Have My Siding Replaced?
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['siding-text']}>
                        Although it is installed to last for years, your siding may need to replaced
                        if you notice:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
                        <li>
                          <Typography>Rotting or warping</Typography>
                        </li>
                        <li>
                          <Typography>Color bleeding through</Typography>
                        </li>
                        <li>
                          <Typography>Fading</Typography>
                        </li>
                        <li>
                          <Typography>Cracking</Typography>
                        </li>
                        <li>
                          <Typography>Peeling paint</Typography>
                        </li>
                      </ul>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography className={styles['siding-text']}>
                        Please know that when we replace your siding, we'll take care of everything,
                        including the soffit and fascia work. To learn more and for a free quote,
                        please <Link href="/contact">contact us</Link>.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={4} className={styles['siding-cta-container']}>
                  <FleckCTA
                    color="secondary"
                    icon={
                      <TeamIcon
                        fontSize="large"
                        className={classNames(styles['cta-icon'], styles['team-icon'])}
                      />
                    }
                    className={styles['roof-integrity-cta']}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" gutterBottom>
                        A Second-Generation, Family-Run Business
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
                            styles['siding-cta-link'],
                            styles['siding-cta-phone'],
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
                      Mike and his team were great. The day of the guys showed up on time and
                      finished in a day and left no trace that they were here beside a new roof.
                    </Typography>
                    <Typography variant="body1" align="center" color="textPrimary">
                      - William Hess, Google Review
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

export default SidingSoffitFasciaPage
