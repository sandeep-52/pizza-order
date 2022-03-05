import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='container'>
        <div className='row'>
        <div className='col-2'>
            <h1>About Us</h1>
            <h2>WELCOME TO MAESTRO PIZINNI</h2>
            <p>All those PizzaExpress favourites you know and love have crossed countries and continents to be wherever you are.</p>
             <button className='btn-start'> READ MORE</button>
        </div>
        <div className='col-2'>
            <div className='about__pizza'>
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bfxlr8rhgudycpzpcqpa" alt='pizza'/>
            </div>
        </div>
        </div>
        </div>
    </div>
    
  );
}

export default About;