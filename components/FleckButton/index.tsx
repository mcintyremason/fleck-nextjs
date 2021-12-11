import styles from './index.module.css'

import { Button, Grid, GridSize, PropTypes } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

type FleckButtonProps = {
  text: string
  color?: PropTypes.Color
  href?: string
} & Partial<Record<Breakpoint, boolean | GridSize>>

const FleckButton: React.FC<FleckButtonProps> = (props: FleckButtonProps) => {
  const { color = 'primary', href, text, xs, sm, md, lg, xl } = props

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <Button variant="contained" color={color} href={href} className={styles['fleck-button']}>
        {text}
      </Button>
    </Grid>
  )
}

export default FleckButton
