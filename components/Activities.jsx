import Image from "next/image";


export default function Activities() {

  return (
    <section
      id="activities"
      className="md:flex justify-between gap-5 max-w-[1140px] mx-auto w-full mt-[-20px] px-5">

      <div className="relative flex items-center justify-center mb-5 md:mb-0">
        <h3 className="absolute text-white text-3xl font-bold">Resorts</h3>
        <Image
          src='/act-resort.jpeg'
          alt='resorts image for activities'
          width={250}
          height={250}
          className="w-full shadow-xl border-4 border-white rounded"/>
        
      </div>

      <div className="relative flex items-center justify-center mb-5 md:mb-0">
      <h3 className="absolute text-white text-3xl font-bold">Cruises</h3>
        <Image
          src='/act-cruise.jpeg'
          alt='cruises image for activities'
          width={250}
          height={250}
          className="w-full shadow-lg border-4 border-white rounded"/>
      </div>

      <div className="relative flex items-center justify-center">
      <h3 className="absolute text-white text-3xl font-bold">Excursions</h3>
        <Image
          src='/act-excursion.jpeg'
          alt='excursions image for activities'
          width={250}
          height={250}
          className="w-full shadow-lg border-4 border-white rounded"/>
      </div>
    </section>
  )
}
