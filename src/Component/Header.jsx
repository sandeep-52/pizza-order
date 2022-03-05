import React from 'react'
import Navbar from './Navbar';


const Header = () => {
  return (
    <div className='banner'>
    <Navbar/>
   
    <div className='banner__content'>
        <div className='container'>
        <div className='banner__text'>
<h3>Pizza Delivery</h3>
<h1>MAESTRO PIZINNI</h1>
<p>Among the number of food, Pizza is my favourite food because it 
tastes and smells fabulous. The pizza itself looks so yummy, crispy and so cheesy. 
</p>
<button className='btn-start'>DELIVERY NOW</button>
</div>
        </div>
    </div>


    </div>
  );
}

export default Header;