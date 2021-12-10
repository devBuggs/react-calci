import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CalciComponent from './CalciComponent';


function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<CalciComponent />} />
			</Routes>
		</Router>
	);
}
export default App;
