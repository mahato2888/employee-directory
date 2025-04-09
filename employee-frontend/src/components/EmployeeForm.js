// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, selected }) => {
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    }
  }, [selected]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="form-control mb-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className="form-control mb-2" name="role" placeholder="Role" value={form.role} onChange={handleChange} required />
      <button className="btn btn-primary">{selected ? 'Update' : 'Add'} Employee</button>
    </form>
  );
};

export default EmployeeForm;
