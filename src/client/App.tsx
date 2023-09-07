import * as React from 'react';
// import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route  path="/">
					{/* {() => <h1 className="text-center display-1">Home Page</h1>} */}
				</Route>
			</Routes></BrowserRouter>
	)
}

interface AppProps { }


export default App;
