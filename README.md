# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


//code
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const initialValues ={
    firstName:'',
    lastName:'',
    gender:'',
    branch:'',
    dateOfBirth:'',
    mobile:'',
    email:'',
    address:'',
    profile:''
}
function AddStudent() {
 const [student, setStudent] = useState(initialValues);
 const [errors,setErrors] = useState({});
 const error1=null

 const validate =() =>{
  let temp = {}
  temp.firstName = student.firstName ? "":"This field is required."
  temp.branch = student.branch.length !== 0? "":"This field is required."
  temp.mobile = student.mobile.length === 14 ? "":"Mobile number should be 14 characters."
  temp.email = (/$^|.+@.+..+/).test(student.email) ? " ":"Email is not valid."
  setErrors({
    ...temp
  })

  return Object.values(temp).every(x => x ==="")
 }

  const InputHandler = (e) => {
  setStudent({...student,[e.target.name]:e.target.value})
  }

  const onSubmitHandler=(e)=>{

  console.log(student);
  e.preventDefault();
 if(validate())
 window.alert('testing...')
  }
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          variant="outlined"
          label="First Name"
          name="firstName"
          value={student.firstName}
          placeholder="Enter first name"
          onChange={(e)=>InputHandler(e)}
          error={errors.firstName}
          {...(error1 & {error1:true, helperText:error1})}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          name="lastName"
          value={student.lastName}
          placeholder="Enter last name"
          onChange={(e)=>InputHandler(e)}
        />
        <FormControl>
      <FormLabel>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        label="Gender"
        name="gender"
        value={student.gender}
        onChange={(e)=>InputHandler(e)}
      >
        <FormControlLabel value="F" control={<Radio />} label="Female" />
        <FormControlLabel value="M" control={<Radio />} label="Male" />
        <FormControlLabel value="O" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <FormControl fullWidth>
  <InputLabel>Branch</InputLabel>
  <Select
    name='branch'
    value={student.branch}
    label="Branch"
    onChange={(e)=>InputHandler(e)}
  >
    
    <MenuItem value="ECE">ECE</MenuItem>
    <MenuItem value="CSE">CSE</MenuItem>
    <MenuItem value="EEE">EEE</MenuItem>
    <MenuItem value="IT">IT</MenuItem>
    <MenuItem value="ME">ME</MenuItem>
  </Select>
</FormControl>
        <TextField
          variant="outlined"
          label="Mobile"
          name="mobile"
          value={student.mobile}
          placeholder="Enter Mobile"
          onChange={(e)=>InputHandler(e)}
          error={errors.mobile}
          {...(error1 & {error1:true, helperText:error1})}
        />
        <TextField
          variant="outlined"
          label="Email"
          name="email"
          value={student.email}
          placeholder="Enter Email"
          onChange={(e)=>InputHandler(e)}
          error={errors.email}
          {...(error1 & {error1:true, helperText:error1})}
        />
        <TextField
          variant="outlined"
          label="Address"
          name="address"
          value={student.address}
          placeholder="Enter Address"
          onChange={(e)=>InputHandler(e)}
        />
        <Button variant='contained' onClick={(e)=>{onSubmitHandler(e)}}>Save</Button>
      </div>
    </Box>
    </div>
  )
}

export default AddStudent
