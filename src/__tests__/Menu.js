import React from 'react'
import { shallow } from 'enzyme'
import { Menu } from '../Menu'


describe('Menu', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
    	<Menu />)
  })

  it('should match the snapshot', () => {
  	expect(wrapper).toMatchSnapshot()
  })

  it('should change the state of expanded if toggled', () => {
  	wrapper.setState({ expanded: false })
  	wrapper.instance().toggleMenu()
    
  	expect(wrapper.instance().state.expanded).toEqual(true)
  })

  it('should have a class of menu toggled if expanded', () => {
  	wrapper.setState({ expanded: false })

  	expect(wrapper.find('div').at(0).hasClass('toggled')).toEqual(false)
  })

  it('should have a class of only menu if closed', () => {
  	wrapper.setState({ expanded: true })

  	expect(wrapper.find('div').at(0).hasClass('toggled')).toEqual(true)
  })

  it('should toggle the state when clicked', () => {
  	const spy = jest.spyOn(wrapper.instance(), 'toggleMenu')
    wrapper.instance().forceUpdate()
    wrapper.find('.menu').simulate('click');

    expect(spy).toHaveBeenCalled();
  })

})
