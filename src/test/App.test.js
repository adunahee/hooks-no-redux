import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import { StoreProvider } from '../components/Store';

describe('Test Suite for <App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StoreProvider ><App /></StoreProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

