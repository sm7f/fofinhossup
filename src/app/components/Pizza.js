'use client';
import React, {useState} from "react";
//image
import Image from "next/image";
//modal
import Modal from "react-modal";
//components
import PizzaDetails from "./PizzaDetails";
//icons
import IoCloseOutline from 'react-icons/io5'


Modal.setAppElement('body');

//modal styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0,5)',
  }
}

const Pizza = ({pizza}) => {
  console.log(pizza);

  //modal state
  const[modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl">
      <Image width={270} height={270} src={pizza.image} alt='' priority={1} />
      {/* title */}
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </div>
      </div>
      {/* text */}
      <div className="text-sm">
        {pizza.description}
      </div>
      <div className="mb-6 flex items-center justify-between m-2">
        {/* Buttom */}
        <button onClick={openModal} className="hidden lg:flex gradient text-white rounded-lg btn-sm font semibold">Aqui</button>
      </div>
      
      {/* modal */}
      {modal && (
      <Modal 
        isOpen={modal} 
        styles={modalStyles} 
        onRequestClose={closeModal} 
        contentLabel='Pizza Modal'>
         <div>
            {/* Seu conteúdo do modal, como texto ou outros elementos */}
            <p></p>

            {/* Vídeo incorporado do YouTube */}
            <iframe 
              width="100%" 
              height="800px" 
              src="https://www.youtube.com/embed/KMo2uWdHtrw?si=SVokFEQA6zcNr4fT" // Substitua isso pelo código do seu vídeo do YouTube
              title="Pizza Video"
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>

      </Modal>
      )}
    </div>
  );
};

export default Pizza;
