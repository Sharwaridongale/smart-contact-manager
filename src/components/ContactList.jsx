import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import { openModal } from "../store/uiSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  // Get contacts from Redux store
  const contacts = useSelector((state) => state.contacts.list || []);

  // Get search term from uiSlice
  const searchTerm = useSelector((state) => state.ui.searchTerm || "");

  // Filter contacts by search term (case-insensitive)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      {/* Header */}
      <div className="list-header">
        <h2>Contacts</h2>
        <button onClick={() => dispatch(openModal(null))} className="btn">
          + Add Contact
        </button>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* No contacts message */}
      {filteredContacts.length === 0 && <p>No contacts found.</p>}

      {/* Contact Items */}
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
