import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-500'>
    <nav class='flex justify-between bg-slate-800 text-white py-2'>
        <div className='logo'>
            <span className='font-bold text-xl mx-9 '>Quotes Generator</span>
        </div>
        <ul className='flex gap-8 mx-9 my-2'>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar;
