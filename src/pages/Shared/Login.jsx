import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, FormControlLabel, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 400,
    margin: '100px auto',
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

  const handleSignIn = () => {
    if (userType === 'admin') {
      navigate('/admin/dashboard');
    } else if (userType === 'user') {
      navigate('/dashboard');
    } else if (userType === 'tutor') {
      navigate('/tutor/dashboard');
    }
  };

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
        <FormControl fullWidth variant="standard" style={{ marginBottom: 20 }}>
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            label="User Type"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="tutor">Tutor</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
          style={{ marginBottom: -10, marginLeft: 0 }}
        />
        <Button type="button" fullWidth style={buttonStyle} onClick={handleSignIn}>
          SIGN IN
        </Button>
        <Typography>
          <Link href="#" style={{ textDecoration: 'none' }}>Forgot Password</Link>
        </Typography>
        <Typography style={typo}>Do you have an account?
          <Link href="#" style={{ textDecoration: 'none' }}> Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default Login;
