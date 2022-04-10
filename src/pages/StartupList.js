import React from 'react'
import "../index.css";
import { useStartups } from '../hooks/useStartups'
import { Link } from "react-router-dom"
import {Navbar, Nav, Container } from 'react-bootstrap';

export default function StartupList() {

	const { error, loading, data } = useStartups();

		console.log({ error, data, loading })

		// console.log({data})
		if (loading) return <p>Loading...</p>;
  		if (error) return (
			  console.log(JSON.stringify(error, null, 2)),
			  <p>Error :(</p>
		  )

		return (
			<div className="StartupsList">
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
				{data.getAllStartups.map((startup) => {
					return(
						<Link to={`/${startup.name}`}>
							<img src={startup.img} alt=""/>
							<h2>{startup.name}</h2>
						</Link>
					);
				})}
			</div>
		);
}


