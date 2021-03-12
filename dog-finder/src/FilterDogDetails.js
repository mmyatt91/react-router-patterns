import React from 'react';
import DogDetails from './DogDetails';
import { useParams } from 'react-router-dom';

function FilterDogDetails({dogs}) {
    const { name } = useParams();

    if (name) {
        const currentDog = dogs.find(
            dog => dog.name === name
        );
        return <DogDetails dog={currentDog} />
    }
    return null;
};

export default FilterDogDetails;
