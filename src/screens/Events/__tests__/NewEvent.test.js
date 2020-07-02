import React from 'react';
import {shallow} from 'enzyme';
import NewEvent from '../NewEvent';

describe('NewEvent', () => {
    it('should render correctly',()=>{
        const wrapper=shallow(<NewEvent/>);
        expect(wrapper).toBeTruthy();
        expect(wrapper).toMatchSnapshot();

    })
})
