import React, { useState } from 'react';

import MatchingLists from './MatchingLists';
import MatchNotification from './MatchNotification';
import Footer from './Footer';

const App = () => {
  //creates a state var with default value of empty string
  const [civ, setCiv] = useState('');
  const [civArr, setCivArr] = useState(["England", "America", "Egypt", "Zulu"]);

  return (
    <div>
      <header>
        <h1>Civilizations of the World</h1>
      </header>

      <section>
        <h2>Playing with "State" using Civilization (huehue)</h2>
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

        <h3>Civilization Summary</h3>
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
      <MatchNotification />
      <MatchingLists />

      <Footer />

    </div>
  );
}

export default App;
