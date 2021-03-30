import styles from 'index.module.css'

import React from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import { Grid, GridSize, Typography } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

import CTA, { CTAColor } from '../abstractions/CTA'

type FleckCTAProps = {
  // description: string
  // imgurl: string
  // title: string
  color: CTAColor
} & Partial<Record<Breakpoint, boolean | GridSize>>

const FleckCTA: React.FC<FleckCTAProps> = (props: FleckCTAProps) => {
  const { color, xs, sm, md, lg, xl } = props

  return (
    <CTA color={color} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Grid container direction="column">
        <Grid item container justify="center">
          <ChatOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body2" align="center">
            Did the work as scheduled. Constantly stayed in touch. Answered all my questions. Would
            recommend them!
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="subtitle2" align="center">
            - Virginia S., HomeAdvisor Review
          </Typography>
        </Grid>
      </Grid>
    </CTA>
  )
}

export default FleckCTA
