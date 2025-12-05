import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../store/contactsSlice";
import { closeModal } from "../store/uiSlice";
import TagInput from "./TagInput";

const ContactForm = ({ selected }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(selected?.name || "");
  const [phone, setPhone] = useState(selected?.phone || "");
  const [email, setEmail] = useState(selected?.email || "");
  const [notes, setNotes] = useState(selected?.notes || "");
  const [tags, setTags] = useState(selected?.tags || []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (selected) {
      dispatch(
        updateContact({
          ...selected,
          name,
          phone,
          email,
          notes,
          tags,
        })
      );
    } else {
      dispatch(addContact({ name, phone, email, notes, tags }));
    }

    dispatch(closeModal());
  };

  return (
    <form className="contact-form" onSubmit={submitHandler}>
      <h2>{selected ? "Edit Contact" : "Add Contact"}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <TagInput tags={tags} setTags={setTags} />

      <div className="btn-row">
        <button className="btn-save" type="submit">
          Save
        </button>
        <button
          className="btn-cancel"
          type="button"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
