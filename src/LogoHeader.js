import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import LogoUcla from './logo_ucla.svg'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'flex-end',
    display: 'flex',
    paddingBottom: 16,
    paddingTop: 16
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      height: 18
    },
    [theme.breakpoints.up('md')]: {
      height: 28
    }
  },
  logoFont: {
    color: '#fff',
    display: 'inline',
    fontWeight: 700,
    lineHeight: 1,
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      marginBottom: '-2px',
      marginLeft: 4
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18pt',
      marginBottom: '-0.1rem',
      marginLeft: 8
    }
  }
}))

export default function LogoHeader () {
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
        component="h1"
        variant="h6"
      >
        Facilities Management
      </Typography>
    </ButtonBase>
  )
}
