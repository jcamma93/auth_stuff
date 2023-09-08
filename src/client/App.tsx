import * as React from 'react';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Home from './views/Home';
import Login from './views/Login';
import Pizza from './views/Pizza';


const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Home /> }/>
				<Route path="/login" element={ <Login /> } />
				<Route path='/pizza' element={<PrivateRoute><Pizza /></PrivateRoute>} />
				<Route path="*" element={<h1 className="text-center display-1 text-danger">404 Page Not Found</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

interface AppProps { }


export default App;
