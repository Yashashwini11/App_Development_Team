import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, FormControlLabel, TextField, Button,Link, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
function Register()
{
    const paperStyle = {
        padding: 20,
        height: '80vh',
        width: 400,
        margin: '72px auto',
        // backgroundColor:'',
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
                <h2 style={{ marginBottom: 35 }}>SIGN UP</h2>
                <p>Fill This form to create an Account</p>
                </Grid>
                <TextField
                  id="username"
                  label="Name"
                  type="text"
                  variant="standard"
                  fullWidth
                  required
                  style={{ marginBottom: 20 }} // Adjusted spacing
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
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
                <TextField
                  id="pass"
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  fullWidth
                  required
                  style={{ marginBottom: 20 }} 
                />
                  {/* <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label="Remember me"
                    style={{marginBottom: 20,marginLeft:0}}
                  /> */}
                <Button type="submit" fullWidth style={buttonStyle}>
                  Create an Account
                </Button>
                <Typography style={typo}>Have an Account..
                  <Link href="#">
                    Sign In
                  </Link>
                </Typography>
            </Paper>
          </Grid>
      )    
}
export default Register;