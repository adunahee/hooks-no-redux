import React, { useState, useEffect, useContext } from "react";

import MatchListItem from './MatchListItem';

//this is our collection of reducers
import { Store } from './Store';

const MatchingLists = () => {
    //useEffect replaces lifecycle functions componentDidMount
    useEffect(() => {
        state.leaders.length === 0 && fetchLeader();
        state.civilizations.length === 0 && fetchCivs();
    })

    const [leaderGuess, setLeaderGuess] = useState('');
    const [civGuess, setCivGuess] = useState('');
    //gives component access to the 'value' attr of provider
    const { state, dispatch } = useContext(Store);
    const { leaders, civilizations } = state;
    //fetches leader data from webtask api
    const fetchLeader = async () => {
        try {
            const data = await fetch('https://wt-928114e23c76a17d6cf12e0b21825ce0-0.sandbox.auth0-extend.com/hooks-civs/leaders');
            const dataJSON = await data.json();
            await dispatch({ type: 'SET_LEADERS', payload: dataJSON });
        } catch (e) {
            await console.log('Leaders could not be fetched.', e);
        }
    }
    //fetches civilization names from webtask api
    const fetchCivs = async () => {
        try {
            const data = await fetch('https://wt-928114e23c76a17d6cf12e0b21825ce0-0.sandbox.auth0-extend.com/hooks-civs/civs');
            const dataJSON = await data.json();
            await dispatch({ type: 'SET_CIVILIZATIONS', payload: dataJSON });
        } catch (e) {
            await console.log('Civs could not be fetched.', e);
        }
    }

    const compareGuess = () => {
        const kongoCheck = (civGuess === 'Kongo' && leaderGuess === 'Mvemba Nzinga');
        const usaCheck = (civGuess === 'America' && leaderGuess === 'Teddy Roosevelt');
        const carthageCheck = (civGuess === 'Carthage' && leaderGuess === 'Dido');
        if (kongoCheck || usaCheck || carthageCheck) {
            alert('Correct!');
            setCivGuess('');
            setLeaderGuess('');
        } else {
            alert('Not quite. Try again!')
        }
    }

    return (
        <div>
            <h2>Can you successfully match the leaders with their civilization?</h2>
            <h3>Leaders</h3>
            <ul>
                {state.leaders.length > 0 &&
                    leaders.map((l, i) => {
                        return (<MatchListItem key={i} item={l} action='SET_SELECTED_LEADER' guessObj={{ guess: leaderGuess, setGuess: setLeaderGuess }} />)
                    })}
            </ul>
            <h3> Civilizations </h3>
            <ul>
                {state.civilizations.length > 0 &&
                    civilizations.map((c, i) => {
                        return (<MatchListItem key={i} item={c} action='SET_SELECTED_CIV' guessObj={{ guess: civGuess, setGuess: setCivGuess }} />)
                    })}
            </ul>
            <button onClick={() => { return compareGuess()}}>Guess</button>
        </div>
    )
}

export default MatchingLists