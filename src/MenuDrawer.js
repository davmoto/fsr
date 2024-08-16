import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import Menu from './Menu'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(() => ({
  paper: {
    minWidth: 320
  }
}))

export default function MenuDrawer (props) {
  const classes = useStyles()

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.paper }}
      onClose={() => props.setOpenMenu(false)}
      open={props.openMenu}
    >
      <IconButton
        aria-label="Collapse menu"
        onClick={() => props.setOpenMenu(false)}
        style={{ alignSelf: 'flex-end' }}
      >
        <CloseIcon />
      </IconButton>
      <Menu
        content={props.content}
        setFrameContent={props.setFrameContent}
        setOpenMenu={props.setOpenMenu}
        setShowBack={props.setShowBack}
      />
    </Drawer>
  )
}

MenuDrawer.propTypes = {
  content: PropTypes.array,
  openMenu: PropTypes.bool,
  setFrameContent: PropTypes.func,
  setOpenMenu: PropTypes.func,
  setShowBack: PropTypes.func
}
