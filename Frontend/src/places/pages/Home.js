/* Home.js */
import React, { useState, useEffect } from "react";
// Import the car image
import "./Home.css";
import Homes from "./Home2";

const Home = () => {
  const [selectedCar, setSelectedCar] = useState({});
  const [carInfo, setCarInfo] = useState({});
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);

  const carList = [
    {
      name: "Nexon EV",
      image: "./images/Nexon_ev.png",
      info: {
        Brand: "Brand 1",
        Model: "Model 1",
        Year: "Year 1",
        Color: "Color 1",
        Seats: "Seats 1",
        Transmission: "Transmission 1",
        Fuel: "Fuel 1",
      },
    },
    {
      name: "Ertiga",
      image: "./images/Ertiga.jpeg",
      info: {
        Brand: "Brand 2",
        Model: "Model 2",
        Year: "Year 2",
        Color: "Color 2",
        Seats: "Seats 2",
        Transmission: "Transmission 2",
        Fuel: "Fuel 2",
      },
    },
    {
      name: "Tata Punch",
      image: "./images/punch.jpeg",
      info: {
        Brand: "Brand 3",
        Model: "Model 3",
        Year: "Year 3",
        Color: "Color 3",
        Seats: "Seats 3",
        Transmission: "Transmission 3",
        Fuel: "Fuel 3",
      },
    },
    {
      name: "Swift Dzire",
      image: "./images/Dzire.jpeg",
      info: {
        Brand: "Brand 4",
        Model: "Model 4",
        Year: "Year 4",
        Color: "Color 4",
        Seats: "Seats 4",
        Transmission: "Transmission 4",
        Fuel: "Fuel 4",
      },
    },
    {
      name: "Tuscon",
      image: "./images/Tuscon.jpeg",
      info: {
        Brand: "Brand 5",
        Model: "Model 5",
        Year: "Year 5",
        Color: "Color 5",
        Seats: "Seats 5",
        Transmission: "Transmission 5",
        Fuel: "Fuel 5",
      },
    },
    {
      name: "Wagnor",
      image: "./images/Wagnor.jpeg",
      info: {
        Brand: "Brand 6",
        Model: "Model 6",
        Year: "Year 6",
        Color: "Color 6",
        Seats: "Seats 6",
        Transmission: "Transmission 6",
        Fuel: "Fuel 6",
      },
    },
  ];

  useEffect(() => {
    setSelectedCar(carList[selectedRowIndex]);
    setCarInfo(carList[selectedRowIndex].info);
  }, [selectedRowIndex]);

  const handleCarClick = (car, index) => {
    setSelectedRowIndex(index);
  };

  const handleReserveNow = () => {
    const formElement = document.getElementById("form-section");
    formElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="home-content text-center">
          <div className="left-container">
            <h1 className="main-title">Plan your trip now</h1>
            <h1 className="subtitle">
              Save <span className="red-text">big</span> with our <br></br>car
              rental
            </h1>
            <p className="description">
              Rent the car of your dreams, unbeatable prices, unbeatable miles,
              <br></br>Flexible pick-up options and much more.
            </p>
            <div className="buttons">
              <button className="btn btn-primary">Book Ride</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="right-container">
            <img src="./images/carhome.jpeg" alt="Car" className="car-image" />
          </div>
        </div>
        <div id="form-section"></div>
        <p className="Heading">Book a Car</p>
        <table className="form-table">
          <tbody>
            <tr>
              <td>
                <img
                  src="./images/car-logo.png"
                  alt="Car Type"
                  className="form-icon"
                />
                <span className="form-text">Select Your Car Type</span>
                <select className="form-dropdown" required>
                  <option value="" disabled selected>
                    Select Car Type
                  </option>
                  <option value="compact">Compact</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                </select>
              </td>
              <td>
                <img
                  src="./images/location-logo.jpeg"
                  alt="Pick-Up Location"
                  className="form-icon"
                />
                <span className="form-text">Pich-Up</span>
                <select className="form-dropdown" required>
                  <option value="" disabled selected>
                    Select Pick-Up Location
                  </option>
                  <option value="airport">Airport</option>
                  <option value="hotel">Hotel</option>
                  <option value="office">Office</option>
                </select>
              </td>
              <td>
                <img
                  src="./images/location-logo.jpeg"
                  alt="Drop-Off Location"
                  className="form-icon"
                />
                <span className="form-text">Drop-Off</span>
                <select className="form-dropdown" required>
                  <option value="" disabled selected>
                    Select Drop-Off Location
                  </option>
                  <option value="airport">Airport</option>
                  <option value="hotel">Hotel</option>
                  <option value="office">Office</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="./images/calender-logo.png"
                  alt="Pick-Up Date"
                  className="form-icon"
                />
                <span className="form-text">Pick-Up</span>
                <input
                  type="date"
                  className="form-input"
                  placeholder="Select Pick-Up Date"
                  required
                />
              </td>
              <td>
                <img
                  src="./images/calender-logo.png"
                  alt="Drop-Off Date"
                  className="form-icon"
                />
                <span className="form-text">Drop-Off</span>
                <input
                  type="date"
                  className="form-input"
                  placeholder="Select Drop-Off Date"
                  required
                />
              </td>
              <td>
                <button className="search-btn">Search</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="Step-info">
          <p>Plan Your trip now</p>
          <h1>Quick and easy car rental</h1>
        </div>
        <div className="steps">
          <div className="step">
            <img
              src="./images/Steps-car.jpeg"
              alt="Step 1"
              className="step-icon"
            />
            <h2 className="step-name">Select Car</h2>
            <p className="step-description-detail">
              We offer a big range of vehicles for all<br></br> your driving
              needs. We have the<br></br> perfect car to meet your needs.
            </p>
          </div>
          <div className="step">
            <img
              src="./images/Operators-steps.jpeg"
              alt="Step 2"
              className="step-icon"
            />
            <h2 className="step-name">Contact Operator</h2>
            <p className="step-description-detail">
              Our knowledgeable and friendly <br></br>operators are always ready
              to help<br></br> with any questions or concerns.
            </p>
          </div>
          <div className="step">
            <img
              src="./images/Car-steps.jpeg"
              alt="Step 3"
              className="steps-icon"
            />
            <h2 className="step-name">Let's Drive</h2>
            <p className="step-description-detail">
              Whether you're hitting the open road,<br></br> we've got you
              covered with our wide<br></br> range of cars.
            </p>
          </div>
        </div>
        <div className="Step-btm-info">
          <p className="first">Vehicle Models</p>
          <h1>Our rental fleet</h1>
          <p className="second">
            Choose from a verity of our Amazing vehicles for rent fpr your next
            <br></br> advanture or business trip
          </p>
        </div>
      </div>
      <div className="car-row">
        <div className="car-list">
          <table>
            <tbody>
              {carList.map((car, index) => (
                <tr
                  key={index}
                  className={selectedRowIndex === index ? "active" : ""}
                  onClick={() => handleCarClick(car, index)}
                >
                  <td>{car.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="car-info">
          {selectedCar && (
            <div className="car-details">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="car-img"
              />
              <table className="car-info-table">
                <tbody>
                  <tr>
                    <th colSpan="2">$70 / rent per day</th>
                  </tr>
                  {Object.entries(carInfo).map(([key, value], index) => (
                    <tr key={index}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="reserve-btn" onClick={handleReserveNow}>
                Reserve Now
              </button>
            </div>
          )}
        </div>
      </div>
      <br />
      <Homes />
    </div>
  );
};

export default Home;
