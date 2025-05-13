// src/components/Counter.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
	// State for the counter
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1); 
	};

	return (
		<div className="mt-4 text-center">
			<h3>Counter: {count}</h3>
			<Button onClick={increment}>Increment</Button>
		</div>
	);
}

export default Counter;
