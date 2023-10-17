'use client';

import { IMAGES_DATA } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from 'react-modal';
import { ImageModal } from ".";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    border: 'none',
    backgroundColor: '#ffffffea'
  },
  overlay: {
    backgroundColor: '#000000bc',
    zIndex: 1000
  }
};


export default function Gallery() {

  const [ data, setData ] = useState({ img: '', i: 0 });
  const [ modal, setModal ] = useState( false );

  const viewImage = ( img, i ) => {
    setData({ img, i })
  }
  const imgAction = ( action ) => {
    let i = data.i;
    if( action === 'next-img' ){
      setData({ img: IMAGES_DATA[i + 1], i: i +1 })
    }
    if( action === 'prev-img' ){
      setData({ img: IMAGES_DATA[i - 1], i: i -1 })
    }
  }

  const handleModal = () => {
    setModal( !modal )
  }

  return (
    <section 
      id='gallery'
      className="mx-auto max-w-[1140px] w-full p-14 bg-gray-100 text-center rounded-lg">

      <h5 className="text-4xl font-bold pb-5 text-[var(--primary-dark)]">Gallery</h5>

      <div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="10px">
            { IMAGES_DATA.map(( image, i ) => (
                <Image
                  key={ i }
                  src={ image.url }
                  alt={ image.title }
                  width={200}
                  height={200}
                  className="w-full cursor-pointer hover:opacity-80 ease-in duration-200"
                  onClick={() => {
                    viewImage( image, i )
                    handleModal()
                  }}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      { data?.img && 
          <Modal
            isOpen={ modal }
            onRequestClose={ handleModal }
            style={customStyles}
            >
              <ImageModal
                data={ data }
                handleModal={ handleModal }
                imgAction={ imgAction } />
          </Modal>
      }
      
    </section>
  )
}
