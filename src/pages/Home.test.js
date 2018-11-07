import React from 'react'
import Home from './Home_new'
import { shallow } from 'enzyme'

jest.mock('../api/api')



describe('Home test new', () => {
    it('componentDidMount', async () => {
        const renderedComponent = await shallow(<Home/>)
        await renderedComponent.update()
        console.log(JSON.stringify(renderedComponent.state('token'), null ,2))
        // expect(renderedComponent.state('token').length).toBeGreaterThan(1)
    })
})