import React from "react";
import "./Home2.css";

function Homes() {
  return (
    <div className="Homes">
      <header className="Header">
        <h1 style={{ color: "white", fontWeight: "bold" }}>
          Save big with our cheap car rental!
        </h1>
        <p style={{ color: "white" }}>
          Top Airports, Local Suppliers, <span className="red-text">24/7</span>{" "}
          Support
        </p>
      </header>
      <img src="./images/Big3-cars.png" alt="Car Rental" className="Image" />
      <div className="Container">
        <div className="LeftContainer">
          <h3>Why Choose Us</h3>
          <h1 style={{ fontsize: 20, fontWeight: "bold" }}>
            Best valued deals you
            <br /> will ever find
          </h1>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            <br></br>
            We're dedicated to providing you with the best value for your
            <br></br> money, so you can enjay top-quality services and products
            without<br></br>
            breaking the bank. Our deals are designed to give you the ultimate{" "}
            <br></br>
            renting experience, so don't miss out on your chance to save big.
          </p>
        </div>
        <div className="RightContainer">
          <div className="Deal">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="Logo"
            />
            <h2>Special Offers</h2>
            <p>Take your driving experience to the next <br></br>level with our top-notch vehicles for your<br></br> cross-country adventures.</p>
          </div>
          <div className="Deal">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="Logo"
            />
            <h2>24/7 Support</h2>
            <p>Get everything you need in one convenient.<br></br> transparent price with our all-inclusive<br></br> pricing policy.</p>
          </div>
          <div className="Deal">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="Logo"
            />
            <h2>Flexible Booking</h2>
            <p>Enjoy peace of mind with our no hidden<br></br> charges policy. We believe in transparent<br></br> and honest pricing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homes;
