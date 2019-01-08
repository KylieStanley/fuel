import React from 'react'
import { shallow } from 'enzyme'
import { Search, mapDispatchToProps } from '../containers/Search'
import { fetchRecipes } from '../thunks/fetchRecipes'
import * as helper from '../helper'

jest.mock('../helper')
jest.mock('../thunks/fetchRecipes')

describe('Search', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search fetchRecipes={ jest.fn() }/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('simulates text change in input box',() => {
    const mockData = { target: {value: 'Chicken'}}
    const spy = jest.spyOn(wrapper.instance(), 'handleChange')
    wrapper.instance().forceUpdate();
    const input = wrapper.find('input');
    input.simulate('change', mockData);

    expect(spy).toHaveBeenCalled()
  });

  it('should call handleSubmit', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
    wrapper.instance().forceUpdate()
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    })
    expect(spy).toHaveBeenCalled()
  })

  it('should called set the state of filter on handleChange of a filter option', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit')
    const mockEvent = {
      preventDefault() {},
      target: { name: 'filter', value: 'high-protein' }
    }
    wrapper.instance().handleChange(mockEvent)
    expect(spy).toHaveBeenCalled()
  })

  it('should called cleanSearchString on handleSubmit', () => {
    const mockEvent = {
      preventDefault() {},
      target: { value: 'chicken' }
    }
    wrapper.instance().setState({ search: 'chicken' })
    wrapper.instance().handleSubmit(mockEvent)
    expect(helper.cleanSearchString).toHaveBeenCalled()
  })

  it('should called fetchRecipess on handleSubmit', () => {
    const mockEvent = {
      preventDefault() {},
      target: { value: 'chicken' }
    }
    wrapper.instance().setState({ search: 'chicken' })
    wrapper.instance().handleSubmit(mockEvent)
    expect(wrapper.instance().props.fetchRecipes).toHaveBeenCalled()
  })

  describe('mapDispatchToProps', () => {
    it('should called dispatch with the correct params', () => {
      const mockDispatch = jest.fn()
      const url = 'recipes.com'
      const actionToDispatch = fetchRecipes(url)
      const result = mapDispatchToProps(mockDispatch)

      result.fetchRecipes(url)
      
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})