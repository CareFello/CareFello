import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedImage);

    axios.post('http://localhost:8080/api/persons/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() => {
        // Handle successful upload
        alert('Image uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </div>
  );
}

export default ImageUpload;
