// src/components/LoginPage.js
import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const LoginPage = () => {
	const handleLogin = () => {
		// Perform login logic if needed

		// Navigate to the MainPage
		// This could also be done programmatically based on some condition
		// For simplicity, I'm using Link here
		window.location.href = '/main';
	};

	return (
		<div>
			<h2>Login Page</h2>
			<Button onClick={handleLogin}>Login</Button>
		</div>
	);
};

export default LoginPage;
