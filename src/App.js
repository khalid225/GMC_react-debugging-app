import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import usersData from "./users";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showUsers: false,
			// Issue: Initial state value was not defined
			appStartTime: Date.now(), 
		};
		this.toggleUsers = this.toggleUsers.bind(this);
	}

	componentDidMount() {
		console.log("App component mounted.");
	}

	componentWillUnmount() {
		console.log("App component will unmount.");
	}

	toggleUsers() {
		this.setState((prevState) => ({
			showUsers: !prevState.showUsers,
		}));
	}

	render() {
		const { showUsers, appStartTime } = this.state;

		return (
			<Container className="App mt-5">
				<h1 className="text-center mb-4">React Debugging Exercise</h1>

				<div className="text-center mb-4">
					<Button onClick={this.toggleUsers} variant="primary">
						{showUsers ? "Hide Users" : "Show Users"}
					</Button>
				</div>

				{showUsers && (
					<div className="user-list-container">
						{/* Issue: Missing 'key' prop when mapping list items */}
						{usersData.map((user) => (
							// Issue: Passing user data with a different prop name than expected by UserCard
							<UserCard key={user.id} userData={user} />
						))}
					</div>
				)}

				<Counter />

				<div className="mt-4 text-center">
					<p>App started at: {new Date(appStartTime).toLocaleTimeString()}</p>
				</div>
			</Container>
		);
	}
}

export default App;
