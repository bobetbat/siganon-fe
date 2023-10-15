declare module 'react-signature-canvas' {
  import React from 'react';

  export interface SignatureCanvasProps {\
    penColor:string;
    canvasProps:any;
    ref:any;
    // Put any props you care about here, or just leave it empty.
    // You can also just make this `export type SignatureCanvasProps = any;`
  }

  const SignatureCanvas: React.ComponentType<SignatureCanvasProps>;
  export default SignatureCanvas;
}
