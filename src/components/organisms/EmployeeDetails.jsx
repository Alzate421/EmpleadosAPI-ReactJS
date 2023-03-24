import React from 'react';
import { Link } from 'react-router-dom';

function EmployeeDetails({ employee }) {
  return (
    <div className="home-container1">
      {employee ? (
        <div className="employee-card1">
          <p className="name1">{employee.createdAt}</p>
          <p className="name1">{employee.firstname}</p>
          <p className="name1">{employee.lastname}</p>
          <img className="avatar1" src={employee.avatar} alt={`${employee.firstname} ${employee.lastname}`} />
          <div className="employee-details1">
            <p>{employee.birthday}</p>
            <p className="email1">{employee.email}</p>
            {employee.star && <i className="fas fa-star"></i>}
            <p>{employee.hobbie}</p>
            <p>{employee.id}</p>
            <Link to="/">Back...</Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EmployeeDetails;
