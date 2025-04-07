import React from 'react';
import { HiPlus, HiSearch } from 'react-icons/hi';
import EmployeeRow from './modals/EmployeeRow';
import EmployeeModal from './modals/EmployeeModal';
import DeleteEmployeeModal from './modals/DeleteEmployeeModal';
import useEmployees from '../../hooks/useEmployees';

const AdminEmployees = () => {
  const {
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
  } = useEmployees([
    {
      id: 1,
      name: 'Juan Pérez',
      position: 'Vendedor',
      sales: 150000,
      expenses: 45000,
      hiredDate: '2023-01-15',
      monthlyGoal: 200000
    }
  ]);

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Administración de Empleados</h1>
        <div className="admin-actions">
          <div className="search-container">
            <HiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar empleados..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="add-button"
            onClick={handleAddClick}
          >
            <HiPlus /> Nuevo Empleado
          </button>
        </div>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Ventas</th>
              <th>Ganancias</th>
              <th>Gastos</th>
              <th>Meta Mensual</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map(employee => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                onEdit={handleEditClick}
                onDelete={(emp) => {
                  setSelectedEmployee(emp);
                  setIsDeleteModalOpen(true);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <EmployeeModal
          onClose={() => {
            setIsModalOpen(false);
            setSelectedEmployee(null);
          }}
          onSave={selectedEmployee ? editEmployee : addEmployee}
          employee={selectedEmployee}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteEmployeeModal
          employee={selectedEmployee}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => deleteEmployee(selectedEmployee.id)}
        />
      )}
    </div>
  );
};

export default AdminEmployees;