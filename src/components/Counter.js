import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => {
		// Issue: Incorrect way to update state based on previous state
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div className="mt-4 text-center">
			<h3>Counter: {count}</h3>
			<Button onClick={increment}>Increment</Button>
		</div>
	);
}

export default Counter;
