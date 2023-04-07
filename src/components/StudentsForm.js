import { Grid , makeStyles} from '@material-ui/core';
import { TextField} from '@mui/material';
import React,{useState} from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))
const initialValues = {
    id:0,
    fullName:'',
    email : '',
    mobile: '',
    city:'',
    gender:'',
    branch: ''
    }
function StudentsForm() {

    const [values,setValues] = useState(initialValues);
    const classes = useStyles();

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
  return (
    <form className={classes.root}>
        <Grid container>
            <Grid item xs={6}>
                <TextField 
                variant="outlined"
                label="Full Name"
                name='fullName'
                value={values.fullName}
                onChange={handleInputChange}
                />
                <TextField 
                variant="outlined"
                label="Email"
                value={values.email}
                
                />
            </Grid>
        </Grid>
    </form>
  )
}

export default StudentsForm;