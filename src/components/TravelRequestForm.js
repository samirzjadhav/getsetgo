import React, { useState } from "react";

const TravelRequestForm = ({ onFormSubmit }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [airline, setAirline] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = { origin, destination, airline, price };
    onFormSubmit(filters);
  };

  return (
    <div
      id="request"
      className="TravelRequestForm px-[26px] md:px-[50px] relative top-[-130px] md:top-[-100px] flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center items-center gap-[10px] px-[30px] mt-[32px] absolute"
      >
        <input
          type="text"
          placeholder="Origin City"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination City"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="text"
          placeholder="Airline"
          value={airline}
          onChange={(e) => setAirline(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="text-black bg-white">
          Search Flights
        </button>
      </form>
    </div>
  );
};

export default TravelRequestForm;
