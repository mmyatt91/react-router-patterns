import React from 'react';
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
    // Renders the list of all dogs
    return (
        <div className="DogList">
            <div className="col">
                <h1 className="text-center">
                    Welcome to the Westside Connection Dogg Pound!
                </h1>
            </div>
            <div className="dog-row">
                {dogs.map (d => (
                    <div className="text-center" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <p>
                            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;