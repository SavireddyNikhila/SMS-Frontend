import React from 'react'
import {AppBar, Toolbar, Typography,Grid, Button, CssBaseline, IconButton} from '@material-ui/core' 
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InfoIcon from '@mui/icons-material/Info';


function Header() {
  return (
    <>
    <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
            <Grid container alignItems='center'>
                <Grid item>
                    <Typography variant='h6'>
                        Student Management System
                    </Typography>
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                    <IconButton><HomeIcon /></IconButton>
                    <Button >Home</Button>
                    <IconButton><InfoIcon /></IconButton>
                    <Button>About</Button>
                    <IconButton><PersonAddIcon /></IconButton>
                    <Button>Add Student</Button>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header