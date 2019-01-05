import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import { Route, component } from 'react-router-dom'

describe('CardContainer', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render three possible routes', () => {
    expect(wrapper.find(Route).length).toEqual(3)
  })

  it('routes / to the Splash component', () => {
    expect(wrapper.find('Route[exact=true][path="/"]').first().prop('render')).toEqual(component)
  })

  it('routes / to the Main component', () => {
    expect(wrapper.find('Route[exact=true][path="/main"]').first().prop('render')).toEqual(component)
  })

  it('routes / to the Home component', () => {
    expect(wrapper.find('Route[exact=true][path="/home"]').first().prop('render')).toEqual(component)
  })
})