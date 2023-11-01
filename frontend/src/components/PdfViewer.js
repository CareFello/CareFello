import React from 'react';

function PdfViewer({ blobUrl }) {
  return (
    <div>
      <h2>PDF Viewer</h2>
      {blobUrl ? (
        <embed src={blobUrl} type="application/pdf" width="100%" height="500px" />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}

export default PdfViewer;
