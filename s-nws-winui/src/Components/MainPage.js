// MainPage.js
import React from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap';
import GridComponent from './GridComponent';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

const MainPage = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand as={Link} to="/">
					S-WMS
				</Navbar.Brand>
				<Nav className="ml-auto">
					<Nav.Link as={Link} to="/login">
						Login
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link as={Link} to="/analytics">
						Analytics
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link as={Link} to="/stock">
						Stock
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default MainPage;
