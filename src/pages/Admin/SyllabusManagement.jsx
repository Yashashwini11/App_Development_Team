// import React, { useState } from 'react';
// import { Button, TextField, Grid, Card, CardContent, Typography, IconButton, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';

// function SyllabusManagement({ courses }) {
//   const [syllabi, setSyllabi] = useState([]);
//   const [syllabus, setSyllabus] = useState({ title: '', content: '', course: '' });

//   const handleAddSyllabus = () => {
//     if (syllabus.title && syllabus.content && syllabus.course) {
//       setSyllabi([...syllabi, syllabus]);
//       setSyllabus({ title: '', content: '', course: '' });
//     } else {
//       alert("All fields are required");
//     }
//   };

//   const handleDeleteSyllabus = (index) => {
//     setSyllabi(syllabi.filter((_, i) => i !== index));
//   };

//   return (
//     <div>
//       <Typography variant="h6">Manage Syllabi</Typography>
//       <Card>
//         <CardContent>
//           <Typography variant="h6">Add Syllabus</Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Title"
//                 value={syllabus.title}
//                 onChange={(e) => setSyllabus({ ...syllabus, title: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Content"
//                 value={syllabus.content}
//                 onChange={(e) => setSyllabus({ ...syllabus, content: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Select Course</InputLabel>
//                 <Select
//                   value={syllabus.course}
//                   onChange={(e) => setSyllabus({ ...syllabus, course: e.target.value })}
//                 >
//                   {courses.map((course, index) => (
//                     <MenuItem key={index} value={course.title}>{course.title}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<AddIcon />}
//             onClick={handleAddSyllabus}
//             style={{ marginTop: '16px' }}
//           >
//             Add Syllabus
//           </Button>
//         </CardContent>
//       </Card>
//       <Card style={{ marginTop: '16px' }}>
//         <CardContent>
//           <Typography variant="h6">Syllabus List</Typography>
//           {syllabi.map((syllabus, index) => (
//             <Grid container spacing={2} key={index}>
//               <Grid item xs={12} sm={6}>
//                 <Typography>{syllabus.title}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography>{syllabus.content}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography>{syllabus.course}</Typography>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <IconButton onClick={() => handleDeleteSyllabus(index)} color="secondary">
//                   <DeleteIcon />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           ))}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// export default SyllabusManagement;

// import React, { useState } from 'react';
// import { Typography, Paper, Divider, TextField, Button } from '@mui/material';

// const SyllabusManagement = ({ courses }) => {
//   const [selectedCourseId, setSelectedCourseId] = useState(null);
//   const [syllabus, setSyllabus] = useState({});

//   const handleCourseChange = (e) => {
//     const courseId = Number(e.target.value);
//     setSelectedCourseId(courseId);
//     // Load syllabus for the selected course if it exists
//     if (courseId in syllabus) {
//       setSyllabus((prev) => ({ ...prev, [courseId]: syllabus[courseId] }));
//     } else {
//       setSyllabus((prev) => ({ ...prev, [courseId]: '' }));
//     }
//   };

//   const handleSyllabusChange = (e) => {
//     setSyllabus((prev) => ({
//       ...prev,
//       [selectedCourseId]: e.target.value
//     }));
//   };

//   const handleSaveSyllabus = () => {
//     // Save the syllabus data
//     // For now, just log the data
//     console.log('Syllabus data:', syllabus);
//   };

//   return (
//     <div className="p-4 dark:bg-teal-800">
//       <Typography variant="h5" gutterBottom className="text-white">
//         Syllabus Management
//       </Typography>
//       <Divider className="mb-4" />

//       <TextField
//         select
//         label="Select Course"
//         value={selectedCourseId || ''}
//         onChange={handleCourseChange}
//         fullWidth
//         margin="normal"
//         SelectProps={{
//           native: true,
//         }}
//       >
//         <option value="" disabled>Select a course</option>
//         {courses.map(course => (
//           <option key={course.id} value={course.id}>
//             {course.title}
//           </option>
//         ))}
//       </TextField>

//       {selectedCourseId && (
//         <Paper className="p-4 bg-gray-100 dark:bg-teal-800 mt-4">
//           <Typography variant="h6" gutterBottom className="text-black dark:text-white">
//             Syllabus for {courses.find(course => course.id === selectedCourseId)?.title}
//           </Typography>
//           <Divider className="mb-4" />
//           <TextField
//             label="Syllabus"
//             value={syllabus[selectedCourseId] || ''}
//             onChange={handleSyllabusChange}
//             fullWidth
//             multiline
//             rows={4}
//             margin="normal"
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSaveSyllabus}
//             className="mt-4"
//           >
//             Save Syllabus
//           </Button>
//         </Paper>
//       )}
//     </div>
//   );
// };

// export default SyllabusManagement;
import React, { useState } from 'react';
import { Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialCourses = [
  { id: 1, title: 'Introduction to Programming' },
  { id: 2, title: 'Advanced Design Principles' },
  { id: 3, title: 'Digital Marketing 101' },
  { id: 4, title: 'Data Science with Python' },
  { id: 5, title: 'Fundamentals of Graphic Design' },
  // Add more courses if needed
];

const initialSyllabi = [
  { id: 1, courseId: 1, title: 'Basics of Programming', description: 'Introduction to variables, data types, and control structures.', duration: '2 hours' },
  { id: 2, courseId: 1, title: 'Advanced Programming Concepts', description: 'Functions, loops, and basic problem-solving.', duration: '3 hours' },
  { id: 3, courseId: 2, title: 'Design Principles Overview', description: 'Principles of design and usability.', duration: '1.5 hours' },
  { id: 4, courseId: 2, title: 'Design Patterns', description: 'Design patterns and case studies.', duration: '2 hours' },
  // Add more syllabi if needed
];

const SyllabusManagement = () => {
  const [syllabi, setSyllabi] = useState(initialSyllabi);
  const [courses, setCourses] = useState(initialCourses);
  const [selectedSyllabus, setSelectedSyllabus] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ courseId: '', title: '', description: '', duration: '' });
  const [editing, setEditing] = useState(false);

  const handleClickOpen = (syllabus = null) => {
    setSelectedSyllabus(syllabus);
    setFormData({
      courseId: syllabus ? syllabus.courseId : '',
      title: syllabus ? syllabus.title : '',
      description: syllabus ? syllabus.description : '',
      duration: syllabus ? syllabus.duration : '',
    });
    setEditing(!!syllabus);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedSyllabus(null);
  };

  const handleSave = () => {
    if (!formData.courseId || !formData.title || !formData.description || !formData.duration) {
      alert('Please fill in all fields.');
      return;
    }

    if (editing) {
      setSyllabi(syllabi.map((item) =>
        item.id === selectedSyllabus?.id
          ? { ...item, ...formData }
          : item
      ));
    } else {
      const newSyllabus = {
        id: syllabi.length ? Math.max(syllabi.map(s => s.id)) + 1 : 1,
        ...formData
      };
      setSyllabi([...syllabi, newSyllabus]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setSyllabi(syllabi.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'courseTitle',
      headerName: 'Course',
      width: 200,
      valueGetter: (params) => {
        const course = courses.find(course => course.id === params.row.courseId);
        return course ? course.title : 'Unknown Course';
      },
    },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'duration', headerName: 'Duration', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => handleClickOpen(params.row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Syllabus Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleClickOpen()}>
        Add New Syllabus
      </Button>
      <div style={{ height: 400, width: '100%', marginTop: 20 }}>
        <DataGrid
          rows={syllabi}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowId={(row) => row.id}
        />
      </div>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{editing ? 'Edit Syllabus' : 'Add Syllabus'}</DialogTitle>
        <DialogContent>
          <TextField
            select
            label="Course"
            fullWidth
            variant="standard"
            value={formData.courseId}
            onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </TextField>
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="standard"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Duration"
            fullWidth
            variant="standard"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SyllabusManagement;
