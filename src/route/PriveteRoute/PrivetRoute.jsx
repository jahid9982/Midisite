import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (user) {
        return children
    }
    return <Navigate to={'/singin'}></Navigate>
};

export default PrivetRoute;