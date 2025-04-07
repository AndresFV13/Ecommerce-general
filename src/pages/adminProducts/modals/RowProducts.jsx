import React from 'react';
import PropTypes from 'prop-types';
import { HiPencil, HiTrash } from 'react-icons/hi';
import '../../../index.css';

const ProductRow = ({ product, onEdit, onDelete }) => (
  <tr>
    <td>
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-thumbnail"
      />
    </td>
    <td>{product.name}</td>
    <td>${product.price.toLocaleString()}</td>
    <td>{product.category}</td>
    <td>{product.stock}</td>
    <td className="actions-cell">
      <button 
        className="edit-button"
        onClick={() => onEdit(product)}
      >
        <HiPencil />
      </button>
      <button
        className="delete-button"
        onClick={() => onDelete(product)}
      >
        <HiTrash />
      </button>
    </td>
  </tr>
);

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProductRow;