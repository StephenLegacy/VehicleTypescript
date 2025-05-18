import React, { useState, useEffect } from 'react';
import { Car } from '../models/Vehicle';

const CarList: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);
    const [newCar, setNewCar] = useState<Omit<Car, 'start'>>({ make: '', model: '', year: new Date().getFullYear() });

    useEffect(() => {
        fetch('/api/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, []);

    const handleAddCar = () => {
        fetch('/api/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => setCars([...cars, data]));
    };

    const startEngine = (id: number) => {
        fetch(`/api/cars/${id}/start`, { method: 'POST' })
            .then(res => res.json())
            .then(data => alert(data.message));
    };

    return (
        <div className="car-list">
            <h2>Legacy Garage By Oloo</h2>
            <div className="add-car-form">
                <input
                    type="text"
                    placeholder="Make"
                    value={newCar.make}
                    onChange={(e) => setNewCar({...newCar, make: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Model"
                    value={newCar.model}
                    onChange={(e) => setNewCar({...newCar, model: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Year"
                    value={newCar.year}
                    onChange={(e) => setNewCar({...newCar, year: parseInt(e.target.value) || newCar.year})}
                />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} className="car-item">
                        <span>{car.year} {car.make} {car.model}</span>
                        <button onClick={() => startEngine(index)}>Start Engine</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;