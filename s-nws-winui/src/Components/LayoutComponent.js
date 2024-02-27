//This component is essentially an wrapper for each component to include navbar and other element

import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const LayoutComponent = ({children}) => {
	return (
		<div>
			<Navbar bg="dark" variant="dark" fixed="top">
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
			<div className="container mt-5">{children}</div>
		</div>
	);
};

export default LayoutComponent;
