
import { AiOutlineRightCircle, AiOutlineLeftCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Image from "next/image";


export default function ImageModal({ data, handleModal, imgAction }) {


  return (
    <div className='p-5'>
      <button
        type='button'
        onClick={ handleModal }
        className='border-none text-black/80 text-3xl absolute -right-1 top-2'>
          <AiOutlineCloseCircle />
      </button>

      <div className='flex'>
        <button
          type='button'
          onClick={() => imgAction('prev-img')}
          className='border-none text-black/60 text-4xl hover:text-black'>
            <AiOutlineLeftCircle />
        </button>

        <Image
          src={ data?.img?.url }
          alt={ data?.img?.title }
          width={ 400 }
          height={ 400 }
          className='max-w-full h-auto'/>

        <button
          type='button'
          onClick={() => imgAction('next-img')}
          className='border-none text-black/60 text-4xl hover:text-black'>
            <AiOutlineRightCircle />
        </button>
      </div>
    </div>
  )
}
