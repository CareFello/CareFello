import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import '../styles/ComplaintModel.css'

export default function ComplaintModal({ open, handleClose, complaint }) {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission of the response, e.g., send it to an API
    // You can add your logic here
    // After handling, you can close the modal
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
    <div className="modal-container">
      <Box className="modal-box">
        <h2>Add your Response</h2><br></br>
        {complaint && (
          <>
            <div className='p2'>{complaint.Name}</div>
            <p>{complaint.Complaint}</p>
          </>
        )}
        <TextField
          label="Reply"
          multiline
          fullWidth
          variant="outlined"
          value={response}
          onChange={handleResponseChange}
          className="response-input" // Apply a class to this component
        />
        <div className="action-buttons">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
            </Button>
          </div>
        </Box>
      </div>
    </Modal>
  );
}