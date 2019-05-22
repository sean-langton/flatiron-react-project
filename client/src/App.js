import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Welcome To Bar Golf!</h1>
        <p>
          Please Create A Tournament or Join One In Progress
        </p>
        <p>
          <Button variant="primary">Create Tournament</Button>
          <Button variant="primary">Join Tournament</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
