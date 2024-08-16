import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import LogoFooter from './LogoFooter'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  address: {
    fontStyle: 'normal'
  },
  container: {
    color: '#fff',
    margin: '0 auto 0 auto',
    maxWidth: '1400px',
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    width: '90%'
  },
  link: {
    color: '#fff'
  }
}))

export default function FooterContact () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <LogoFooter />
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <Typography
            component="h3"
            variant="subtitle1"
          >
            Customer Relations
          </Typography>
          <Typography
            classes={{ root: classes.address }}
            component="address"
            variant="body2"
          >
            Facilities Management Building, Suite 2102D<br />
            731 Charles E. Young Drive South<br />
            Los Angeles, CA 90095-1526<br />
            Campus Mail Code: 152608
          </Typography>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Typography
            component="h3"
            variant="subtitle1"
          >
            Customer Service Center
          </Typography>
          <Typography
            classes={{ root: classes.address }}
            component="address"
            variant="body2"
          >
            <Link
              classes={{ root: classes.link }}
              href="tel:206-9461"
            >
              Tel: (310)  206-8847
            </Link><br />
            <Link
              classes={{ root: classes.link }}
              href="tel:206-9461"
            >
              Fax: (310) 206-9461
            </Link><br />
            <Link
              classes={{ root: classes.link }}
              href="mailto:service@facnet.ucla.edu"
            >
              Email: service@facnet.ucla.edu
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Typography
            component="h3"
            variant="subtitle1"
          >
            Trouble Call Center
          </Typography>
          <Typography
            classes={{ root: classes.address }}
            component="address"
            variant="body2"
          >
            <Link
              classes={{ root: classes.link }}
              href="tel:825-9236"
            >
              (310) 825-9236
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
