// import React from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem, Divider } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import CertificateIcon from '@mui/icons-material/EmojiEvents';
// import PeopleIcon from '@mui/icons-material/People';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import CertificateComponent from '../pages/User/CertificateComponent';
// import EnrollComponent from '../pages/User/EnrollComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <AccountCircle />
//           </IconButton>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 // { name: 'Dashboard', icon: <BookIcon />, section: 'dashboard' },
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 // { name: 'Certificates', icon: <CertificateIcon />, section: 'certificates' },
//                 // { name: 'Enrollments', icon: <PeopleIcon />, section: 'enrollments' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {/* {activeSection === 'certificates' && <CertificateComponent />}
//         {activeSection === 'enrollments' && <EnrollComponent />} */}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;

// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <AccountCircle sx={{ fontSize: 40 }} />
//             </IconButton>
//         <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//           <ModeToggle/>
//         </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;

// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Menu,
//   MenuItem,
//   Divider,
//   Avatar
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import BookIcon from '@mui/icons-material/Book';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import SchoolIcon from '@mui/icons-material/School';
// import { Link } from 'react-router-dom';

// import SyllabusComponent from '../pages/User/SyllabusComponent';
// import TestComponent from '../pages/User/TestComponent';
// import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
// import UserDashboard from '../pages/User/UserDashboard'; 
// import { ModeToggle } from '@/components/mode-toggle';

// const drawerWidth = 240;

// function UserLayout() {
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
//   const [drawerOpen, setDrawerOpen] = React.useState(true);
//   const isMenuOpen = Boolean(anchorEl);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     setMobileOpen(false); // Close drawer on section change
//   };

//   const menuId = 'primary-search-account-menu';

//   return (
//     <div style={{ display: 'flex' }}>
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//           <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
//             {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
//           </Typography>
//           <div style={{ flexGrow: 1 }} />
//           <IconButton
//             edge="end"
//             aria-label="account of current user"
//             aria-controls={menuId}
//             aria-haspopup="true"
//             onClick={handleProfileMenuOpen}
//             color="black"
//           >
//             <Avatar src="/path-to-profile-image.jpg" alt="Profile" sx={{ width: 40, height: 40 }} />
//           </IconButton>
//           <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
//             <ModeToggle />
//           </div>
//           <Menu
//             id={menuId}
//             anchorEl={anchorEl}
//             anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//             keepMounted
//             transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             open={isMenuOpen}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
//             </Link>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           style={{
//             width: drawerWidth,
//             flexShrink: 0,
//             backgroundColor: 'white',
//           }}
//           variant="persistent"
//           anchor="left"
//           open={drawerOpen}
//         >
//           <div style={{ width: drawerWidth, padding: '16px' }}>
//             <Typography variant="h6" style={{ color: 'black', marginBottom: '16px', fontWeight: 'bold', marginLeft: '20px' }}>
//               User Dashboard
//             </Typography>
//             <Divider style={{ marginBottom: '16px' }} />
//             <List>
//               {[
//                 { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
//                 { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
//                 { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
//               ].map((item) => (
//                 <React.Fragment key={item.section}>
//                   <ListItem button onClick={() => handleSectionChange(item.section)} style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
//                     {item.icon}
//                     {drawerOpen && <ListItemText primary={item.name} />}
//                   </ListItem>
//                   <Divider style={{ marginBottom: '16px' }} />
//                 </React.Fragment>
//               ))}
//             </List>
//           </div>
//         </Drawer>
//       </nav>
//       <main style={{ flexGrow: 1, padding: '16px', marginLeft: drawerOpen ? drawerWidth : 0 }}>
//         {activeSection === 'dashboard' && <UserDashboard />} 
//         {activeSection === 'syllabus' && <SyllabusComponent />}
//         {activeSection === 'tests' && <TestComponent />}
//         {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
//       </main>
//     </div>
//   );
// }

// export default UserLayout;



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
import BookIcon from '@mui/icons-material/Book';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

import SyllabusComponent from '../pages/User/SyllabusComponent';
import TestComponent from '../pages/User/TestComponent';
import SeatAvailabilityComponent from '../pages/User/SeatAvailabilityComponent';
import UserDashboard from '../pages/User/UserDashboard'; 
import { ModeToggle } from '@/components/mode-toggle';

const drawerWidth = 240;

function UserLayout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState('dashboard'); // Default to 'dashboard'
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
    setMobileOpen(false); // Close drawer on section change
  };

  const menuId = 'primary-search-account-menu';

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap style={{ fontWeight: activeSection === 'dashboard' ? 'bold' : 'normal' }}>
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
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
            <Avatar src="https://cdni.iconscout.com/illustration/premium/thumb/woman-profile-8187680-6590622.png?f=webp" alt="Profile" sx={{ width: 30, height: 30 }} />
          </IconButton>
          <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
            <ModeToggle />
          </div>
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
              User Dashboard
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />
            <List>
              {[
                { name: 'Syllabus', icon: <BookIcon />, section: 'syllabus' },
                { name: 'Tests', icon: <AssignmentIcon />, section: 'tests' },
                { name: 'Seat Availability', icon: <SchoolIcon />, section: 'seat-availability' },
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
        {activeSection === 'dashboard' && <UserDashboard />} 
        {activeSection === 'syllabus' && <SyllabusComponent />}
        {activeSection === 'tests' && <TestComponent />}
        {activeSection === 'seat-availability' && <SeatAvailabilityComponent />}
      </main>
    </div>
  );
}

export default UserLayout;
