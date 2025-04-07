import React from 'react'
import { HiCheckCircle, HiShieldCheck, HiShoppingCart, HiTruck } from 'react-icons/hi';

const Offers = () => {
  return (
    <section className="featured-product">
        <div className="featured-container">
            <div className="featured-content">
                <span className="offer-badge">OFERTA LIMITADA</span>
                <h1 className="featured-title">
                    PlayStation 5 <br/>
                    <span>Edición Digital</span>
                </h1>
                
                <div className="pricing">
                    <div className="discount-tag">-30%</div>
                    <div className="price-container">
                        <span className="current-price">$3.499.000</span>
                        <span className="old-price">$4.998.000</span>
                    </div>
                </div>

                <ul className="features-list">
                    <li><HiCheckCircle className="feature-icon" /> Entrega inmediata</li>
                    <li><HiCheckCircle className="feature-icon" /> Garantía 2 años</li>
                    <li><HiCheckCircle className="feature-icon" /> Envío gratis</li>
                    <li><HiCheckCircle className="feature-icon" /> 2 controles DualSense</li>
                </ul>

                <button className="buy-button">
                    Comprar Ahora
                    <HiShoppingCart className="button-icon" />
                </button>

                <div className="trust-badges">
                    <div className="trust-item">
                        <HiShieldCheck className="trust-icon" />
                        <span>Compra segura</span>
                    </div>
                    <div className="trust-item">
                        <HiTruck className="trust-icon" />
                        <span>Entrega en 24h</span>
                    </div>
                </div>
            </div>

            <div className="featured-image">
                <img 
                    src="/svg/play_5.png" 
                    alt="PlayStation 5 Edición Digital" 
                    className="product-img"
                />
                <div className="gradient-overlay"></div>
            </div>
        </div>
    </section>
  )
}

export default Offers;