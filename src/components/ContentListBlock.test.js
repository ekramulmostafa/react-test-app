import React from 'react'
import { mount } from 'enzyme'
import ContentListBlock from './ContentListBlock'

const props = { bongoId: '12312123asd', contentName: 'name of the content' };

describe('Content List Block', () => {
    let wrapper = mount(<ContentListBlock {...props} />)

    it('Content block test', () => {
        console.log(wrapper.debug());


    })
})