import styles from './index.module.css'

import React from 'react'
import { Rating } from '@material-ui/lab'
import { Grid } from '@material-ui/core'

type RatingBarProps = {}

const RatingBarr: React.FC<RatingBarProps> = (_: RatingBarProps) => {
  return (
    <Grid container className={styles['rating-bar-container']}>
      <Rating name="half-rating-read" defaultValue={4.4} precision={0.1} readOnly />
    </Grid>
  )
}

export default RatingBarr
