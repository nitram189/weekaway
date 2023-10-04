import { pacifico } from "@/app/fonts";
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';


export default function TopNavbar() {
  return (
    <header className="flex justify-between px-5 py-3 bg-gray-200">

      <div className="flex items-center gap-2">
        <SiYourtraveldottv size={23}/>
        <h1 className={`${ pacifico.className } text-2xl`}>weekaway</h1>
      </div>

      <div className="flex gap-5 xl:gap-16 items-center">
        
        <div className="md:flex items-center text-gray-700 gap-7 font-medium hidden">
          
          <div className="flex items-center gap-1 text-sm">
            <AiOutlineClockCircle size={20} className="text-[var(--primary-dark)]"/>
            <p>9am - 5pm</p>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <AiOutlinePhone size={20} className="text-[var(--primary-dark)]"/>
            <p>+54 9 11 845 54321</p>
          </div>
        </div>
          
        <button className="sm:block hidden">
          get a free quote
        </button>
      </div>
    </header>
  )
}
