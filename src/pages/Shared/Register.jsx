// // import React from 'react'
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Grid';
// // import { Avatar, Checkbox, FormControlLabel, TextField, Button,Link, Typography} from '@mui/material';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // function Register()
// // {
// //     const paperStyle = {
// //         padding: 20,
// //         height: '80vh',
// //         width: 400,
// //         margin: '72px auto',
// //       };
    
// //       const avatarStyle = {
// //         backgroundColor: '#93C5FD',
// //       };
    
// //       const buttonStyle = {
// //         marginTop: 20, 
// //         backgroundColor: '#93C5FD',
// //         color: '#fff',
// //         margin:'15px 0',
// //       };
    
// //       const typo={
// //         margin:'10px 0',
// //       }
    
// //       return (
    
// //             <Grid>
// //             <Paper elevation={10} style={paperStyle}>
// //                 <Grid align='center'>
// //                 <Avatar style={avatarStyle}>
// //                   <LockOutlinedIcon />
// //                 </Avatar>
// //                 <h2 style={{ marginBottom: 35 }}>SIGN UP</h2>
// //                 <p>Fill This form to create an Account</p>
// //                 </Grid>
// //                 <TextField
// //                   id="username"
// //                   label="Name"
// //                   type="text"
// //                   variant="standard"
// //                   fullWidth
// //                   required
// //                   style={{ marginBottom: 20 }}
// //                 />
// //                 <TextField
// //                   id="email"
// //                   label="Email"
// //                   type="email"
// //                   variant="standard"
// //                   fullWidth
// //                   required
// //                   style={{ marginBottom: 20 }}
// //                 />
// //                 <TextField
// //                   id="password"
// //                   label="Password"
// //                   type="password"
// //                   variant="standard"
// //                   fullWidth
// //                   required
// //                   style={{ marginBottom: 20 }} 
// //                 />
// //                 <TextField
// //                   id="pass"
// //                   label="Confirm Password"
// //                   type="password"
// //                   variant="standard"
// //                   fullWidth
// //                   required
// //                   style={{ marginBottom: 20 }} 
// //                 />
// //                   {/* <FormControlLabel
// //                     control={<Checkbox color="secondary" />}
// //                     label="Remember me"
// //                     style={{marginBottom: 20,marginLeft:0}}
// //                   /> */}
// //                 <Button type="submit" fullWidth style={buttonStyle}>
// //                   Create an Account
// //                 </Button>
// //                 <Typography style={typo}>Have an Account..
// //                   <Link href="#">
// //                     Sign In
// //                   </Link>
// //                 </Typography>
// //             </Paper>
// //           </Grid>
// //       )    
// // }
// // export default Register;

// import React from 'react';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import { Avatar, Button, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import {Link} from 'react-router-dom'
// function Register() {
//   const paperStyle = {
//     padding: 20,
//     height: '80vh',
//     width: 400,
//     margin: '72px auto',
//   };

//   const avatarStyle = {
//     backgroundColor: '#93C5FD',
//   };

//   const buttonStyle = {
//     marginTop: 20,
//     backgroundColor: '#93C5FD',
//     color: '#fff',
//     margin: '15px 0',
//   };

//   const typo = {
//     margin: '10px 0',
//   };

//   return (
//     <Grid>
//       <Paper elevation={10} style={paperStyle}>
//         <Grid align='center'>
//           <Avatar style={avatarStyle}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <h2 style={{ marginBottom: 35 }}>SIGN UP</h2>
//           <p>Fill this form to create an Account</p>
//         </Grid>
//         <TextField
//           id="username"
//           label="Name"
//           type="text"
//           variant="standard"
//           fullWidth
//           required
//           style={{ marginBottom: 20 }}
//         />
//         <TextField
//           id="email"
//           label="Email"
//           type="email"
//           variant="standard"
//           fullWidth
//           required
//           style={{ marginBottom: 20 }}
//         />
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           variant="standard"
//           fullWidth
//           required
//           style={{ marginBottom: 20 }}
//         />
//         <FormControl fullWidth style={{ marginBottom: 16 }}>
//           <InputLabel id="user-type-label">User Type</InputLabel>
//           <Select
//             labelId="user-type-label"
//             id="user-type"
//             defaultValue=""
//             variant="standard"
//             fullWidth
//             required
//           >
//             <MenuItem value="admin">Admin</MenuItem>
//             <MenuItem value="user">User</MenuItem>
//             <MenuItem value="tutor">Tutor</MenuItem>
//           </Select>
//         </FormControl>
//         <Link to="/signin">
//         <Button type="submit" fullWidth style={buttonStyle}>
//           Create an Account
//         </Button>
//         </Link>
//         <Typography style={typo}>
//           Have an Account..
//           <Link href="#" style={{textDecoration:'none'}}>
//             Sign In
//           </Link>
//         </Typography>
//       </Paper>
//     </Grid>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Typography, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
function Register() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 400,
    margin: '72px auto',
  };

  const avatarStyle = {
    backgroundColor: '#93C5FD',
  };

  const buttonStyle = {
    marginTop: 20,
    backgroundColor: '#93C5FD',
    color: '#fff',
    margin: '15px 0',
  };

  const typo = {
    margin: '10px 0',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (userType) {
      case 'Admin':
        navigate('/admin/dashboard');
        break;
      case 'User':
        navigate('/dashboard');
        break;
      // case 'tutor':
      //   navigate('/tutor-layout');
        break;
      default:
        // Handle unexpected user type if needed
        break;
    }
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ marginBottom: 35 }}>SIGN UP</h2>
          <p>Fill this form to create an Account</p>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Name"
            type="text"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: 20 }}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: 20 }}
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
          <TextField
            id="password1"
            label="Confirm Password"
            type="password"
            variant="standard"
            fullWidth
            required
            style={{ marginBottom: 20 }}
          />
          {/* <FormControl fullWidth style={{ marginBottom: 16 }}>
            <InputLabel id="user-type-label">User Type</InputLabel>
            <Select
              labelId="user-type-label"
              id="user-type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              variant="standard"
              fullWidth
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="tutor">Tutor</MenuItem>
            </Select>
          </FormControl> */}

          <Link to="/signin">
          <Button type="submit" fullWidth style={buttonStyle}>
            Create an Account
          </Button>
          </Link>
          <Typography style={typo}>
            Have an Account..
            <Link href="#" style={{ textDecoration: 'none' }}>
              Sign In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}

export default Register;
