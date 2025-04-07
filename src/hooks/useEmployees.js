import { useState, useEffect } from 'react';

const useEmployees = (initialEmployees = []) => {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem('employees');
    return saved ? JSON.parse(saved) : initialEmployees;
  });
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    const newEmployeeWithId = { ...newEmployee, id: Date.now() };
    setEmployees(prev => [...prev, newEmployeeWithId]);
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const editEmployee = (updatedEmployee) => {
    setEmployees(prev => 
      prev.map(emp => 
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const deleteEmployee = (employeeId) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
    setIsDeleteModalOpen(false);
    setSelectedEmployee(null);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    employees,
    searchTerm,
    setSearchTerm,
    selectedEmployee,
    setSelectedEmployee,
    isModalOpen,
    setIsModalOpen,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    addEmployee,
    editEmployee,
    deleteEmployee,
    filteredEmployees
  };
};

export default useEmployees;