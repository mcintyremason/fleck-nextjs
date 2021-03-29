import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Card, Grid, GridSize } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type CTAProps = {
  description: string
  imgurl: string
  title: string
  children?: ReactNode
} & Partial<Record<Breakpoint, boolean | GridSize>>

const CTA: React.FC<CTAProps> = (props: CTAProps) => {
  const { children, description, imgurl, title, xs, sm, md, lg, xl } = props

  return (
    <Grid
      className={classNames(styles['cta-container'])}
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <Card className={classNames(styles['cta'])}>{children}</Card>
    </Grid>
  )
}

export default CTA
