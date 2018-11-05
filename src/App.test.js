import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Home from './pages/Home'
import ContentDetails from './pages/ContentDetails'

import App from './App'

describe('Router testing', () => {

    it('Only Home page loaded', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(ContentDetails).exists()).toBe(false);
    })

    it('Only Content Detail page loaded', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/contentDetails/74asd12' ]}>
                <App/>
            </MemoryRouter>
        );
        expect(wrapper.find(Home).exists()).toBe(false);
        expect(wrapper.find(ContentDetails)).toHaveLength(1);
    })
})