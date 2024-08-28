import React, { useState, useEffect, useRef } from 'react';
import Upload from 'views/admin/tables/components/Uploads';
const Glass = ({ onClose, onSuccess }) => {
  // States are currently unused, keep them if you'll use them later
  const [url, setUrl] = useState('');
  const [statusUrl, setStatusUrl] = useState('');
  const cardRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div  className="flex flex-col items-center justify-center w-full h-full p-6 bg-white bg-opacity-20 rounded-xl shadow-lg backdrop-blur-md border border-white border-opacity-30">
        <div ref={cardRef}>
        <h2 className="text-white text-2xl mb-4">Upload Your Data</h2> 
        <div className="flex flex-col items-center justify-center h-full">
          {/* Upload component is rendered here */}
          <Upload />
        </div>

        </div>  
      </div>
    </div>
  );
};

export default Glass;
