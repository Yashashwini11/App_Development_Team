import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Tooltip
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

function UploadMaterials() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFiles([...files, { id: uuidv4(), name: file.name, file }]);
      event.target.value = null; // Clear the file input
    }
  };

  const handleRemoveFile = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleUpload = () => {
    // Simulate file upload
    alert('Files uploaded successfully!');
    setFiles([]); // Clear files after upload
  };

  return (
    <div style={{ padding: '20px', marginTop: '40px',marginLeft:'-170px',marginTop:'80px' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#3f51b5' }}>
        Upload Materials
      </Typography>
      <Typography variant="body1" paragraph>
        Upload course materials such as documents, presentations, and videos for your students.
      </Typography>

      <Grid container spacing={3}>
        {/* Upload Section */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#e3f2fd' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#1976d2' }}>Upload New Materials</Typography>
              <Divider />
              <input
                type="file"
                onChange={handleFileChange}
                style={{ marginTop: '20px' }}
                accept=".pdf, .docx, .pptx, .xlsx, .jpg, .png, .mp4"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                startIcon={<UploadIcon />}
                style={{ marginTop: '20px' }}
              >
                Upload
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Uploaded Files List */}
        <Grid item xs={12}>
          <Card style={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography variant="h6" style={{ color: '#388e3c' }}>Uploaded Files</Typography>
              <Divider />
              <List>
                {files.map(file => (
                  <ListItem key={file.id}>
                    <ListItemText primary={file.name} />
                    <ListItemIcon>
                      <Tooltip title="Remove">
                        <IconButton edge="end" onClick={() => handleRemoveFile(file.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadMaterials;
