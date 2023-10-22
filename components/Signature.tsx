import { Box, Grid, IconButton, Stack } from '@mui/material';
import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ActionButton } from './ActionButton';
import { Title } from './Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FileObject } from 'react-mui-dropzone';

const Signature: React.FC<{ onSubmit: (data: File) => void }> = ({ onSubmit }) => {
  let sigCanvas: any = null;

  const clear = () => {
    if (sigCanvas) {
      sigCanvas.clear();
    }
  };

  const submit = () => {
    if (sigCanvas) {
      console.log('val', sigCanvas)
      // const data = sigCanvas.toData()
      console.log('getCanvas', sigCanvas.getCanvas())
      console.log('toDataURL', sigCanvas.toDataURL())
      const signatureURL = sigCanvas.toDataURL();
      const base64Data = signatureURL.split(",")[1];
      const data = window.atob(base64Data);
      const dataBuffer = new ArrayBuffer(data.length);
      const byteArray = new Uint8Array(dataBuffer);
   
      for (let i = 0; i < data.length; i++) {
        byteArray[i] = data.charCodeAt(i);
      }
   
      const blob = new Blob([byteArray], { type: "image/png" });
      const file = new File([blob], "siganon.jpeg", { type: "image/jpeg" });

      onSubmit(file)
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={2} >
        <Stack direction="column" justifyContent='space-evenly' alignItems="center">
          <Title color="black">Option B</Title>
          <ActionButton onClick={submit}>Use sign</ActionButton>
        </Stack>
      </Grid>
      <Grid item xs={12} md={10} position={"relative"}>
        <SignatureCanvas
          penColor='black'
          canvasProps={{ height: 250, width: 800, className: 'sigCanvas' }}
          ref={(ref: any) => { sigCanvas = ref }}
        />
        <IconButton sx={{ width: '44px', border: '2px solid black', position: 'absolute', top: "42px", right: "10px" }} onClick={clear}><CloseRoundedIcon sx={{ color: '#000' }} /></IconButton>
      </Grid>
    </Grid>
  );
};

export default Signature;
