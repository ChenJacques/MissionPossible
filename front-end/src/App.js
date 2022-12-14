import './App.css';
import React from "react";
import Add from './components/add.js'
import Read from './components/read.js'
import Del from './components/delete.js'

function App() {
	const myStyle = {
		color: "white",
		backgroundColor: "DodgerBlue",
		padding: "10px",
		fontFamily: "Sans-Serif"
	  };
  return (
		<div>
			<div style={myStyle}>
				<h1>ToDoList</h1>
			</div>
			<div className="App-content">
				<Add/>
			</div>
      <div className='border'>
        <Read/>
      </div>

		</div> 
  );
}

export default App;
