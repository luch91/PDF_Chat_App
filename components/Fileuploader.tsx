'use client';

import useUpload, { StatusText } from '@/hooks/useUpload';
import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import {
    RocketIcon,
    CircleArrowDown,
    CheckCheckIcon,
    SaveIcon,
    HammerIcon,
} from "lucide-react";
import { useRouter } from 'next/navigation';

function FileUploader() {
    const router = useRouter();
    const { progress, status, fileId, handleUpload } = useUpload();

    useEffect(() => {
        if (fileId) {
            router.push(`/dashboard/files/${fileId}`);
        }
    }, [fileId, router]);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            await handleUpload(file);
        }
    }, [handleUpload]);

    const statusIcons: {
        [key in StatusText] : JSX.Element
    } = {
        [StatusText.UPLOADING]: (
            <RocketIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [StatusText.UPLOADED]: (
            <CheckCheckIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [StatusText.SAVING]: (
            <SaveIcon className='h-20 w-20 text-indigo-600'/>
        ),
        [StatusText.GENERATING]: (
            <HammerIcon className='h-20 w-20 text-indigo-600'/>
        ),
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isFocused,
        isDragAccept
    } = useDropzone({
        onDrop,
        maxFiles: 3,
        accept: {
            "application/pdf": [".pdf"],
            "application/epub+zip": [".epub"],
            "application/x-mobipocket-ebook": [".mobi"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
        },
    });

    const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

    return (
        <div className='flex flex-col gap-4 items-center max-w-7xl m-auto'>
            {/* Loading */}
            {uploadInProgress && (
                <div className='mt-32 flex flex-col justify-center items-center gap=5'>
                    <div
                    className={`radial-progress bg-blue-300 text-white border-blue-600 border-4 ${
                        progress === 100 && "hidden"
                    }`}

                    role="progressbar"
                    style={{
                        //@ts-ignore
                        "--value": progress,
                        "--size": "12rem",
                        "--thickness": "1.3 rem",
                    }}

                    >{progress} %</div>

                    {/* Render Status Icon */}
                    {
                        //@ts-ignore
                        statusIcons[status!]
                    }

                    {status && <p className='text-indigo-600 animate-pulse'>{status as string}</p>}
                </div>
            )}
            
            {!uploadInProgress && (<div
                {...getRootProps()}
                className={`p-10 border-2 border-dashed mt-10 w-[90%] border-blue-600 text-blue-600
                rounded-lg h-96 flex items-center justify-center ${
                    isFocused || isDragAccept ? 'bg-blue-300' : 'bg-blue-100'}`}
            >
                <input {...getInputProps()} />

                <div className='flex flex-col items-center justify-center'>
                    {isDragActive ? (
                        <>
                            <RocketIcon className='h-20 w-20 animate-ping' />
                            <p>Drop the files here ...</p>
                        </>
                    ) : (
                        <>
                            <CircleArrowDown className='h-20 animate-bounce' />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </>
                    )}
                </div>
            </div>)}
        </div>
    );
}

export default FileUploader;
