import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Divider,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import UploadIcon from '@mui/icons-material/Upload';
import CourseIcon from '@mui/icons-material/Book';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import TrackingProgress from '../pages/Tutor/TrackingProgress'; // Component to track student progress
import UploadMaterials from '../pages/Tutor/UploadMaterials'; // Component to upload materials
import TutorDashboard from '../pages/Tutor/TutorDashboard'; // General dashboard component

const drawerWidth = 240;

function TutorLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('tutor-dashboard');
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
          <div style={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="black"
          >
            <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
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
            <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          style={{
            width: drawerWidth,
            flexShrink: 0,
            backgroundColor: 'white',
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
        >
          <div style={{ width: drawerWidth, padding: '16px' }}>
            <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
              Tutor Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              {[
                { name: 'Tracking Progress', icon: <AssessmentIcon />, section: 'tracking-progress' },
                { name: 'Upload Materials', icon: <UploadIcon />, section: 'upload-materials' },
                // { name: 'General Dashboard', icon: <CourseIcon />, section: 'tutor-dashboard' },
              ].map((item) => (
                <React.Fragment key={item.section}>
                  <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                    {drawerOpen && <ListItemText primary={item.name} />}
                  </ListItem>
                  <Divider style={{ marginBottom: '16px' }} />
                </React.Fragment>
              ))}
            </List>
          </div>
        </Drawer>
      </nav>
      <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
        {activeSection === 'tutor-dashboard' && <TutorDashboard />}
        {activeSection === 'tracking-progress' && <TrackingProgress />}
        {activeSection === 'upload-materials' && <UploadMaterials />}
      </main>
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <ModeToggle />
      </div>
    </div>
  );
}

export default TutorLayout;
