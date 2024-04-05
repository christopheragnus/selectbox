'use client'

import React, { useState } from 'react';
import styles from './page.module.css';

type Employee = {
  id: number;
  name: string;
};

const employees: Employee[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Stanislav Volovei' },
  { id: 5, name: 'Sarina Eggers' },
];

const EmployeeSelector: React.FC = () => {
  // State to manage the selected employee
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Function to handle select box change
  const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    const employee = employees.find(emp => emp.id === selectedId);
    setSelectedEmployee(employee || null);
  };

  return (
    <div className={styles.employeeSelectorContainer}>
      <div className={styles.employeeSelector}>
        <label htmlFor="employeeSelect">Select Employee:</label>
        <select
          id="employeeSelect"
          value={selectedEmployee ? selectedEmployee.id : ''}
          onChange={handleEmployeeChange}
        >
          <option value="">Select an employee...</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
        {selectedEmployee && (
          <div className={styles.employeeCard}>
            <h2>Selected Employee:</h2>
            <p>ID: {selectedEmployee.id}</p>
            <p>Name: {selectedEmployee.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeSelector;