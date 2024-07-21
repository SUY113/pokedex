import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  AppBar: {
    backgroundColor: 'black'
  },
  Link:{
    textDecoration: 'none'
  },
  title:{
    cursor: 'pointer',
    color: 'white'
  }
}))
export default function AppNavigator() {
  const classes = useStyles()

  return (
    <AppBar className={classes.AppBar} position="fixed" >
      <Toolbar>
        <Link to="/" className={classes.Link}>
          <Typography variant="h6" className={classes.title}>POKEDEX</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
