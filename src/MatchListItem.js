import React, { useState, useContext } from 'react';
//this is our collection of reducers
import { Store } from './Store';

const MatchListItem = (props) => {
    const { item } = props;
    const [ selected, setSelected ] = useState(false);
    //sets styling when list item selected
    const selectedStyle = {};
    if(selected) {
        selectedStyle.color = 'green';
        selectedStyle.fontWeight = 'bold';
    }
    const { store } = useContext(Store);
    const { state, dispatch } = store;
    const { selectedLeader, selectedCiv } = state;

    return (
        <li style={selectedStyle} onClick={ () => {setSelected(!selected)}}>{item}</li>
    )
}

export default MatchListItem;