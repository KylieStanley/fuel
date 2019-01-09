import React from 'react'
import { shallow } from 'enzyme'
import List from '../components/List'

describe('List', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(
			<List />
		)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})
})
