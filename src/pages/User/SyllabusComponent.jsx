import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';

const syllabusData = [
  { title: 'Introduction to React', duration: '4 weeks', syllabus: 'This course covers the fundamentals of React, including JSX, components, props, and state management. Students will learn how to build and manage React applications efficiently.' },
  { title: 'Advanced React', duration: '6 weeks', syllabus: 'Focuses on advanced React concepts like hooks, context API, and performance optimization. The course also covers best practices for building scalable React applications.' },
  { title: 'JavaScript Fundamentals', duration: '5 weeks', syllabus: 'Explores essential JavaScript concepts such as ES6 features, asynchronous JavaScript, and DOM manipulation. Includes hands-on projects and exercises to solidify understanding.' },
  { title: 'UI/UX Design', duration: '4 weeks', syllabus: 'Introduces design principles, user research methods, and prototyping techniques. Students will learn how to create intuitive and user-friendly interfaces.' },
  { title: 'Backend Development', duration: '8 weeks', syllabus: 'Covers server-side development using Node.js and Express. Includes database management, RESTful APIs, and security practices. Designed for those looking to build robust backend systems.' }
];

const SyllabusComponent = () => {
  const [selectedSyllabus, setSelectedSyllabus] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (syllabus) => {
    setSelectedSyllabus(syllabus);
  };

  const handleCloseDialog = () => {
    setSelectedSyllabus(null);
  };

  const filteredData = syllabusData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '16px', marginLeft: '-170px', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>Syllabus Overview</Typography>

      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      {/* Syllabus Cards */}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {filteredData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{ backgroundColor: '#90caf9', cursor: 'pointer' }}
              onClick={() => handleCardClick(item)}
            >
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>Duration: {item.duration}</Typography>
                <Typography>Syllabus: {item.syllabus.substring(0, 50)}...</Typography> {/* Display a snippet of the syllabus */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Detailed View Dialog */}
      <Dialog
        open={Boolean(selectedSyllabus)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>{selectedSyllabus?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Duration: {selectedSyllabus?.duration}</Typography>
          <Typography variant="body1">Syllabus: {selectedSyllabus?.syllabus}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SyllabusComponent;

