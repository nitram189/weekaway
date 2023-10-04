import Image from "next/image";

export default function Contact() {


  return (
    <section 
      id='contact'
      className="mx-auto max-w-[1140px] p-10">

        <div className="flex flex-col gap-3 text-gray-800">
          <h5 className="text-xl text-center font-bold">Send us a message</h5>
          <p className="text-lg text-center">{`We're standing by`}</p>

          <Image
            src='/contact-bg.jpg'
            alt="contact background image"
            width={300}
            height={300}
            className="w-full h-[30vh] object-cover rounded" />
        </div>

        <form className="py-10 flex flex-col gap-5 border-b">

          <div className="sm:flex gap-5 sm:space-y-0 space-y-5">
            <input
              type="text"
              placeholder="First name"
              className="border-2 p-2 rounded w-full" />
            <input
              type="text"
              placeholder="Second name"
              className="border-2 p-2 rounded w-full" />
          </div>

          <div className="sm:flex gap-5 sm:space-y-0 space-y-5">
            <input
              type="email"
              placeholder="Email"
              className="border-2 p-2 rounded w-full" />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-2 p-2 rounded w-full" />
          </div>

          <textarea
            rows={6}
            cols={30}
            className="border-2 p-2 rounded"
            placeholder="Type your message here"
            />
        
          <button
           className="py-2 sm:w-1/2 xl:w-1/3">
            Submit
          </button>
        </form>
    </section>
  )
}
