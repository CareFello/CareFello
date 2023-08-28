import React, { useState } from 'react';
import axios from 'axios';

const EmailButton = () => {
  const handleEmailSend = async () => {
    try {
      const response = await axios.post('http://localhost:8085/api/email', {
        recipient: 'praneeth495@gmail.com',
        subject: 'Hello from React',
        content: 'This is a test email sent from React and Spring Boot.',
      });
      
      console.log(response.data); // Handle success message
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <button onClick={handleEmailSend}>Send Email</button>
  );
};

export default EmailButton;
