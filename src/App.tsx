import React from 'react';
import './App.css';
import CarList from './components/CarList';

const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Vehicle Manager</h1>
            </header>
            <main>
                <CarList />
            </main>
        </div>
    );
};

export default App;