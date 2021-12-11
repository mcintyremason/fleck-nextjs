import styles from './footer.module.css'

import { Grid, GridSize } from '@material-ui/core'
import { ReactNode } from 'react'
import classNames from 'classnames'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type FooterProps = {
  children?: ReactNode
  isAbsolute?: boolean
} & Partial<Record<Breakpoint, boolean | GridSize>>

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { children, isAbsolute, xs, md, lg, xl } = props

  return (
    <Grid
      container
      item
      xs={xs}
      md={md}
      lg={lg}
      xl={xl}
      className={classNames(styles['footer'], isAbsolute ? styles['absolute'] : '')}
    >
      {children}
    </Grid>
  )
}
