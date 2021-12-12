import styles from './ratingBar.module.css'

import { Rating } from '@material-ui/lab'
import { Grid } from '@material-ui/core'

type RatingBarProps = {}

export const RatingBar: React.FC<RatingBarProps> = (_: RatingBarProps) => {
  return (
    <Grid container className={styles['rating-bar-container']}>
      <Rating name="half-rating-read" defaultValue={4.4} precision={0.1} readOnly />
    </Grid>
  )
}
