"use client"

import { PlusCircleIcon } from 'lucide-react';
import { Button } from './button';
import { useRouter } from 'next/navigation';

function PlaceholderDocument() {
    const router = useRouter();

    const handleClick =() => {
        // check if user is FREE and if they've reached their file limit,push to the upgrade page
        router.push("/dashboard/upload")

    }
  return (
    <Button onClick={handleClick} className='flex flex-col items-center w-64  h-80 rounded-xl
    bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16'/>
        <p>Upload Your Document</p>
    </Button>
  );
}

export default PlaceholderDocument