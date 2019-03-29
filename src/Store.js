import React from 'react';

//creates context that child components subscribe to
export const Store = React.createContext();

const initialState = {};

function reducer() {

}

//props passed here so we can access child components
export function StoreProvider(props) {
    return (
        <Store.Provider value='data from store'>
            {props.children}
        </Store.Provider>
    )
}