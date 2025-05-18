# Vehicle Management App 🚗

A full-stack application built with React (TypeScript frontend) and Express (TypeScript backend) for managing vehicle inventory.

## Features ✨

- **Vehicle Inventory**: View, add, and manage cars in a virtual garage
- **Engine Control**: Start car engines with API endpoints
- **Modern Stack**: 
  - Frontend: React 18 + TypeScript + Webpack
  - Backend: Express + TypeScript
- **Hot Reloading**: Development server with live updates

## Project Structure 📂
vehicle-app/
├── public/ # Static assets
├── src/
│ ├── components/ # React components
│ ├── models/ # Data models (Vehicle.ts)
│ ├── App.tsx # Main React component
│ ├── index.tsx # React entry point
│ └── server.ts # Express backend
├── .babelrc # Babel config
├── tsconfig.json # TypeScript config
├── webpack.config.js # Webpack config
└── package.json # Project dependencies


## Installation ⚙️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vehicle-app.git
   cd vehicle-app

Install dependencies:
bash

    npm install

Running the App 🚀
Development Mode

Run both frontend and backend simultaneously:
bash

npm run dev:server  # Starts backend on port 3000
npm run start:client # Starts frontend on port 8080

Production Build
bash

npm run build  # Compiles TypeScript
npm start      # Starts production server

Technologies Used 💻

    Frontend:
    React
    TypeScript
    Webpack

    Backend:
    Node.js
    Express
    TypeScript

Contributing 🤝

    Fork the project

    Create your feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some amazing feature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

