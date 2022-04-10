import React from 'react'
import { useName } from "../hooks/useName"
import { useParams, useNavigate } from "react-router"
import {Navbar, Nav, Container } from 'react-bootstrap';

export default function StartupByName() {

	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};
	const { name } = useParams()

	const { error, loading, data } = useName(name);

	console.log({
		error,
		loading,
		data
	})

	if (loading) return <p>Loading...</p>;
	if (error) return (
			console.log(JSON.stringify(error, null, 2)),
			<div>
				<p>Error :(</p>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('/')}>Home</button>

			</div>
			)
	return (
		<div className="StartupByName">
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
			<p className="byName">name: {data.getStartupByName.name}</p>
			<p>uuid: {data.getStartupByName.uuid}</p>
			<br></br>
			<br></br>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('/')}>Home</button>
		</div>

	);
}

