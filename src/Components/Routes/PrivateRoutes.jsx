import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = auth.currentUser != null;

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
