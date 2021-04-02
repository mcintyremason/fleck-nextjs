import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import { Grid, GridSize, Typography } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

import CTA, { Color } from '../abstractions/CTA'

type FleckCTAProps = {
  // description: string
  // imgurl: string
  // title: string
  color: Color
  borderColor?: Color
} & Partial<Record<Breakpoint, boolean | GridSize>>

const FleckCTA: React.FC<FleckCTAProps> = (props: FleckCTAProps) => {
  const { color, borderColor, xs, sm, md, lg, xl } = props

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={styles['fleck-cta-container']}>
      <CTA color={color} borderColor={borderColor} xs={12}>
        <Grid container direction="column">
          <Grid container justify="center">
            <ChatOutlinedIcon fontSize="large" className={classNames(styles['fleck-cta-icon'])} />
          </Grid>
          <Grid
            container
            justify="center"
            className={classNames(styles['fleck-cta-text'], styles['italic'])}
          >
            <Typography variant="body2" align="center">
              Did the work as scheduled. Constantly stayed in touch. Answered all my questions.
              Would recommend them!
            </Typography>
            <Typography variant="subtitle2" align="center" color="textPrimary">
              - Virginia S., HomeAdvisor Review
            </Typography>
          </Grid>
        </Grid>
      </CTA>
    </Grid>
  )
}

export default FleckCTA
