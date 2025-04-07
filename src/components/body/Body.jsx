import React from 'react'

const Body = () => {
  return (
    <main className='main'>
        <div className='main-text'>
            <h1 className='main-text-title'> Audifonos <br/> <span> Inalambricos </span> </h1>
            <div className='main-subtext'>
                <span> $300.000 </span>
                <span className='main-subtext-price'> $350.000 </span>
            </div>
            <button className='main-button'> Agregar al carrito </button>
            <div className='main-products'>
              <img className='main-products-image' src="/svg/auriculares1.jpg" alt="auriculares1" />
              <img className='main-products-image' src="/svg/auriculares2.jpg" alt="auriculares2" />
              <img className='main-products-image' src="/svg/auriculares3.jpg" alt="auriculares3" />
            </div>
        </div>
        <div className='main-image'>
            <img src="/svg/body-image.jpeg" alt="Image body" />
        </div>
    </main>
  )
}

export default Body
