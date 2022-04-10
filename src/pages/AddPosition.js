import React from 'react'
import { gql, useMutation } from "@apollo/client"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Navbar, Nav, Container } from 'react-bootstrap';

const ADD_POSITION = gql `
	mutation AddPosition($uuid: String, $title: String, $experience: String, $type: [String]) {
		addPosition(uuid: $uuid, title: $title, experience: $experience, type: $type) {
			uuid
			positions {
				title
				experience
				type
			}
		}
	}
`;


export default function AddPosition() {
	let uuid, title, experience, type;

	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};

	const [addPosition, {data, loading, error}] = useMutation(ADD_POSITION)

	console.log(
		loading,
		data,
		error
	)

	if (loading) return <p>Loading...</p>;

	if (error) return (
			console.log(JSON.stringify(error, null, 2)),
			<div>
				<p>Error  </p>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => routeChange('/')}>Home</button>
			</div>
	)

	return (
		<div>
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
			<form onSubmit={ e => {
				e.preventDefault();
				addPosition( {
					variables: {
						uuid: uuid.value,
						title: title.value,
						experience: experience.value,
						type: type.value
					}
				});
			}}>

			<input placeholder="UUID" ref= { value => uuid = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Title" ref= { value => title = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Experience" ref= { value => experience = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Type" ref= { value => type = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> Add Position </button>
			</form>
			<br></br>
		</div>
	);
}
