import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Category = () => {
    const products = [
        { title: 'Cámaras', image: '/svg/camera.jpeg' },
        { title: 'Celulares', image: '/svg/celular.jpeg' },
        { title: 'Accesorios', image: '/svg/auriculares1.jpg' },
        { title: 'Entretenimiento', image: '/svg/control.jpeg' },
        { title: 'Tecnología', image: '/svg/tecnologia.jpg' },
    ];

    return (
        <section className='category'>
            <h3 className='category-title'>Categorías</h3>
            
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next'
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        640: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 5
                        }
                    }}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className='category-card'>
                                <span className='category-card-title'>{product.title}</span>
                                <img className='category-card-image' src={product.image} alt={product.title} />
                                <button className='category-card-button'>Ver productos</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* Botones personalizados */}
                <button className="custom-prev swiper-button">
                    <span className="arrow-left"></span>
                </button>
                <button className="custom-next swiper-button">
                    <span className="arrow-right"></span>
                </button>
            </div>
        </section>
    );
};

export default Category;