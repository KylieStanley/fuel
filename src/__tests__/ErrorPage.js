import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from '../components/ErrorPage'


describe('ErrorPage', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<ErrorPage />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
})