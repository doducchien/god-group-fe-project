import React from 'react'
type CardProps = {
    imgUrl: string,
    title?: string,
    time?: string,
    cuisine?: string
}
export default function Card(props: CardProps) {
    const { imgUrl, title = '', time = '', cuisine = '' } = props
    return (
        <div
            className='w-full lg:h-56 max-lg:h-44 bg-cover bg-no-repeat cursor-pointer relative group'
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <h3 className='text-white text-xl font-semibold bg-black/50 px-2 py-1'>{title}</h3>

            <div
                className='absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-between gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            >
                <h3 className='text-white text-xl font-semibold bg-black/50 px-2 py-1'>{title}</h3>
                <div className='flex justify-between items-center text-white text-sm'>
                    <span className='bg-black/50 px-2 py-1 rounded-md'>Ẩm thực: <strong>{cuisine}</strong></span>
                    <span className='bg-black/50 px-2 py-1 rounded-md'>Thời gian: <strong>{time}</strong></span>
                </div>
            </div>
        </div>
    )
}

