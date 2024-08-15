import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 flex justify-between items-center px-10 h-14 '>
      
            <div><span className='logo font-bold text-green-600'> &lt; PRO</span><span className='text-white'>tected \&gt; </span></div>
            <ul>
                <li className='flex gap-5 px-5 mx-10 text-white font-bold text-xl'>
                <a href="#">home</a>
                <a href="@">about</a>
                <a href="@">login</a>
                </li>
            </ul>
    </nav>
  )
}

export default Navbar