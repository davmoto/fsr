import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'
import Search from './Search'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
  buttonGroup: {
    color: '#fff',
    '&:disabled': {
      color: '#FFD100'
    },
    '&:hover': {
      color: '#FFD100'
    },
    '&:not(:last-child)': {
      borderRight: 'none'
    }
  }
}))

export default function Menu (props) {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true })
  const items = props.content.filter(c => c.menuItem === true)

  const handleMenuItem = (id) => {
    const obj = props.content.filter(c => c.id === id)[0]
    if (obj.target === 'window') {
      window.open(obj.url, '_blank', 'height=480,left=64,location=no,menubar=no,top=64,width=640')
    } else if (obj.target === 'app') {
      window.location.href = obj.url
    } else {
      props.setFrameContent(obj)
      props.setShowBack(true)
    }
    props.setOpenMenu(false)
  }

  return (
    <>
      {!small && (
        <ButtonGroup
          aria-label="Menu"
          classes={{
            groupedTextPrimary: classes.buttonGroup
          }}
          color="primary"
          variant="text"
        >
          {items.map((item, x) => (
            <Button
              key={x}
              onClick={() => handleMenuItem(item.id)}
            >{item.title}</Button>
          ))}
        </ButtonGroup>
      )}
      {small && (
        <List disablePadding={true}>
          {items.map((item, x) => (
            <ListItem
              button
              key={x}
              onClick={() => handleMenuItem(item.id)}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      )}
      <Search
        searchUrl={props.content.filter(c => c.title === 'Quick Search')[0].url}
        setOpenMenu={props.setOpenMenu}
        setShowBack={props.setShowBack}
      />
    </>
  )
}

Menu.propTypes = {
  content: PropTypes.array,
  setFrameContent: PropTypes.func,
  setOpenMenu: PropTypes.func,
  setShowBack: PropTypes.func
}
