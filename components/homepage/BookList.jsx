import Image from 'next/image'
import React from 'react'

function BookList() {
  return (
    <div>
        <div className='text-4xl'>
            <div>
                <p>Show 1-20 of 19203 books</p>

                <div className='flex gap-4'>
                    <Image src='' width={50} height={50} alt='Books_List' />
                    <h1 className='text-4xl'>The Pragmatic Programmer: From Journeyman to Master Paperback</h1>
                    <h3 className='text-xl'>by Andy Hunt</h3>
                    <h3 className='text-xl'>Published 1900</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookList