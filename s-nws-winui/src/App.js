// src/App.js
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Button, Navbar, Nav} from 'react-bootstrap';
import MainPage from './Components/MainPage';
import LoginPage from './Components/LoginPage';
import StockPage from './Components/StockPage';
import AnalyticsPage from './Components/AnalyticsPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/main" element={<MainPage />} />
				<Route path="/analytics" element={<AnalyticsPage />} />
				<Route path="/Stock" element={<StockPage />} />
			</Routes>
		</Router>
	);
}

export default App;
