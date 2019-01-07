import React from 'react'
import { shallow } from 'enzyme'
import { Search } from '../containers/Search'

describe('Search', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Search />)
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
})
