// src/pages/adminEmployees/modals/DeleteEmployeeModal.jsx
import React from 'react';
import PropTypes from 'prop-types';

const DeleteEmployeeModal = ({ employee, onClose, onConfirm }) => (
  <div className="modal-overlay">
    <div className="delete-modal">
      <h2>¿Eliminar Empleado?</h2>
      <p>
        Estás por eliminar permanentemente a: 
        <strong> {employee?.name}</strong> ({employee?.position})
      </p>
      <div className="modal-actions">
        <button className="cancel-button" onClick={onClose}>
          Cancelar
        </button>
        <button className="delete-confirm-button" onClick={onConfirm}>
          Confirmar Eliminación
        </button>
      </div>
    </div>
  </div>
);

DeleteEmployeeModal.propTypes = {
  employee: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteEmployeeModal;