import React, { ReactNode } from 'react'


type InputType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    icon?: ReactNode,
    width?: number| 'full'
}

export default function Input(props: InputType) {
    const { icon, className='', width } = props;
    const actualWidth = width ? (width === 'full' ? '100%' : width) : ''
    return (
        <div className='inline-block relative p-0 m-0 translate-y-0.5' style={{width: actualWidth}}>
            {icon && (
                <div className='flex justify-center items-center absolute z-10 bg-white top-1 bottom-1 right-1'>
                    {icon}
                </div>
            )}
            <input
                type="text"
                {...props}
                className={`outline outline-slate-500 rounded-sm px-1.5 py-1.5 inline-block w-full focus:shadow-inputFocus  ${className}`}

            />
        </div>



    )
}
