import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Grid, Typography, Link, Divider } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import FleckButton from '../FleckButton'

type FleckCustomerSaysProps = {}

const FleckCustomerSays: React.FC<FleckCustomerSaysProps> = (_: FleckCustomerSaysProps) => (
  <Grid container justify="center" className={styles['customer-says-container']}>
    <Grid
      container
      direction="column"
      justify="center"
      item
      xs={12}
      md={4}
      className={styles['customer-says-title-container']}
    >
      <Grid container>
        <Grid
          item
          xs={3}
          md={12}
          container
          alignItems="center"
          justify="center"
          className={styles['chat-icon-container']}
        >
          <ChatOutlinedIcon
            fontSize="large"
            className={classNames(styles['chat-icon'], styles['flip-horizontal'])}
          />
        </Grid>
        <Grid item xs={9} md={12}>
          <Typography variant="h2" color="secondary" className={styles['customer-says-title']}>
            Here's what our satisfied customers are saying...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={4} container direction="column">
      <Grid container direction="column" className={styles['customer-says-review']}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={styles['customer-says-review-title']}>
              Allen W
            </Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Rating defaultValue={5} precision={0.1} readOnly />
          </Grid>
        </Grid>
        <Typography variant="body2" className={styles['customer-says-review-text']}>
          A huge thank you! The guys at Fleck showed up early and knocked out my roof replacement in
          no time! I couldn't be happi... <Link href="/">read more</Link>
        </Typography>
        <Typography className={styles['customer-says-review-date']}>3/30/2021</Typography>
      </Grid>
      <Divider className={styles['customer-says-review-divider']} />
      <Grid container direction="column" className={styles['customer-says-review']}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" className={styles['customer-says-review-title']}>
              Matt E
            </Typography>
          </Grid>
          <Grid item xs={6} container justify="flex-end">
            <Rating defaultValue={5} precision={0.1} readOnly />
          </Grid>
        </Grid>
        <Typography variant="body2" className={styles['customer-says-review-text']}>
          Great guys, very knowledgeable, helpful and timely.. Michael’s technical background gave
          me great confidence in his final product.
        </Typography>
        <Typography className={styles['customer-says-review-date']}>2/13/2021</Typography>
      </Grid>
      <Divider className={styles['customer-says-review-divider']} />
      <Grid container justify="center">
        <FleckButton text="Read More Reviews" color="secondary" xs={12} />
      </Grid>
    </Grid>
  </Grid>
)

export default FleckCustomerSays
