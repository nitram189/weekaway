import { pacifico } from "@/app/fonts";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="w-full h-[90vh]">

        <Image
          src='/hero-bg.jpg'
          alt="beach hero picture"
          width={500}
          height={500}
          className="w-full h-full object-cover"/>

      <div className="max-w-[1140px] mx-auto px-10 text-gray-100">

        <div className="absolute top-[50%] flex flex-col sm:gap-6 gap-2">

          <h1 className="sm:text-3xl font-bold">Find your special trip</h1>

          <h2 className={`${ pacifico.className } text-3xl sm:text-5xl lg:text-7xl text-violet-300`}>with Weekaway</h2>

          <p className="max-w-[75%] sm:text-xl font-medium">{`Solo traveler? Traveling with your partner or friends? Or planning a family trip? We're here to provide you with the best deals for your holidays!`}</p>
        </div>
      </div>
      
    </section>
  )
}
