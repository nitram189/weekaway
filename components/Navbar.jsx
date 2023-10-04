'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';


export default function Navbar() {

  const [ isOpen, setIsOpen ] = useState( false );

  const handleIsOpen = () => {
    setIsOpen( !isOpen )
  }
  
  return (
    <nav className='w-full px-5 py-4 flex items-center justify-end  absolute z-10 bg-black/50'>

      <ul className='hidden sm:flex gap-5 uppercase text-sm font-medium text-white '>
        <li>
          <Link href='/' 
          className='hover:text-gray-300 ease-in duration-200'>Home</Link>
        </li>

        <li>
          <Link href='#booking' 
          className='hover:text-gray-300 ease-in duration-200'>Booking</Link>
        </li>

        <li>
          <Link href='#gallery' 
          className='hover:text-gray-300 ease-in duration-200'>Gallery</Link>
        </li>

        <li>
          <Link href='#contact' 
          className='hover:text-gray-300 ease-in duration-200'>Contact</Link>
        </li>
      </ul>

      <div className='sm:hidden z-10 text-white cursor-pointer'>
       { isOpen
            ? <FaRegWindowClose  size={25} onClick={ handleIsOpen }/>
            : <FaBars size={25} onClick={ handleIsOpen }/>}
      </div>
 

      <div className={
        isOpen
          ? 'overflow-y-hidden sm:hidden ease-in duration-200 absolute text-white left-0 top-0 h-screen w-full bg-black/90 flex flex-col px-5 py-10'
          : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>

        <ul className='space-y-8 uppercase font-medium text-center'>
          <li>
            <Link href='/'
            className='hover:text-gray-300 ease-in duration-200'>Home</Link>
          </li>  

          <li>
            <Link href='#gallery'
            className='hover:text-gray-300 ease-in duration-200'>Gallery</Link>
          </li>  

          <li>
            <Link href='#deals'
            className='hover:text-gray-300 ease-in duration-200'>Deals</Link>
          </li>  

          <li>
            <Link href='#contact'
            className='hover:text-gray-300 ease-in duration-200'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


