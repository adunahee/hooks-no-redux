import React, { useState, useReducer, useEffect, useContext } from 'react';

const App = () => {
  //creates a state var with default value of empty string
  const [civ, setCiv] = useState('');
  const [civArr, setCivArr] = useState([]);
  return (
    <div>
      <header>
        <h1>Civilizations of the World</h1>
      </header>
      <body>

        <section>
          <h2>Civilization Form</h2>
          <form>
            <label>
              Enter a civilization:
            <input type="text" value={civ} onChange={(event) => setCiv(event.target.value)} />
            </label>
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              setCivArr([...civArr, civ])
            }}>Add Civilization</button>
          </form>
        </section>

        <section>
          <h2>Civilization Summary</h2>
          <ul>
            {civArr.map((c, i) => (<li key={i} >{c}</li>))}
          </ul>
        </section>

      </body>
      <footer>
        Fun with Hooks
        </footer>
    </div>
  );
}

export default App;
