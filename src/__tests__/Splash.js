import React from 'react'
import { shallow } from 'enzyme'
import Splash from '../components/Splash'

describe('Splash', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Splash />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
