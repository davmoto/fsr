import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import ellipsis from './ellipsis.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  ellipsis: {
    height: 8,
    marginRight: 8
  },
  title: {
    color: '#fff',
    fontSize: '24pt',
    fontWeight: 700,
    '&.small': {
      fontSize: '16pt'
    }
  },
  welcome: {
    color: '#fff',
    fontSize: '9pt',
    fontWeight: 400
  }
}))

export default function Welcome () {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('xs'), { noSsr: true })

  return (
    <>
      <Typography
        classes={{ root: classes.welcome }}
        variant="h6"
        component="h1"
        gutterBottom
      >
        <img
          alt=""
          aria-hidden="true"
          className={classes.ellipsis}
          src={ellipsis}
        />WELCOME TO
      </Typography>
      <Typography
        className={clsx(classes.title, {
          small: small === true
        })}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Facilities Service Request
      </Typography>
    </>
  )
}
