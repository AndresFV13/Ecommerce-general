import React from 'react';
import PropTypes from 'prop-types';

const DeleteConfirmationModal = ({ product, onClose, onConfirm }) => (
  <div className="modal-overlay">
    <div className="delete-modal">
      <h2>¿Eliminar Producto?</h2>
      <p>Estás por eliminar permanentemente: <strong>{product?.name}</strong></p>
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

DeleteConfirmationModal.propTypes = {
  product: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteConfirmationModal;