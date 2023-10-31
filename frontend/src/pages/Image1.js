import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay() {
  const [imageData, setImageData] = useState(null);
  const imageId = 3;
  useEffect(() => {
    axios.get(`http://localhost:8080/api/persons/${imageId}`, { responseType: 'arraybuffer' })
      .then((response) => {
        console.log(response)
        const base64 = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setImageData(`data:image/jpeg;base64,${base64}`);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [imageId]);

  return (
    <div>
      {imageData && <img src={imageData} alt="Image" />}
    </div>
  );
}

export default ImageDisplay;
