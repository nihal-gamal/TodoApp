import {AppBar, Box, Toolbar, Typography} from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {
  return (
 <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link color="white" to="/">
            My App
          </Link>
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography>
          <Link color="white" to="/">
            Home
          </Link>
        </Typography>
        <Box mx={2} />
        <Typography>
          <Link color="white" to="archived">
          archived
          </Link>
        </Typography>
        <Box mx={2} />

        <Typography>
          <Link color="white" to="wheather">
          wheather
          </Link>
        </Typography>
        <Box mx={2} />

      </Toolbar>
    </AppBar>

  )
}

export default Navbar