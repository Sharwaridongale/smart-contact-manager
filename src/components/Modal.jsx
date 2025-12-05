import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/uiSlice";
import ContactForm from "./ContactForm";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.modalOpen);
  const selected = useSelector((state) => state.ui.selectedContact);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => dispatch(closeModal())}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <ContactForm selected={selected} />
      </div>
    </div>
  );
};

export default Modal;
