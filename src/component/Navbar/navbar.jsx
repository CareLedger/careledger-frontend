import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-center py-5 '>
        <div className='w-[90%]'>
        <ul className='flex justify-between cursor-pointer'>
            <div>
                <li className='text-[color:var(--text-color)]'>Logo</li>
            </div>
            <div className='flex gap-x-5 items-center'> 
                <li className='text-[color:var(--text-color)]' >Home</li>
                <li className='text-[color:var(--text-color)]' >About</li>
                <li className='text-[color:var(--text-color)]' >Features</li>
                <li className='text-[color:var(--text-color)]' >Contact Us</li>
                <li className='bg-[#63C5D2] text-[color:var(--text-color)] px-3 py-2 rounded-[5px]'  ><button>Get started</button></li>
            </div>
        </ul>
        </div>
        
    </div>
  )
}

export default Navbar