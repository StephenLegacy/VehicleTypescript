import express from 'express';
import { Car } from './models/Vehicle.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample database
const garage: Car[] = [
    new Car('Tesla', 'Model S', 2023),
    new Car('Ford', 'Mustang', 2022),
    new Car('Toyota', 'Camry', 2021),
    new Car('Chevrolet', 'Corvette', 2022),
    new Car('BMW', 'X5', 2023),
    new Car('Mercedes-Benz', 'C-Class', 2020),
    new Car('Honda', 'Civic', 2019),
    new Car('Nissan', 'Altima', 2021),
    new Car('Audi', 'A4', 2022),
    new Car('Hyundai', 'Elantra', 2023),
    new Car('Kia', 'Sportage', 2022),
    new Car('Jeep', 'Wrangler', 2023)
];

// API Endpoints

// Get all cars
app.get('/api/cars', (req, res) => {
    try {
        res.status(200).json({
            success: true,
            count: garage.length,
            data: garage
        });
    } catch (error) {
        console.error('Error fetching cars:', error);
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
});

// Add a new car
app.post('/api/cars', (req, res) => {
    try {
        const { make, model, year } = req.body;

        if (!make || !model || !year) {
            return res.status(400).json({
                success: false,
                error: 'Please provide make, model, and year'
            });
        }

        const newCar = new Car(make, model, year);
        garage.push(newCar);

        res.status(201).json({
            success: true,
            data: newCar
        });
    } catch (error) {
        console.error('Error adding car:', error);
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
});

// Start a car's engine
app.post('/api/cars/:id/start', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                error: 'Invalid car ID'
            });
        }

        if (id < 0 || id >= garage.length) {
            return res.status(404).json({
                success: false,
                error: 'Car not found'
            });
        }

        garage[id].start();
        
        res.status(200).json({
            success: true,
            message: `Car ${id} engine started`,
            data: garage[id]
        });
    } catch (error) {
        console.error('Error starting car:', error);
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        success: false,
        error: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});