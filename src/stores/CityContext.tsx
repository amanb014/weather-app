import React, {createContext, useEffect, useState} from 'react';
import { CITIES_KEY } from '../config/Variables';
import { City } from './interfaces';



interface ICityContext {
    cities: City[];
    setCities: React.Dispatch<React.SetStateAction<City[]>>;
    selectedCity: City | undefined;
    setSelectedCity: React.Dispatch<React.SetStateAction<City | undefined>>;
}

const CityContext = createContext<ICityContext | undefined>(undefined);

const CityProvider: React.FC = props => {

    const [cities, setCities] = useState<City[]>(() => {
        return JSON.parse(localStorage.getItem(CITIES_KEY) || '[]');
    });
    const [selectedCity, setSelectedCity] = useState<City | undefined>(undefined);

    const value = {
        cities, setCities,
        selectedCity, setSelectedCity
    };

    useEffect(() => {
        localStorage.setItem(CITIES_KEY, JSON.stringify(cities));
    }, [cities])

    return <CityContext.Provider value={value}>
        {props.children}
    </CityContext.Provider>
}

export {CityProvider, CityContext}