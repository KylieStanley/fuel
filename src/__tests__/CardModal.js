import React from 'react'
import { shallow } from 'enzyme'
import CardModal from '../components/CardModal'

describe('Card', () => {
	let wrapper
	let mockRecipe

	beforeEach(() => {
		mockRecipe = {
			name: 'chicken pasta',
			url: 'chicken.com',
			dietLabel: ['Low Carb'],
			ingredients: ['chicken', 'beef']
		}

		wrapper = shallow(
			<CardModal recipe={mockRecipe} />
		)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render all the ingredients', () => {
		expect(wrapper.find('li').length).toEqual(2)
	})
})
