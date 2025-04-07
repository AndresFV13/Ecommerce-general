import React from 'react';
import PropTypes from 'prop-types';
import { HiPencil, HiTrash } from 'react-icons/hi';

const EmployeeRow = ({ employee, onEdit, onDelete }) => {
  const calculateProfit = () => employee.sales - employee.expenses;
  const goalProgress = ((employee.sales / employee.monthlyGoal) * 100).toFixed(1);

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>${employee.sales.toLocaleString()}</td>
      <td className={calculateProfit() >= 0 ? 'positive' : 'negative'}>
        ${calculateProfit().toLocaleString()}
      </td>
      <td>${employee.expenses.toLocaleString()}</td>
      <td>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${goalProgress}%` }}
          />
          <span>{goalProgress}%</span>
        </div>
      </td>
      <td className="actions-cell">
        <button 
          className="edit-button"
          onClick={() => onEdit(employee)}
        >
          <HiPencil />
        </button>
        <button
          className="delete-button"
          onClick={() => onDelete(employee)}
        >
          <HiTrash />
        </button>
      </td>
    </tr>
  );
};

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default EmployeeRow;