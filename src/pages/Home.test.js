import React from 'react'
import Home from './Home'
import { shallow } from 'enzyme'


window.fetch = jest.fn()
    .mockImplementationOnce(() => ({
        status: 200,
        json: () => new Promise((resolve, reject) => {
            resolve({
                token: 'asdasd'
            })
        })
    }))
    .mockImplementationOnce(() => ({
        status: 500,
    }))

describe('Home Page Testing', () => {

    it('componentDidMount test token and list get', async () => {

        /*await mockAxios.get.mockImplementation(() => Promise.resolve({
            data: {
                token: 'asdasdasd'
            }
        }))*/


        const renderedComponent = await shallow(<Home/>)
        // const token = await renderedComponent.instance().getToken();
        // await renderedComponent.update()
        console.log(renderedComponent.debug())
        // console.log('token = ' + token)
        //expect(renderedComponent.state('contentList').length).toBeGreaterThan(1)
    })
})