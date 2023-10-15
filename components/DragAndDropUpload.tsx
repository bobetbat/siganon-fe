import React, { useState } from 'react';
import { DropzoneAreaBase, FileObject } from 'react-mui-dropzone';
import { base64ToBytes32 } from '../utils/string';
import { Grid, Stack } from '@mui/material';
import { ActionButton } from './ActionButton';
import { Subtitle, Title } from './Typography';

export const DragAndDropUpload: React.FC<{ onChange: (v: any) => void }> = ({ onChange }) => {
  const [file, setFile] = useState<Uint8Array>()
  const handleDrop = (files: FileObject[]) => {
    // Handle the dropped files
    console.log(files);
    const bytes32 = base64ToBytes32(files[0].data)
    setFile(bytes32)
  };

  const handleSubmit = () => {
    onChange(file)
    console.log('submit upload', file)
  };

  return (
    <Grid container direction="row" spacing={4}>
       <Grid item xs={12} md={2}>
        <Stack direction="column" justifyContent='space-evenly' alignItems="center">
          {/* <ActionButton onClick={}>Clear</ActionButton> */}
            <Title color="black">Option A</Title>
          <ActionButton onClick={handleSubmit}>Use upload</ActionButton>
        </Stack>
      </Grid>
      <Grid item xs={12} md={10}>
        <DropzoneAreaBase
          acceptedFiles={['image/*']}
          dropzoneText="Drag and drop an image here or click"
          onAdd={handleDrop}
          fileObjects={[]}
        />
      </Grid>
    </Grid>
  );
};


