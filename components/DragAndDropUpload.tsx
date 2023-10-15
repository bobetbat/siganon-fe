import React from 'react';
import { DropzoneAreaBase, FileObject } from 'react-mui-dropzone';
import { base64ToBytes32 } from '../utils/string';

export const DragAndDropUpload: React.FC<{ onChange: (v:any) => void }> = ({ onChange }) => {
  const handleDrop = (files: FileObject[]) => {
    // Handle the dropped files
    console.log(files);
    const bytes32 = base64ToBytes32(files[0].data)
    onChange(bytes32)
  };

  return (
    <>
      <DropzoneAreaBase
        acceptedFiles={['image/*']}
        dropzoneText="Drag and drop an image here or click"
        onAdd={handleDrop}
        fileObjects={[]}
      />
    </>
  );
};


