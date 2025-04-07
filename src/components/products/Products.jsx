import React from 'react';
import { HiShoppingCart, HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  const products = [
    {
      title: 'Control Gaming Pro',
      image: '/svg/big_control.jpeg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
    {
      title: 'Tecnología Premium',
      image: '/svg/big_tecnologia.jpg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
    {
      title: 'Smartphone Pro',
      image: '/svg/big_celular.jpeg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
    {
      title: 'Control Gaming Pro',
      image: '/svg/big_control.jpeg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
    {
      title: 'Tecnología Premium',
      image: '/svg/big_tecnologia.jpg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
    {
      title: 'Smartphone Pro',
      image: '/svg/big_celular.jpeg',
      price: 22500,
      oldPrice: 30000,
      discount: 25
    },
  ];

  return (
    <section className="products">
        <h2 className="products-title">Explora nuestros productos de oferta</h2>
        
        <div className="swiper-container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                    prevEl: '.products-prev',
                    nextEl: '.products-next'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-card">
                            <div className="product-badge">-{product.discount}%</div>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="product-image" 
                            />
                            <div className="product-rating">
                                {[...Array(5)].map((_, i) => (
                                    <HiStar key={i} className="star-icon" />
                                ))}
                            </div>
                            <h3 className="product-title">{product.title}</h3>
                            <div className="product-pricing">
                                <span className="product-price">${product.price.toLocaleString()}</span>
                                <span className="product-old-price">${product.oldPrice.toLocaleString()}</span>
                            </div>
                            <button className="product-button">
                                Agregar al carrito
                                <HiShoppingCart className="cart-icon" />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Botones de navegación personalizados */}
            <button className="products-prev swiper-button">
                <span className="arrow-left"></span>
            </button>
            <button className="products-next swiper-button">
                <span className="arrow-right"></span>
            </button>
        </div>
    </section>
  )
}

export default Products;