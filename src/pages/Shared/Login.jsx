
// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Avatar, Checkbox, FormControlLabel, TextField, Button,Link, Typography} from '@mui/material';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

// function Login() {
//   const paperStyle = {
//     padding: 20,
//     height: '70vh',
//     width: 400,
//     margin: '100px auto',
//   };

//   const avatarStyle = {
//     backgroundColor: '#800080',
//   };

//   const buttonStyle = {
//     marginTop: 20, // Adjusted to fit better spacing
//     backgroundColor: 'rgb(128,0,128)',
//     color: '#fff',
//     margin:'15px 0', // Ensure text color contrasts with background
//   };

//   const typo={
//     margin:'10px 0',
//   }

//   return (

//         <Grid>
//         <Paper elevation={10} style={paperStyle}>
//             <Grid align='center'>
//             <Avatar style={avatarStyle}>
//               <LockOpenOutlinedIcon/>
//             </Avatar>
//             <h2 style={{ marginBottom: 35 }}>SIGN IN</h2>
//             </Grid>
//             <TextField
//               id="username"
//               label="Username"
//               type="text"
//               variant="standard"
//               fullWidth
//               required
//               style={{ marginBottom: 20 }} // Adjusted spacing
//             />
//             <TextField
//               id="password"
//               label="Password"
//               type="password"
//               variant="standard"
//               fullWidth
//               required
//               style={{ marginBottom: 20 }} 
//             />
//               <FormControlLabel
//                 control={<Checkbox color="secondary" />}
//                 label="Remember me"
//                 style={{marginBottom: 20,marginLeft:0}}
//               />
//             <Button type="submit" fullWidth style={buttonStyle}>
//               SIGN IN
//             </Button>
//             <Typography>
//               <Link href="#" style={{textDecoration:'none'}}>Forgot Password</Link>
//             </Typography>
//             <Typography style={typo}>Do you have an account ?
//               <Link href="#" style={{textDecoration:'none'}}>
//               Sign Up
//               </Link>
//             </Typography>
//         </Paper>
//       </Grid>
//   );
// }

// export default Login;


import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, FormControlLabel, TextField, Button,Link, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 400,
    margin: '100px auto',
  };

  const avatarStyle = {
    backgroundColor: '#4FC3F7',
  };

  const buttonStyle = {
    marginTop: 20, // Adjusted to fit better spacing
    backgroundColor: '#4FC3F7',
    color: '#fff',
    margin:'15px 0', // Ensure text color contrasts with background
  };

  const typo={
    margin:'10px 0',
  }

  return (

        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 style={{ marginBottom: 35 }}>SIGN IN</h2>
            </Grid>
            <TextField
              id="username"
              label="Username"
              type="text"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }} // Adjusted spacing
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              required
              style={{ marginBottom: 20 }} 
            />
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="Remember me"
                style={{marginBottom: 20,marginLeft:0}}
              />
            <Button type="submit" fullWidth style={buttonStyle}>
              SIGN IN
            </Button>
            <Typography>
              <Link href="#" style={{textDecoration:'none'}}>Forgot Password</Link>
            </Typography>
            <Typography style={typo}>Do you have an account ?
              <Link href="#" style={{textDecoration:'none'}}>
              Sign Up
              </Link>
            </Typography>
        </Paper>
      </Grid>
  );
}

export default Login;
