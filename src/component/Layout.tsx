import React, { ReactNode } from 'react'
type LayoutProps = {
    children: ReactNode
}
export default function Layout({children}: LayoutProps) {
  return (
    <div className='w-full 2xl:px-32 xl:px-24 lg:px-20 md:px-12 sm:px-8 max-sm:px-2.5 max-[400]:px-1.5 relative'>
        {children}
    </div>

  )
}
