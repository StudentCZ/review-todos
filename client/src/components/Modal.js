import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal_overlay} onClick={onClose} />
        <div className={styles.modal_content}>
          <button className={styles.modal_close} onClick={onClose}>
            &times;
          </button>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
