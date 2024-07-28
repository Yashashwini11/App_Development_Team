
// import React, { useState } from 'react';
// import { Button, TextField, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// function UserManagement() {
//   const [users, setUsers] = useState([]);
//   const [user, setUser] = useState({ name: '', email: '', type: '' });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleAddUser = () => {
//     if (editingIndex !== null) {
//       const updatedUsers = users.map((u, index) =>
//         index === editingIndex ? user : u
//       );
//       setUsers(updatedUsers);
//       setEditingIndex(null);
//     } else {
//       setUsers([...users, user]);
//     }
//     setUser({ name: '', email: '', type: '' });
//   };

//   const handleEditUser = (index) => {
//     setUser(users[index]);
//     setEditingIndex(index);
//   };

//   const handleDeleteUser = (index) => {
//     setUsers(users.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6  dark:text-white mt-14">
//       <Typography variant="h5" className="mb-4">Manage Users</Typography>
//       <Card className="mb-4 dark:bg-black dark:text-white -ml-36">
//         <CardContent>
//           {/* <Typography variant="h6" className="mb-4">Add/Edit User</Typography> */}
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 value={user.name}
//                 onChange={(e) => setUser({ ...user, name: e.target.value })}
//                 className="dark:bg-white dark:text-white -ml-14"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 className="dark:bg-white dark:text-white"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 fullWidth
//                 label="Type"
//                 value={user.type}
//                 onChange={(e) => setUser({ ...user, type: e.target.value })}
//                 className="dark:bg-white dark:text-white"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={handleAddUser}
//             className="mt-96"
//           >
//             {editingIndex !== null ? 'Update User' : 'Add User'}
//           </Button>
//         </CardContent>
//       </Card>
//       <Card className="dark:bg-teal-800 dark:text-white -ml-36">
//         <CardContent>
//           <Typography variant="h6" className="mb-4">User List</Typography>
//           {users.length === 0 ? (
//             <Typography>No users found</Typography>
//           ) : (
//             users.map((user, index) => (
//               <Grid container spacing={2} key={index} className="mb-4">
//                 <Grid item xs={12} sm={3}>
//                   <Typography>{user.name}</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={3}>
//                   <Typography>{user.email}</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={3}>
//                   <Typography>{user.type}</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={3} className="flex space-x-2">
//                   <IconButton onClick={() => handleEditUser(index)} color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteUser(index)} color="secondary">
//                     <DeleteIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//             ))
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default UserManagement;
import React, { useState } from 'react';
import { Button, TextField, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', type: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddUser = () => {
    // Check if any field is empty
    if (!user.name || !user.email || !user.type) {
      alert("The field is empty");
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = users.map((u, index) =>
        index === editingIndex ? user : u
      );
      setUsers(updatedUsers);
      setEditingIndex(null);
    } else {
      setUsers([...users, user]);
    }
    setUser({ name: '', email: '', type: '' });
  };

  const handleEditUser = (index) => {
    setUser(users[index]);
    setEditingIndex(index);
  };

  const handleDeleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 dark:text-white mt-14">
      <Typography variant="h5" style={{marginLeft:'-130px'}}>Manage Users</Typography>
      <Card className="m-8 dark:bg-black dark:text-white -ml-40">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={13} sm={4}>
              <TextField
                fullWidth
                label="Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="dark:bg-white dark:text-black -ml-14"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="dark:bg-white dark:text-black"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Type"
                value={user.type}
                onChange={(e) => setUser({ ...user, type: e.target.value })}
                className="dark:bg-white dark:text-black"
                required
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            // color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddUser}
            style={{ marginTop: '24px', marginBottom: '44px', backgroundColor: '#93c5fd',color:'black', font:'bold' }}
          >
            {editingIndex !== null ? 'Update User' : 'Add User'}
          </Button>
        </CardContent>
      </Card>
      <Card className="dark:bg-teal-800 dark:text-white -ml-40">
        <CardContent>
          <Typography variant="h6" className="mb-4">User List</Typography>
          {users.length === 0 ? (
            <Typography>No users found</Typography>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-white">
                <thead className="bg-gray-50 dark:bg-teal-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-teal-800">
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-white">{user.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <IconButton onClick={() => handleEditUser(index)} color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteUser(index)} color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default UserManagement;
