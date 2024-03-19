import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header";
import TravelRequestForm from "./components/TravelRequestForm";
import Explore from "./components/Explore";
import FlightResults from "./components/FlightResults";
import Footer from "./components/Footer";
import Offer from "./components/Offer.js";
import Slider from "./components/Slider.js";

const App = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlights = async (formData) => {
    try {
      const response = await axios.get(
        "https://api.npoint.io/378e02e8e732bb1ac55b"
      );

      let filteredFlights = response.data;

      if (formData.origin) {
        const origin = formData.origin.toLowerCase();
        filteredFlights = filteredFlights.filter(
          (flight) => flight.origin.toLowerCase() === origin
        );
      }

      if (formData.destination) {
        const destination = formData.destination.toLowerCase();
        filteredFlights = filteredFlights.filter(
          (flight) => flight.destination.toLowerCase() === destination
        );
      }

      if (formData.airline) {
        const airline = formData.airline.toLowerCase();
        filteredFlights = filteredFlights.filter(
          (flight) => flight.airline.toLowerCase() === airline
        );
      }

      if (formData.price) {
        const price = parseFloat(formData.price);
        filteredFlights = filteredFlights.filter(
          (flight) => parseFloat(flight.price) <= price
        );
      }

      setFlights(filteredFlights);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights({});
  }, []);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    fetchFlights(formData);
  };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <TravelRequestForm onFormSubmit={handleFormSubmit} />
      {loading ? (
        <p>Loading flights...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <FlightResults flights={flights} />
      )}
      <Explore />
      <Slider />
      <Offer />
      <Footer />
    </div>
  );
};

export default App;
