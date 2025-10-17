import React, { useState } from 'react';

const FileUpload = ({ currentFile, onFileUpload, accept = "image/*" }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    
    // Simulate file upload - replace with actual upload logic
    setTimeout(() => {
      const fileUrl = URL.createObjectURL(file);
      onFileUpload(fileUrl);
      setUploading(false);
    }, 1000);
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      {currentFile ? (
        <div>
          <img src={currentFile} alt="Uploaded" className="max-h-32 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Current file</p>
        </div>
      ) : (
        <div>
          <p className="text-gray-500 mb-2">No file uploaded</p>
        </div>
      )}
      
      <input
        type="file"
        onChange={handleFileChange}
        accept={accept}
        className="hidden"
        id="file-upload"
      />
      
      <label
        htmlFor="file-upload"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        {uploading ? 'Uploading...' : 'Browse Files'}
      </label>
    </div>
  );
};

export default FileUpload;