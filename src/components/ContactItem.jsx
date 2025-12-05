import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../store/uiSlice";
import { deleteContact, touchContact } from "../store/contactsSlice";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="contact-item"
      onClick={() => dispatch(touchContact(contact.id))}
    >
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>

      <div className="tags">
        {contact.tags?.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <small>
        Last interaction:{" "}
        {new Date(contact.lastInteraction).toLocaleString()}
      </small>

      <div className="btn-row">
        <button
          className="btn-edit"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(openModal(contact));
          }}
        >
          Edit
        </button>

        <button
          className="btn-delete"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(deleteContact(contact.id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
