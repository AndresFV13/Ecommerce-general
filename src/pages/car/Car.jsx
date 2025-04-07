import React from 'react';
import { HiShoppingCart, HiTrash, HiArrowLeft } from 'react-icons/hi';

const Car = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Control Gaming Pro',
      price: 22500,
      quantity: 2,
      image: '/svg/big_control.jpeg'
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      price: 185000,
      quantity: 1,
      image: '/svg/big_celular.jpeg'
    },
    {
      id: 3,
      name: 'Smartphone Pro',
      price: 200000,
      quantity: 1,
      image: '/svg/big_celular.jpeg'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5000;
  const total = subtotal + shipping;

  return (
    <section className="cart-container">
      <div className="cart-header">
        <h1><HiShoppingCart className="cart-icon-header" /> Mi Carrito</h1>
        <span className="items-count">{cartItems.length} artículos</span>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <HiShoppingCart className="empty-cart-icon" />
              <h2>Tu carrito está vacío</h2>
              <button className="continue-shopping">
                <HiArrowLeft /> Seguir comprando
              </button>
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="price">${item.price.toLocaleString()}</div>
                    <div className="quantity-controls">
                      <button className="quantity-btn">-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="quantity-btn">+</button>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button className="remove-btn">
                      <HiTrash className="trash-icon" />
                    </button>
                    <div className="total-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-summary">
            <h2>Resumen de compra</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Envío:</span>
              <span>${shipping.toLocaleString()}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceder al pago</button>
            <button className="continue-shopping">
              <HiArrowLeft /> Seguir comprando
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Car;