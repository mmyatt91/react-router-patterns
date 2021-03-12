import React from 'react';
import { Link, Redirect } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({dog}) {
    // If dog is not found redirect
    if(!dog) return <Redirect to="/dogs" />

    // Renders a single dog profile
    return (
        <div className="DogDetails">
            <div className="text-center">
                <h1>{dog.name}</h1>
                <img src={dog.src} alt={dog.name} />
                <h3>{dog.age} Years Old</h3>
                <ul>
                    {dog.facts.map((fact, i) => (
                        <li key={i}>{fact}</li>
                    ))}
                </ul>
                <Link to="/dogs">Back to Home</Link>
            </div>
        </div>
    );
};

export default DogDetails;