import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from './App';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';


describe('see if all the routes are working', () => {
    it('go to the creatures component when unicorns is called', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries= {['/unicorns']}>
                <App />
            </MemoryRouter>
        );
        console.log(wrapper)
        expect(wrapper.find(Creatures)).toHaveLength(1)
        expect(wrapper.find(CreatureDetails)).toHaveLength(0)
    })

    it('go to the creatures component when sharks is called', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries= {['/sharks']}>
                <App />
            </MemoryRouter>
        );
        console.log(wrapper)
        expect(wrapper.find(Creatures)).toHaveLength(1)
        expect(wrapper.find(CreatureDetails)).toHaveLength(0)
    })

    it('go to the creatures component when puppies is called', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries= {['/puppies']}>
                <App />
            </MemoryRouter>
        );
        console.log(wrapper)
        expect(wrapper.find(Creatures)).toHaveLength(1)
        expect(wrapper.find(CreatureDetails)).toHaveLength(0)
    })

    it('go to the creatures details component when an specific unnicorn is called', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries= {['/puppies/1']}>
                <App />
            </MemoryRouter>
        );
        console.log(wrapper)
        expect(wrapper.find(Creatures)).toHaveLength(0)
        expect(wrapper.find(CreatureDetails)).toHaveLength(1)
    })
})