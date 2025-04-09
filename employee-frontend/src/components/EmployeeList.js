// src/components/EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.role}</td>
            <td>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(emp)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
