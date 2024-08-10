'use client'

import { useCallback } from 'react';
import {useDropzone} from 'react-dropzone';

function Fileuploader() {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive, isFocused,
        isDragAccept
      } = useDropzone({onDrop});

    
  return (
  <div className='flex flex-col gap-4 items-center max-w-7xl m-auto'>

    {/*loading */}
    <div
      {...getRootProps()}
      className={`p-10 border-2 border-dashed mt-10 w-[90%] border-blue-600 text-blue-600
      rounded-lg h-96 flex items-center justify-center ${
      isFocused || isDragAccept ? 'bg-blue-300' : 'bg-blue-100'}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  </div>
);

}

export default Fileuploader;