import React from 'react';
import ReactDOM from 'react-dom';

import MatchListItem from '../components/MatchListItem';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { expect } from 'chai';

//required to use shallow()
configure({ adapter: new Adapter() });

describe('Test Suite for <MatchListItem />', () => {
    const wrapper = mount(<MatchListItem item='Cat' guessObj={{ guess: '', setGuess: (a) => { guess = a } }} />);
    it('allows up to set props', () => {
        expect(wrapper.props().item).to.equal('Cat');
        expect(wrapper.props().guessObj).to.have.property('guess', '');
    });
    it('contains the text of the item', () => {
        expect(wrapper.text()).to.contain('Cat');
    });
})