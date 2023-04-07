import React from 'react'
import StudentsForm from './StudentsForm'
import { Paper, makeStyles } from '@material-ui/core'
//import { makeStyles } from '@mui/material'

const useStyles = makeStyles(theme =>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function Students() {

  const classes = useStyles();
  return (
    <>
    <Paper className={classes.pageContent}>
    <StudentsForm />
    </Paper>
    
    </>
   
  )
}

export default Students