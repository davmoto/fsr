import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import LogoHeader from './LogoHeader'
import Menu from './Menu'
import MenuIcon from '@material-ui/icons/Menu'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#003D6E',
    margin: '0 auto 0 auto'
  },
  container: {
    display: 'flex',
    margin: '0 auto 0 auto',
    maxWidth: '1400px',
    paddingLeft: 16,
    paddingRight: 16,
    width: '90%',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      paddingLeft: 0
    },
    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  },
  toolBar: {
    paddingLeft: 0,
    paddingRight: 0
  }
}))

export default function Header (props) {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true })

  return (
    <AppBar
      classes={{ root: classes.appBar }}
      position="fixed"
    >
      <div
        className={classes.container}
      >
        {small && (
          <IconButton
            aria-controls="menu"
            aria-haspopup="true"
            aria-label="Menu"
            onClick={props.setOpenMenu}
          >
            <MenuIcon style={{ color: '#fff' }}/>
          </IconButton>
        )}
        <LogoHeader />
        <Toolbar classes={{ root: classes.toolBar }}>
          {!small && (
            <>
              <Menu
                content={props.content}
                setFrameContent={props.setFrameContent}
                setOpenMenu={props.setOpenMenu}
                setShowBack={props.setShowBack}
              />
            </>
          )}
        </Toolbar>
      </div>
    </AppBar>
  )
}
Header.propTypes = {
  content: PropTypes.array,
  setFrameContent: PropTypes.func,
  setOpenMenu: PropTypes.func,
  setShowBack: PropTypes.func
}
