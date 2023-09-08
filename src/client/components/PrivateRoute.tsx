import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoute = (props: PrivateRouteProps) => {

    const TOKEN = localStorage.getItem('token');

    if (!TOKEN) {
        return (
            <Navigate to="/login" />
        );
    } else {
        return (
            <>{props.children}</>
        );
    }
};

interface PrivateRouteProps {
    path?: string;
    exact?: boolean;
    children: React.ReactNode;
}



export default PrivateRoute;

