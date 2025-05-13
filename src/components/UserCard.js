import React from "react";
import { Card } from "react-bootstrap";

function UserCard(props) {
	// Issue: Trying to access user data using an incorrect prop name
	const user = props.userData; 

	if (!user) {
		return <p>No user data available.</p>;
	}

	return (
		<Card style={{ width: "18rem", margin: "10px" }}>
			<Card.Img
				variant="top"
				src={user.avatar}
				alt={user.name}
				style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "10px auto" }}
			/>
			<Card.Body className="text-center">
				<Card.Title>{user.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{user.role}</Card.Subtitle>
				<Card.Text>{user.email}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default UserCard;
