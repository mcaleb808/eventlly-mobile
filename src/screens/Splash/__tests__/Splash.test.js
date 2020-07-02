import React from 'react';
import {shallow} from 'enzyme';
import SplashScreen from '../SplashScreen';

describe('SplashScreen', () => {
    it('should render correctly',()=>{
        const wrapper=shallow(<SplashScreen navigation={{navigate:jest.fn()}}/>);
        expect(wrapper).toBeTruthy();
        expect(wrapper).toMatchSnapshot();

    })
})
