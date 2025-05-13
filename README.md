Debugging Process Documentation
Application: React Debugging Exercise
Case: I used React Developer Tools to investigate my code and found the following issues identified and debugging steps:

Issue 1: User data not displaying in UserCard.
Observation: When the "Show Users" button is clicked, the user list appears, but instead of displaying user information, each card shows "No user data available."
Diagnosis (using React DevTools):
Opened React Developer Tools and selected the "Components" tab.
Expanded the component tree to find the UserCard component instances rendered within the div. user-list-container.
Selected one of the UserCard instances.
Inspected the props panel on the right. Noticed that the App component is passing a prop named personData to UserCard.
Looked at the UserCard.js code and saw that it was trying to access the user data using props.userData.
Realized there was a mismatch between the prop name being sent (personData) and the prop name being received/expected (userData).
Solution:
Located the line where UserCard is rendered within the map function, changed the prop name from personData={user} to userData={user} to match what UserCard is expecting.

Issue 2: Console warning about list items.
Observation: Noticed a warning in the browser's developer console: "Warning: Each child in a list should have a unique "key" prop."
Diagnosis (using React DevTools/Console):
The console warning explicitly points to the issue: rendering a list of elements (the UserCard components) without providing a unique key prop for each item. React uses keys to efficiently update lists. Inspected the div.user-list-container in the Components tab. Saw multiple instances of UserCard but no key prop listed on the surrounding div elements created by the map.
Solution:
Opened src/App.js located the map function rendering the UserCard components, added the key prop to the outer element being returned by the map callback, used the unique user.id property from the user data as the value for the key: <UserCard key={user.id} userData={user} />.

Issue 3: Counter not incrementing reliably.
Observation: Clicked the "Increment" button on the Counter component rapidly. Sometimes the counter seemed to skip numbers or not update as expected.
Diagnosis:
Selected the Counter component in the Components tab. Clicked the "Increment" button several times while watching the state panel. Noticed that when clicking rapidly, the count state didn't always update sequentially. For example, clicking twice quickly might result in the count going from 0 to 1, skipping 2. Recalled that directly updating state using the current state value (setCount(count + 1)) can lead to issues when updates happen asynchronously or in quick succession, as count might be outdated when the update is processed.
Solution:
Opened src/components/Counter.js, located the increment function, changed the setCount call to use the functional update form: setCount(prevCount => prevCount + 1). This guarantees that the update is based on the most recent state value (prevCount).

Verification:
Refreshed the application in the browser, the developer console confirmed that the "key" warning was gone.
Clicked the "Show Users" button and verified that the user information (Name, Role, Email) were correctly displayed in each card.
Clicked the "Increment" button on the Counter component, including rapid clicks, and confirmed that the counter now increments reliably by one each time.
Inspected the UserCard components in React DevTools again and confirmed they were receiving the userData prop correctly.
Inspected the Counter component in React DevTools and observed the count state updating correctly with each click.
