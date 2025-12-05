📘 Smart Contact Manager

A modern, fast, and user-friendly React Contact Manager with:

✔ Add / Edit / Delete Contacts
✔ Search & Sorting
✔ Tagging System
✔ Activity Tracker (Last Interaction)
✔ Modal UI
✔ Dark Mode
✔ LocalStorage Persistence
✔ Redux Toolkit for global state

🚀 Features
🔹 1. Manage Contacts

Add new contacts

Edit contact details

Delete contacts

View phone, email, notes

🔹 2. Tagging System

Add tags like Family, Office, Friends, Clients, etc.

🔹 3. Activity Tracker

Each contact automatically tracks last interaction time.

🔹 4. Smart Search

Real-time search filter for name & tags.

🔹 5. Beautiful UI

Modern responsive design

Smooth interactions

Modal form

Clean layout

🔹 6. Dark Mode

Switch theme with a single click — saved automatically.

🔹 7. Data Persistence

All contacts and tags are saved in LocalStorage using Redux middleware.

🛠️ Tech Stack

React (Vite)

Redux Toolkit

LocalStorage

CSS (Custom styling)

📂 Project Structure
src/
 ┣ components/
 ┃ ┣ ContactList.jsx
 ┃ ┣ ContactItem.jsx
 ┃ ┣ ContactForm.jsx
 ┃ ┣ Modal.jsx
 ┃ ┣ SearchBar.jsx
 ┃ ┗ TagInput.jsx
 ┣ store/
 ┃ ┣ contactsSlice.js
 ┃ ┣ uiSlice.js
 ┃ ┣ store.js
 ┃ ┗ localStorage.js
 ┣ App.jsx
 ┣ main.jsx
 ┗ index.css

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/smart-contact-manager.git

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


The app will run on:

http://localhost:5173/

📸 Screenshots (Add after pushing repo)

You can add screenshots like:

![App Screenshot](./screenshots/home.png)
![Dark Mode](./screenshots/darkmode.png)

🧠 Redux Overview
Contacts Slice

Handles:

Add contact

Update contact

Delete contact

Track last interaction

Tagging

UI Slice

Handles:

Modal open/close

Theme toggle

Search state

🏗️ Improvements (Future Enhancements)

Backend API (Node/Express + MongoDB)

Contact Groups

Pagination

Authentication

Export to CSV / Excel

👩‍💻 Developer

Sharwari Dongale
Smart Contact Manager – Portfolio Project