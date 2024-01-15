import React from 'react'

function Contacts() {
  return (
    <div>
        <div className='w-80% h-screen p-5'>
            <div>contacts From</div>
            <form className='text-3xl p-4'>
                <label>Name:</label>
                <input type='text' placeholder='name' />
                <label>Email</label>
                <input type='email' placeholder='email' />
                <label>Sub</label>
                <input type='text' placeholder='sub'></input>
                <label>Random</label>
                <textarea>

                </textarea>
                <button type='submit'>Submit</button>
            </form>

        </div>
    </div>
  )
}

export default Contacts