import React from 'react'
import '../index.css';
import { useNavigate } from "react-router-dom";
import {Navbar, Nav, Container } from 'react-bootstrap';
import { Stack } from '@mui/material';


export default function Landing() {
	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};

	return (
		<div className="Landing">
			<Navbar fixed="top" bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">StartApp</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
			<div>
				<div className="text-xl font-medium text-pink">
					<Stack spacing={1}>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('list')}>Click to list all startups</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('name-search')}>Click to list all startups by name</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('uuid-search')}>Click to list all startups by UUID</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('create-startup')}>Click to create a startup</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('add-position')}>Click to add a position to a startup</button>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('add-img')}>Click to add an image to a startup</button>

					</Stack>
				</div>
				{/* <p className="text-xl font-medium text-pink">You have a new message!</p> */}
			</div>

			</div>

		</div>
	);
}


