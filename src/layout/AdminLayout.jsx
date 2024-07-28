// import React from 'react'

// const AdminLayout = () => {
//   return (
//     <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow auto'>
//        <Leftbar/>
//        <div className="h-screen w-5/6 flex justify-center items-center flex-col">
//         <Topbar/>
//         <Otulet/>
//        </div>
//     </div>
//   )
// }

// export default AdminLayout


import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserIcon from '@mui/icons-material/People';
import CourseIcon from '@mui/icons-material/Book';
import SyllabusIcon from '@mui/icons-material/Description';
import TestIcon from '@mui/icons-material/Assignment';
import UserManagement from '../pages/Admin/UserManagement';
import CourseManagement from '../pages/Admin/CourseManagement';
import SyllabusManagement from '../pages/Admin/SyllabusManagement';
import TestManagement from '../pages/Admin/TestManagement';
import CloseIcon from '@mui/icons-material/Close';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import { ModeToggle } from '@/components/mode-toggle';
import {Link} from 'react-router-dom';
const drawerWidth = 240;

function AdminLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('admin-dashboard');
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMobileOpen(false); // Close drawer when section changes
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            {activeSection === 'user-management' && 'User Management'}
            {activeSection === 'course-management' && 'Course Management'}
            {activeSection === 'syllabus-management' && 'Syllabus Management'}
            {activeSection === 'test-management' && 'Test Management'}
            {activeSection === 'admin-dashboard' && 'Admin Dashboard'}
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="black"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <Link to="/" ><MenuItem onClick={handleMenuClose}>Logout</MenuItem></Link>
          </Menu>
        </Toolbar>
        
      </AppBar>
      <nav>
        <Drawer
          style={{
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: 'white', // Background color set to #93C5FD
          }}
          variant="persistent" // Use 'persistent' variant for the toggle effect
          anchor="left"
          open
        >
          <div style={{ width: drawerWidth, padding: '16px', backgroundColor: 'white' }}>
            <Typography variant="h6" style={{ color: 'black', marginBottom: '16px' ,marginLeft:'25px'}}>
              Admin Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              <ListItem button onClick={() => handleSectionChange('user-management')} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <UserIcon style={{ marginRight: drawerOpen ? '16px' : '0' }} />
                {drawerOpen && <ListItemText primary="User Management" />}
              </ListItem>
              <Divider style={{ marginBottom: '16px' }} />
              <ListItem button onClick={() => handleSectionChange('course-management')} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <CourseIcon style={{ marginRight: drawerOpen ? '16px' : '0' }} />
                {drawerOpen && <ListItemText primary="Course Management" />}
              </ListItem>
              <Divider style={{ marginBottom: '16px' }} />
              <ListItem button onClick={() => handleSectionChange('syllabus-management')} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <SyllabusIcon style={{ marginRight: drawerOpen ? '16px' : '0' }} />
                {drawerOpen && <ListItemText primary="Syllabus Management" />}
              </ListItem>
              <Divider style={{ marginBottom: '16px' }} />
              <ListItem button onClick={() => handleSectionChange('test-management')} style={{ display: 'flex', alignItems: 'center' }}>
                <TestIcon style={{ marginRight: drawerOpen ? '16px' : '0' }} />
                {drawerOpen && <ListItemText primary="Test Management" />}
              </ListItem>
            </List>
          </div>
        </Drawer>
      </nav>
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
        {activeSection === 'admin-dashboard' && <AdminDashboard />}
        {activeSection === 'user-management' && <UserManagement />}
        {activeSection === 'course-management' && <CourseManagement />}
        {activeSection === 'syllabus-management' && <SyllabusManagement />}
        {activeSection === 'test-management' && <TestManagement />}
      </main>
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <ModeToggle/>
      </div>
    </div>
  );
}

export default AdminLayout;
