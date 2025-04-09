# 🧑‍💼 Employee Directory App

A simple full-stack web application to **add**, **view**, **edit**, and **delete** employee records using a **React frontend**, **PHP backend**, and **MySQL database**.

---

## 🚀 Features

- Create, read, update, delete (CRUD) employee records
- Search employees by name
- Pagination for easy viewing of large lists
- Bootstrap UI for simple styling
- REST API communication using Axios

---

## 🧱 Tech Stack

- **Frontend:** React, Axios, Bootstrap
- **Backend:** PHP (Vanilla), PDO
- **Database:** MySQL

---

## 📁 Project Structure

employee-directory/ │ ├── employee-frontend/ # React App (Frontend) │ └── src/ │ ├── components/ │ │ ├── EmployeeForm.js │ │ └── EmployeeList.js │ └── App.js │ ├── employee-backend/ # PHP API (Backend) │ ├── db.php │ ├── employee-api.php │ └── .htaccess


---

## ⚙️ Setup Instructions

### 📦 Backend Setup (PHP + MySQL)

1. ✅ Create a database in **phpMyAdmin**:
   ```sql
   CREATE DATABASE employee_directory;

   USE employee_directory;

   CREATE TABLE employees (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100),
     role VARCHAR(100),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

✅ Place the employee-backend/ folder in your htdocs directory:

C:\xampp\htdocs\employee-backend

✅ Start Apache and MySQL from XAMPP.

✅ Open your browser and test API:

http://localhost/employee-backend/employees


💻 Frontend Setup (React)
Navigate to the frontend folder:

cd employee-frontend
Install dependencies:

npm install
Start the app:

npm start
App runs at:

http://localhost:3000
