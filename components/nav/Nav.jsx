import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
  
    <>
    
    <div className='bg-slate-500 p-4'>
      <div className='text-3xl flex gap-10 justify-center'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/contacts'>Contatus</Link>
        
      </div>
    </div>
        
    </>
  )
}
