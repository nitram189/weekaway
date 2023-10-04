import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagramSquare, FaTelegram } from 'react-icons/fa';
import { pacifico } from '@/app/fonts';
  

export default function Footer() {

  return (
    <div className='mx-auto max-w-[1140px] mb-10'>

      <h5 className={`${ pacifico.className } text-center text-3xl text-[var(--primary-dark)]`}>Weekaway</h5>

      <p className='text-sm text-gray-700 text-center pt-3'>All rights reserved © 2023</p>

      <div className='flex gap-2 md:gap-5 justify-center pt-5'>
        <FaFacebookSquare size={25} className="text-[var(--primary-dark)] cursor-pointer"/>
        <FaSquareXTwitter size={25} className="text-[var(--primary-dark)] cursor-pointer"/>
        <FaInstagramSquare size={25} className="text-[var(--primary-dark)] cursor-pointer"/>
        <FaTelegram size={25} className="text-[var(--primary-dark)] cursor-pointer"/>
      </div>
    </div>
  )
}
