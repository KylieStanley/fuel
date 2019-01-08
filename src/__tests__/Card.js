import React from 'react'
import { shallow } from 'enzyme'
import { Card, mapStateToProps, mapDispatchToProps } from '../containers/Card'
import { addFavorite, removeFavorite, selectCard } from '../actions'


describe('Card', () => {
  let wrapper
  let mockRecipe
  let mockFavorites

  beforeEach(() => {
    mockRecipe = {name: 'chicken pasta', url: 'chicken.com', dietLabel: ['Low Carb'] }
  	mockFavorites = [{name: 'chicken pasta', url: 'chicken.com'}, 
      {name: 'salmon steak', url: 'fish.jpg'}]
    wrapper = shallow(
    	<Card 
    		recipe={ mockRecipe }
        favorites={ mockFavorites }
        addFavorite={ jest.fn() }
        removeFavorite={ jest.fn() }
        selectCard={ jest.fn() }
        match={ {url: '/'} }
    	/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should run toggle favorite on click of the heart', () => {
    const spy = jest.spyOn(wrapper.instance(), 'toggleFavorite')
    wrapper.instance().forceUpdate()
    wrapper.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  })

  it('should call removeFavorite if there is a match', () => {
    wrapper.instance().toggleFavorite()

    expect(wrapper.instance().props.removeFavorite).toHaveBeenCalledWith(mockRecipe);
  })

   it('should call addFavorite if there is no match', () => {
    mockRecipe = {name: 'chicken pasta', url: 'salmon.com', dietLabel: ['Low Carb']}
    wrapper = shallow(
      <Card 
        recipe={ mockRecipe }
        favorites={ mockFavorites }
        addFavorite={ jest.fn() }
        removeFavorite={ jest.fn() }
        selectCard={ jest.fn() }
        match={ {url: '/'} }
      />)

    wrapper.instance().toggleFavorite()

    expect(wrapper.instance().props.addFavorite).toHaveBeenCalledWith(mockRecipe);
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

    it('should call dispatch with the correct params for selectCard', () => {
      const actionToDispatch = selectCard(mockRecipe)
      const result = mapDispatchToProps(mockDispatch)
      result.selectCard(mockRecipe)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
