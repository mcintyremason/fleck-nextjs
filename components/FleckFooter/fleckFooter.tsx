import styles from './fleckFooter.module.css'

import Footer from 'components/abstractions/Footer'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Grid, GridSize, Link, Typography } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import classNames from 'classnames'

type FleckFooterProps = {} & Partial<Record<Breakpoint, boolean | GridSize>>

export const FleckFooter: React.FC<FleckFooterProps> = (props: FleckFooterProps) => {
  const { xs, md, lg, xl } = props

  return (
    <Footer xs={xs} md={md} lg={lg} xl={xl}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        className={styles['fleck-footer-container']}
      >
        <Grid container item xs={12}>
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            className={classNames(styles['social-media-icons'])}
          >
            <Link href="https://www.facebook.com/105650658205550">
              <FacebookIcon className={styles['facebook']} />
            </Link>
            <Link href="https://www.instagram.com/roofwithfleck">
              <InstagramIcon className={styles['instagram']} />
            </Link>
          </Grid>
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            md={4}
            className={styles['footer-content']}
          >
            <Grid container direction="column" justifyContent="flex-start" alignItems="center">
              <Typography variant="h5" className={styles['footer-content-title']}>
                Address
              </Typography>

              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={styles['footer-content-text']}
              >
                <Typography gutterBottom>2100 Edgewood Ave</Typography>
                <Typography gutterBottom>Easton, PA 18045</Typography>
                <Typography>
                  <Link href="https://www.google.com/maps?daddr=2100+Edgewood+Ave++Easton+PA+18045+US">
                    Get Directions
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            md={4}
            className={styles['footer-content']}
          >
            <Grid container direction="column" justifyContent="flex-start">
              <Grid container justifyContent="center">
                <Typography variant="h5" className={styles['footer-content-title']}>
                  Hours
                </Typography>
              </Grid>
              <Grid className={styles['footer-content-text']}>
                <Grid container item xs={12}>
                  <Grid item xs={4} sm={5} md={4} lg={5}>
                    <Typography align="right">Mon-Fri</Typography>
                  </Grid>
                  <Grid item xs={2} sm={1} md={2} lg={1}></Grid>
                  <Grid item xs={6}>
                    <Typography>7:00am - 5:00pm</Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={4} sm={5} md={4} lg={5}>
                    <Typography align="right">Sat</Typography>
                  </Grid>
                  <Grid item xs={2} sm={1} md={2} lg={1}></Grid>
                  <Grid item xs={6}>
                    <Typography>7:00am - 12:00pm</Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={4} sm={5} md={4} lg={5}>
                    <Typography align="right">Sun</Typography>
                  </Grid>
                  <Grid item xs={2} sm={1} md={2} lg={1}></Grid>
                  <Grid item xs={6}>
                    <Typography>Closed</Typography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" item xs={12}>
                  <Typography gutterBottom className={styles['hours-meta']}>
                    Our services are weather-dependent
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            item
            xs={12}
            md={4}
            className={styles['footer-content']}
          >
            <Grid container direction="column" justifyContent="flex-start">
              <Grid container justifyContent="center">
                <Typography variant="h5" className={styles['footer-content-title']}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid className={styles['footer-content-text']}>
                <Grid container justifyContent="center" item xs={12}>
                  <Typography gutterBottom>
                    Main: <Link href="tel:6102500737">(610) 250-0737</Link>
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" item xs={12}>
                  <Typography gutterBottom>
                    Mobile: <Link href="tel:5702348247">(570) 234-8247</Link>
                  </Typography>
                </Grid>
                <Grid container justifyContent="center" item xs={12}>
                  <Typography>Call or Text</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Footer>
  )
}
