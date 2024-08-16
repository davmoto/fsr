import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import PropTypes from 'prop-types'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  form: {
    alignItems: 'center',
    display: 'flex',
    position: 'relative'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 3,
    height: '1.5rem',
    marginLeft: 16,
    padding: 8,
    [theme.breakpoints.down('sm')]: {
      border: '1px solid gray',
      marginBottom: 16,
      marginTop: 16
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)'
    }
  },
  searchButton: {
    [theme.breakpoints.up('md')]: {
      color: 'white'
    }
  }
}))

export default function Search (props) {
  const classes = useStyles()

  const handleSubmit = () => {
    props.setShowBack(true)
    props.setOpenMenu(false)
  }

  return (
    <form
      action={props.searchUrl}
      className={classes.form}
      id="maxsrch"
      method="post"
      onSubmit={handleSubmit}
      target="maxframe"
    >
      <InputBase
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
        name="I_CUSTNBR"
        placeholder="Search Request/Job No."
      />
      <IconButton
        aria-label="Do search"
        classes={{ root: classes.searchButton }}
        type="submit"
      >
        <SearchIcon />
      </IconButton>
    </form>
  )
}
Search.propTypes = {
  searchUrl: PropTypes.string,
  setFrameContent: PropTypes.func,
  setOpenMenu: PropTypes.func,
  setShowBack: PropTypes.func
}
