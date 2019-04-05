import React, { useState, useContext } from 'react';
//this is our collection of reducers
import { Store } from './Store';

const MatchListItem = (props) => {
    const { item, guessObj } = props;
    console.log(guessObj);
    const { guess, setGuess } = guessObj;
    //sets styling when list item selected
    const selectedStyle = {};
    if(guess === item) {
        selectedStyle.color = 'orange';
        selectedStyle.fontWeight = 'bold';
    }
    const { state, dispatch } = useContext(Store);
    const { leaders, civilizations } = state;
    const { selectedLeader, selectedCiv } = state;

    return (
        <li style={selectedStyle} onClick={ () => {setGuess(item)}}>{item}</li>
    )
}

export default MatchListItem;