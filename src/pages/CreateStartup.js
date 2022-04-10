import React from 'react'
import { gql, useMutation } from "@apollo/client"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Navbar, Nav, Container } from 'react-bootstrap';

const CREATE_STARTUP = gql `
	mutation CreateStartup($name: String, $website: String, $type: String, $img: String) {
		createStartup(name: $name, website: $website, type: $type, img: $img) {
			name
			website
			type
			img
		}
	}
`;


export default function CreateStartup() {
	let name, website, type, img;

	let navigate = useNavigate();
	const routeChange = (x) => {
	  let path = x;
	  navigate(path);
	};

	const [createStartup, {data, loading, error}] = useMutation(CREATE_STARTUP)

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
				createStartup( {
					variables: {
						name: name.value,
						website: website.value,
						type: type.value,
						img: img.value
					}
				});
			}}>

			<input placeholder="Startup name" ref= { value => name = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Startup website" ref= { value => website = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Startup type" ref= { value => type = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<input placeholder="Startup logo URL" ref= { value => img = value } className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit"> Add Startup </button>
			</form>
			<br></br>
		</div>
	);
}
