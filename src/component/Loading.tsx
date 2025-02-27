import React from 'react'
import { PuffLoader } from 'react-spinners'

export default function Loading() {
    return (
        <div className='text-center  lg:h-[1000px] max-lg:h-[500px] flex justify-center items-center'>
            <PuffLoader color='#ec4899' speedMultiplier={4} />
        </div>
    )
}
