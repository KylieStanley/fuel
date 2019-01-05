import React from 'react'
import { shallow } from 'enzyme'
import Card from '../Card'

describe('Card', () => {
  let wrapper
  let mockRecipe

  beforeEach(() => {
  	mockRecipe = {name: 'chicken pasta', url: 'chicken.jpg'}
    wrapper = shallow(
    	<Card 
    		recipe={mockRecipe}
    	/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
