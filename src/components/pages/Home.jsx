import { useState, useEffect } from "react";
import { getEmployees } from '../../api/employees';
import EmployeeList from "../organisms/EmployeeList";
import './Home.css'

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        console.log("Datos de empleados:", data);
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <EmployeeList employees={employees} />
  );
}

export default Home;