import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import PrivateRoute from './Components/Routes/PrivateRoutes.jsx';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/dashboard/*"
                        element={<PrivateRoute component={Dashboard} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
