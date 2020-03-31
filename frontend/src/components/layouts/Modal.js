import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css'

export default function Modal({ title, type, onClose, children }) {
  const [modalClasses, setModalClasses] = useState('modal')

  function closeModal() {
    setModalClasses('modal close');
    onClose && onClose();
  }

  return (
    <div className={modalClasses}>
      <div className="modal__overlay" onClick={closeModal} />
      <div className="modal__container">
        <h2 className="modal__title" type={type}>{title}</h2>
        <button 
          type="button"
          className="modal__close button"
          onClick={closeModal}
        >
          <FiX />
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
};
