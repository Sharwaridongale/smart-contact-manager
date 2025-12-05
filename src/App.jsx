import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList";
import Modal from "./components/Modal";
import { toggleTheme } from "./store/uiSlice";

function App() {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.ui.darkMode);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="container">
        <div className="header">
          <h1>Smart Contact Manager</h1>
          <button className="theme-btn" onClick={() => dispatch(toggleTheme())}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <ContactList />
        <Modal />
      </div>
    </div>
  );
}

export default App;
