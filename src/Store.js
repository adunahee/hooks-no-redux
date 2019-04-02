import React, { useReducer } from 'react';

//creates context that child components subscribe to
export const Store = React.createContext();

const initialState = {
    leaders: [],
    civilizations: [],
    selectedLeader: '', 
    selectedCiv: '',
};

function reducer(state, action) {
    switch(action.type){
        case("SET_LEADERS"):
            return {...state, leaders: action.payload};
        case("SET_CIVILIZATIONS"):
            return {...state, civilizations: action.payload};
        default:
            return state;
    }
}

//props passed here so we can access child components
export function StoreProvider(props) {
    //useReducer takes two arguments, the reducer and its initial state, and returns an array that is destructured into state and dispatch
    const [state, dispatch] = useReducer(reducer, initialState);
    //creates value object with state and dispatch key/value pairs
    const value = {state, dispatch};
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}