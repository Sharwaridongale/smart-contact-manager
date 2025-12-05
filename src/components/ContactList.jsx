import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import { openModal } from "../store/uiSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);
  const search = useSelector((state) => state.ui.search || "");

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contact-list">
      <div className="list-header">
        <h2>Contacts</h2>
        <button onClick={() => dispatch(openModal(null))} className="btn">
          + Add Contact
        </button>
      </div>

      <SearchBar />

      {filtered.length === 0 && <p>No contacts found.</p>}

      {filtered.map((c) => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </div>
  );
};

export default ContactList;
