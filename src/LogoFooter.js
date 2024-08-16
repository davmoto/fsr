import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import LogoUcla from './logo_ucla.svg'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  container: {
    alignItems: 'flex-end',
    cursor: 'pointer',
    display: 'flex',
    paddingBottom: 16,
    paddingTop: 0
  },
  logo: {
    height: 20
  },
  logoFont: {
    color: '#fff',
    display: 'inline',
    fontSize: '1rem',
    lineHeight: 1,
    marginBottom: '-0.1rem',
    marginLeft: 4
  }
}))

export default function LogoFooter () {
  const classes = useStyles()

  return (
    <ButtonBase
      className={classes.container}
      onClick={() => { window.open('https://www.facilities.ucla.edu/') }}
    >
      <img
        alt="UCLA"
        className={classes.logo}
        src={LogoUcla}
      />
      <Typography
        className={classes.logoFont}
        component="span"
        variant="h6"
      >
        Facilities Management
      </Typography>
    </ButtonBase>
  )
}
