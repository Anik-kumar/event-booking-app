# 🎫 Event Booking App

A responsive full-stack event booking web application built using **Angular 18** for the frontend and **Node.js** for backend interactions (with a public REST API). Users can browse events and book tickets, while event organizers can manage their own events and view bookings.

---

## 👥 Roles

### 👤 Users
- 🔍 **Home Page** – View all available events
- 📄 **Event Page** – View event details with option to book
- 🔐 **Login/Register** – Handled via modal popups
- 🎟️ **Book Tickets** – Book event tickets from modal
- 📂 **My Bookings** – View all bookings made by the logged-in user

### 🛠️ Admin / Event Organizer
- 📝 **Register as Organizer** – Sign up to create/manage events
- ➕ **Create Events** – Add new events via dashboard
- 📈 **View Bookings** – See bookings received for created events

---

## 🌐 Public API Used

- API Base URL: [`https://freeapi.miniprojectideas.com`](https://freeapi.miniprojectideas.com/index.html)
- Controller: `EventBooking`

All API calls are made using HTTP methods to interact with the public backend.

---

## 🛠️ Tech Stack

- **Frontend**: Angular 18, Bootstrap 5, HTML, CSS
- **Backend**: Public REST API (No local backend server required)
- **Routing**: Angular Router
- **Modals**: Bootstrap modal for Login, Register, and Booking

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (>=18.x)
- Angular CLI 18+
- Internet connection (to access public API)
