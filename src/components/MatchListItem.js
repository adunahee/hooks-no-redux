import React from 'react';
//this is our collection of reducers

const MatchListItem = (props) => {
    const { item, guessObj } = props;
    // console.log(guessObj);
    const { guess, setGuess } = guessObj;
    //sets styling when list item selected
    const selectedStyle = {};
    if(guess === item) {
        selectedStyle.color = 'orange';
        selectedStyle.fontWeight = 'bold';
    }

    return (
        <li style={selectedStyle} onClick={ () => {setGuess(item)}}>{item}</li>
    )
}

export default MatchListItem;