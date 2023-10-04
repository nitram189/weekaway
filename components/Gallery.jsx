import Image from "next/image";



export default function Gallery() {

  return (
    <section 
      id='gallery'
      className="mx-auto max-w-[1140px] w-full p-14 bg-gray-100 text-center rounded-lg">

      <h5 className="text-4xl font-bold pb-5 text-[var(--primary-dark)]">Gallery</h5>

      <div className="grid gap-4 sm:grid-cols-5">
        
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <Image
            src='/gallery-rio.jpg'
            alt='Image gallery number 1'
            width={200}
            height={200}
            className="w-full h-full object-cover rounded"/>
        </div>

        <div>
          <Image
            src='/gallery-cancun.jpg'
            alt='Image gallery number 2'
            width={200}
            height={200}
            className="w-full h-full object-cover rounded"/>
        </div>

        <div>
          <Image
            src='/gallery-los-angeles.jpg'
            alt='Image gallery number 3'
            width={200}
            height={200}
            className="w-full h-full object-cover rounded"/>
        </div>

        <div>
          <Image
            src='/gallery-beach.jpg'
            alt='Image gallery number 4'
            width={200}
            height={200}
            className="w-full h-full object-cover rounded"/>
        </div>

        <div>
          <Image
            src='/gallery-salvador.jpg'
            alt='Image gallery number 5'
            width={200}
            height={200}
            className="w-full h-full object-cover rounded"/>
        </div>
      </div>
      

  
    </section>
  )
}
