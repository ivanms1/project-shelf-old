import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from './style';

export const Dropzone = ({ onDrop, accept = '' }) => {
  //todo give warning on invalid file types
  const {
    getInputProps,
    getRootProps,
    isDragAccept,
    isDragActive,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 1, multiple: false, accept });

  return (
    <Container {...getRootProps({ isDragAccept, isDragActive, isDragReject })}>
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop here</p>
      ) : (
        <p>Drag and drop, or click to select files</p>
      )}
    </Container>
  );
};
