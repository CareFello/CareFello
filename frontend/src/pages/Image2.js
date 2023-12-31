import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageDisplay() {
  const [imageData, setImageData] = useState(null);
    const imageId = 2;
  useEffect(() => {
    axios.get(`http://localhost:8085/api/persons/all`, { responseType: 'arraybuffer' })
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




