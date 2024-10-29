import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const BrochureViewer = () => {
  const [loading, setLoading] = useState(true);

  const handleDocumentLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
      {loading && <div className="loading-spinner">Loading brochure...</div>}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer
          fileUrl="/brochure.pdf"
          onDocumentLoad={handleDocumentLoad}
        />
      </Worker>
    </div>
  );
};

export default BrochureViewer;
