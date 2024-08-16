import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Link from '@material-ui/core/Link'
import Logo from './logo_ucla.svg'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  buttonBase: {
    padding: 16,
    width: 128
  },
  copy: {
    color: '#fff',
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto 0 auto',
    maxWidth: '1400px',
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    width: '90%'
  },
  link: {
    color: '#ffe800',
    fontSize: '.8rem',
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  linksContainer: {
    color: '#ffe800',
    marginBottom: 16,
    zIndex: 4
  },
  logo: {
    height: 32
  }
}))

export default function FooterLegal () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <ButtonBase
        classes={{ root: classes.buttonBase }}
        onClick={() => { window.open('https://ucla.edu') }}
      >
        <img
          className={classes.logo}
          alt="UCLA"
          src={Logo}
        />
      </ButtonBase>
      <div className={classes.linksContainer}>
        <Link
          className={classes.link}
          href="https://ucla.edu"
          target="_blank"
        >
          UCLA.EDU
        </Link>
        &nbsp;|&nbsp;
        <Link
          className={classes.link}
          href="https://www.ucla.edu/terms-of-use/"
          target="_blank"
        >
          Terms of Use
        </Link>
      </div>
      <Typography
        classes={{ root: classes.copy }}
        component="p"
        variant="body2"
      >
        &copy;2020 Regents of the University of California • All Rights Reserved
      </Typography>
    </div>
  )
}
