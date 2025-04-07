import React from 'react';
import { HiPlus, HiSearch } from 'react-icons/hi';
import ProductRow from './modals/RowProducts';
import ProductModal from './modals/ProductModal';
import DeleteConfirmationModal from './modals/DeleteModals';
import useProducts from '../../hooks/useProducts';

const AdminProducts = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedProduct,
    setSelectedProduct,
    isAddModalOpen,
    setIsAddModalOpen,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    addProduct,
    editProduct,
    deleteProduct,
    filteredProducts
  } = useProducts([
    {
      id: 1,
      name: 'Control Gaming Pro',
      price: 22500,
      category: 'Electrónica',
      stock: 15,
      description: 'Control inalámbrico para gaming',
      image: '/svg/big_control.jpeg'
    }
  ]);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Administración de Productos</h1>
        <div className="admin-actions">
          <div className="search-container">
            <HiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button 
            className="add-button"
            onClick={() => setIsAddModalOpen(true)}
          >
            <HiPlus /> Nuevo Producto
          </button>
        </div>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <ProductRow
                key={product.id}
                product={product}
                onEdit={setSelectedProduct}
                onDelete={(product) => {
                  setSelectedProduct(product);
                  setIsDeleteModalOpen(true);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <ProductModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={addProduct}
        />
      )}

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSave={editProduct}
        />
      )}

      {isDeleteModalOpen && (
        <DeleteConfirmationModal
          product={selectedProduct}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => deleteProduct(selectedProduct.id)}
        />
      )}
    </div>
  );
};

export default AdminProducts;