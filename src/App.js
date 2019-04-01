import React, { useState, useReducer, useEffect, useContext } from 'react';
import { Store } from './Store';



const App = () => {
  //creates a state var with default value of empty string
  const [civ, setCiv] = useState('');
  const [civArr, setCivArr] = useState(["England", "America", "Egypt", "Zulu"]);
  //gives component access to the 'value' attr of provider
  const {state, dispatch} = useContext(Store);
  console.log(state);
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
            <input type="text" value={civ} name="name" onChange={(event) => setCiv(event.target.value)} />
            </label>
            <button type='submit' onClick={(e) => {
              e.preventDefault();
              setCivArr([...civArr, civ])
            }}>Add To List</button>
          </form>
        </section>

        <section>
          <h2>Civilization Summary</h2>
          <ul>
            {civArr.map((c, i) => {
              return (
                <li key={i}
                  onClick={() => { setCivArr(civArr.filter((c, index) => { return index !== i })) }}>
                  {c}
                </li>
              )
            })}
          </ul>
        </section>
        <section>
          <h2>Dispatch Actions</h2>
          <button onClick={() => { dispatch({ type: 'SET_CIVILIZATIONS', payload: civArr });}}> Add Civilizations to Store</button>
          <button onClick={()=> { setCivArr([])}}>Clear Civ State </button>
        </section>
      </body>
      <footer>
        Fun with Hooks
        </footer>
    </div>
  );
}

export default App;
