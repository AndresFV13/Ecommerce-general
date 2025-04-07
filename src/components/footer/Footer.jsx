import React from 'react'
import { FaFacebook, FaInstagram, FaPaperPlane, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
        <div className="footer-container">
            {/* Sección de Información */}
            <div className="footer-section">
                <h4 className="footer-title">Landy Store</h4>
                <p className="footer-text">Tecnología para tu vida digital</p>
                <div className="social-links">
                    <a href="#" aria-label="Facebook"><FaFacebook className="social-icon" /></a>
                    <a href="#" aria-label="Instagram"><FaInstagram className="social-icon" /></a>
                    <a href="#" aria-label="Twitter"><FaTwitter className="social-icon" /></a>
                    <a href="#" aria-label="WhatsApp"><FaWhatsapp className="social-icon" /></a>
                </div>
            </div>

            {/* Enlaces Rápidos */}
            <div className="footer-section">
                <h4 className="footer-title">Nuestra Tienda</h4>
                <ul className="footer-links">
                    <li><a href="/about">Sobre nosotros</a></li>
                    <li><a href="/blog">Blog tecnológico</a></li>
                    <li><a href="/careers">Trabaja con nosotros</a></li>
                    <li><a href="/stores">Tiendas físicas</a></li>
                </ul>
            </div>

            {/* Atención al Cliente */}
            <div className="footer-section">
                <h4 className="footer-title">Ayuda</h4>
                <ul className="footer-links">
                    <li><a href="/shipping">Envíos y entregas</a></li>
                    <li><a href="/returns">Devoluciones</a></li>
                    <li><a href="/faq">Preguntas frecuentes</a></li>
                    <li><a href="/contact">Contáctanos</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
                <h4 className="footer-title">Suscríbete</h4>
                <p className="footer-text">Recibe ofertas exclusivas y novedades</p>
                <form className="newsletter-form">
                    <input 
                        type="email" 
                        placeholder="Ingresa tu email" 
                        className="newsletter-input"
                        aria-label="Email para newsletter"
                    />
                    <button type="submit" className="newsletter-button">
                        <FaPaperPlane className="send-icon" />
                    </button>
                </form>
            </div>
        </div>

        {/* Copyright y Legal */}
        <div className="footer-bottom">
            <div className="legal-links">
                <a href="/privacy">Política de privacidad</a>
                <a href="/terms">Términos de servicio</a>
                <a href="/cookies">Aviso de cookies</a>
            </div>
            <p className="copyright">&copy; 2024 Landy Store. Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer;