import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeList({ employees }) {
  return (
    <div className="home-container">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <p className="name">{employee.id}</p>
          <img src={employee.avatar} className="avatar" alt={`${employee.firstname} ${employee.lastname}`} />
          <div className="employee-details">
            <p className="name">{employee.firstname} {employee.lastname}</p>
            <p className="email">{employee.email}</p>
            {employee.star && <i className="fas fa-star"></i>}
            <Link to={`/employee/${employee.id}`}>See details...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
