import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert
} from '@mui/material';


    const sampleSeatData = [
        { id: 1, course: 'React Basics', totalSeats: 30, availableSeats: 10 },
        { id: 2, course: 'Advanced JavaScript', totalSeats: 25, availableSeats: 5 },
        { id: 3, course: 'CSS Flexbox', totalSeats: 20, availableSeats: 15 },
        { id: 4, course: 'Introduction to TypeScript', totalSeats: 28, availableSeats: 8 },
        { id: 5, course: 'Node.js and Express', totalSeats: 32, availableSeats: 12 },
        { id: 6, course: 'Frontend Frameworks', totalSeats: 22, availableSeats: 7 },
        { id: 7, course: 'Database Management Systems', totalSeats: 18, availableSeats: 4 },
        { id: 8, course: 'Version Control with Git', totalSeats: 26, availableSeats: 11 },
        { id: 9, course: 'Python for Data Science', totalSeats: 30, availableSeats: 6 },
        { id: 10, course: 'Introduction to Machine Learning', totalSeats: 24, availableSeats: 9 },
        { id: 11, course: 'UI/UX Design Principles', totalSeats: 27, availableSeats: 13 },
        { id: 12, course: 'Software Testing and QA', totalSeats: 19, availableSeats: 3 },
        { id: 13, course: 'Agile Project Management', totalSeats: 21, availableSeats: 10 },
        { id: 14, course: 'Cloud Computing with AWS', totalSeats: 29, availableSeats: 14 },
        { id: 15, course: 'Cybersecurity Fundamentals', totalSeats: 17, availableSeats: 2 },
      ];
    

const SeatAvailabilityComponent = () => {
  const [seatData, setSeatData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentName, setEnrollmentName] = useState('');
  const [enrollmentEmail, setEnrollmentEmail] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setSeatData(sampleSeatData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setOpenForm(true);
  };

  const handleFormSubmit = () => {
    if (selectedCourse && enrollmentName && enrollmentEmail) {
      setSeatData((prevData) =>
        prevData.map((course) =>
          course.id === selectedCourse.id && course.availableSeats > 0
            ? { ...course, availableSeats: course.availableSeats - 1 }
            : course
        )
      );
      setSnackbarMessage('Enrollment successful!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setOpenForm(false);
      // Clear form fields
      setEnrollmentName('');
      setEnrollmentEmail('');
      setSelectedCourse(null); // Reset selected course
    } else {
      setSnackbarMessage('Please fill in all fields.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div style={{ padding: '16px', marginLeft: '-170px', marginTop: '45px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#000' }}>Seat Availability</Typography>
      
      <TableContainer component={Paper} style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Course</TableCell>
              <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Total Seats</TableCell>
              <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Available Seats</TableCell>
              <TableCell style={{ border: '1px solid #ddd', color: '#000', fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {seatData.map((row) => (
              <TableRow key={row.id}>
                <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.course}</TableCell>
                <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.totalSeats}</TableCell>
                <TableCell style={{ border: '1px solid #ddd', color: '#000' }}>{row.availableSeats}</TableCell>
                <TableCell style={{ border: '1px solid #ddd' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEnroll(row)}
                    disabled={row.availableSeats === 0}
                  >
                    Enroll
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Enrollment Form Dialog */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle style={{ color: '#000' }}>Enroll in Course</DialogTitle>
        <DialogContent>
          {selectedCourse && (
            <Typography variant="h6" gutterBottom style={{ color: '#000' }}>
              Enrolling in: {selectedCourse.course}
            </Typography>
          )}
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={enrollmentName}
            onChange={(e) => setEnrollmentName(e.target.value)}
            InputProps={{ style: { color: '#000' } }}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={enrollmentEmail}
            onChange={(e) => setEnrollmentEmail(e.target.value)}
            InputProps={{ style: { color: '#000' } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenForm(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Feedback */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SeatAvailabilityComponent;
