import React from 'react'
import { shallow } from 'enzyme'
import { Card, mapStateToProps, mapDispatchToProps } from '../containers/Card'
import { addFavorite, removeFavorite } from '../actions'

describe('Card', () => {
  let wrapper
  let mockRecipe
  let mockFavorites
  let mockFunc

  beforeEach(() => {
    mockFunc = jest.fn()
    mockRecipe = {name: 'chicken pasta', url: 'chicken.jpg'}
  	mockFavorites = [{name: 'chicken pasta', url: 'chicken.jpg'}, 
      {name: 'salmon steak', url: 'fish.jpg'}]
    wrapper = shallow(
    	<Card 
    		recipe={ mockRecipe }
        favorites={ mockFavorites }
        addFavorite={ jest.fn() }
        removeFavorite={ jest.fn() }
        onClick={ mockFunc }
    	/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should run toggle favorite on click of the heart', () => {
    wrapper.find('button').simulate('click');
    wrapper.instance().forceUpdate()
    expect(mockFunc).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should return an array of favorites', () => {
      const mockState = {
        recipes: { name: 'chicken' },
        favorites: { name: 'salmon'},
      }
      const expected = { favorites: mockState.favorites }
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch

    beforeEach(() => {
      mockDispatch = jest.fn()
    })

    it('should call dispatch with the correct params for addFavorite', () => {
      const actionToDispatch = addFavorite(mockRecipe)
      const result = mapDispatchToProps(mockDispatch)
      result.addFavorite(mockRecipe)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('should call dispatch with the correct params for removeFavorite', () => {
      const actionToDispatch = removeFavorite(mockRecipe)
      const result = mapDispatchToProps(mockDispatch)
      result.removeFavorite(mockRecipe)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
