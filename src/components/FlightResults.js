// FlightResults.js
import React from "react";

const FlightResults = ({ flights }) => {
  return (
    <div
      id="flight"
      className="flight-results grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] my-[50px] mx-[50px]"
    >
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="flight-card bg-gray-300 border p-[14px] rounded-md"
        >
          <p>Origin: {flight.origin}</p>
          <p>Destination: {flight.destination}</p>
          <p>Airline: {flight.airline}</p>
          <p>Flight Number: {flight.flightNumber}</p>
          <p>Arrival: {flight.arrivalTime}</p>
          <p>Price: {flight.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
