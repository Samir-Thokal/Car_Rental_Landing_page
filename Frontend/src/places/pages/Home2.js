import React from 'react';
import './Home2.css';

function Homes() {
  return (
    <div className="Homes">
      <header className="Header">
        <h1 style={{ color: 'white', fontWeight: 'bold' }}>Save big with our cheap car rental!</h1>
        <p style={{ color: 'white' }}>Book now and enjoy great discounts</p>
      </header>
      <img src="https://via.placeholder.com/1500x500" alt="Car Rental" className="Image" />
      <div className="Container">
        <div className="LeftContainer">
          <h2>Best valued deals you will ever find</h2>
          <p>Find the perfect car rental deal that suits your budget and needs.</p>
        </div>
        <div className="RightContainer">
          <div className="Deal">
            <img src="https://via.placeholder.com/50" alt="Logo" className="Logo" />
            <h3>Special Offers</h3>
            <p>Get exclusive discounts on selected car models</p>
          </div>
          <div className="Deal">
            <img src="https://via.placeholder.com/50" alt="Logo" className="Logo" />
            <h3>24/7 Support</h3>
            <p>We provide round-the-clock customer support</p>
          </div>
          <div className="Deal">
            <img src="https://via.placeholder.com/50" alt="Logo" className="Logo" />
            <h3>Flexible Booking</h3>
            <p>Book now and pay later with our flexible booking options</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
