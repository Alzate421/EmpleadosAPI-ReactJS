import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployee } from '../../api/employees';
import EmployeeDetails from '../organisms/EmployeeDetails';
import './EmployeeDetail.css'

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee(id).then(data => setEmployee(data));
  }, [id]);

  return (
    <EmployeeDetails employee={employee} />
  );
};

export default EmployeeDetail;
