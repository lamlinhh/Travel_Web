import React from "react";
import styles from "@/components/ModalNotification/styles.module.scss"; 

interface ModalProps {
  message: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose, onConfirm }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>×</span>
        <p>{message}</p>
        <button className={styles.confirmButton} onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
