// src/pages/adminEmployees/modals/EmployeeModal.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EmployeeModal = ({ employee, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        name: '',
        position: 'Vendedor',
        sales: 0,
        expenses: 0,
        monthlyGoal: 0,
        hiredDate: new Date().toISOString().split('T')[0]
      });
    
      // Añadir efecto para sincronizar con el empleado seleccionado
      useEffect(() => {
        if (employee) {
          setFormData(employee);
        } else {
          setFormData({
            name: '',
            position: 'Vendedor',
            sales: 0,
            expenses: 0,
            monthlyGoal: 0,
            hiredDate: new Date().toISOString().split('T')[0]
          });
        }
      }, [employee]);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
          ...formData,
          sales: Number(formData.sales),
          expenses: Number(formData.expenses),
          monthlyGoal: Number(formData.monthlyGoal)
        });
      };

  return (
    <div className="modal-overlay">
      <div className="product-modal">
        <h2>{employee ? 'Editar Empleado' : 'Nuevo Empleado'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo:</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Cargo:</label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
                required
              >
                <option value="Vendedor">Vendedor</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Gerente">Gerente</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Fecha de contratación:</label>
              <input
                type="date"
                value={formData.hiredDate}
                onChange={(e) => setFormData({...formData, hiredDate: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Ventas ($):</label>
              <input
                type="number"
                value={formData.sales}
                onChange={(e) => setFormData({...formData, sales: e.target.value})}
                min="0"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Gastos ($):</label>
              <input
                type="number"
                value={formData.expenses}
                onChange={(e) => setFormData({...formData, expenses: e.target.value})}
                min="0"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Meta mensual ($):</label>
            <input
              type="number"
              value={formData.monthlyGoal}
              onChange={(e) => setFormData({...formData, monthlyGoal: e.target.value})}
              min="0"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="save-button">
              {employee ? 'Guardar Cambios' : 'Crear Empleado'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EmployeeModal.propTypes = {
  employee: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EmployeeModal;