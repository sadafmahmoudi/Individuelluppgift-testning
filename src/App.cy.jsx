import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})
import React, { useState } from 'react';

const NameComponent = () => {
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (loggedIn) {
      setName('');
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Skriv ditt namn..."
        value={name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        {loggedIn ? 'Logga ut' : 'Spara namn'}
      </button>
      {loggedIn && <h2>Välkommen, {name}!</h2>}
    </div>
  );
};

export default NameComponent;