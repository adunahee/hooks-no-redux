import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '../components/Footer';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import {expect as chaiExpect } from 'chai';

configure({ adapter: new Adapter() });

describe('Test suite for footer component', () => {
    it('runs without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('returns a single footer div with "Fun with Hooks"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.contains(<footer>Fun with Hooks</footer>)).toBe(true); 
    });
    it('contains text "Fun with Hooks"', () => {
        const wrapper = shallow(<Footer />);
        chaiExpect(wrapper.text()).to.contain('Fun with Hooks');
    });
});