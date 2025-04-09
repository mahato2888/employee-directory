// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

const API_URL = 'http://localhost/employee-backend/employees'; // adjust if needed

function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchEmployees = async () => {
    const res = await axios.get(API_URL);
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addOrUpdateEmployee = async (employee) => {
    if (employee.id) {
      await axios.put(`${API_URL}/${employee.id}`, employee);
    } else {
      await axios.post(API_URL, employee);
    }
    setSelected(null);
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchEmployees();
  };

  return (
    <div className="container mt-4">
      <h2>Employee Directory</h2>
      <EmployeeForm onSave={addOrUpdateEmployee} selected={selected} />
      <EmployeeList employees={employees} onEdit={setSelected} onDelete={deleteEmployee} />
    </div>
  );
}

export default App;
