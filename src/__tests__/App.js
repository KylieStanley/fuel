import React from 'react'
import { Home } from '../Home'
import  Main  from '../containers/Main'
import App from '../App'
import Splash from '../Splash'
import { shallow, mount } from 'enzyme'
import { Route, component, render } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'


jest.mock('../containers/CardContainer')
jest.mock('../containers/Main',() => () => <div />)


describe('App', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render four possible routes', () => {
    expect(wrapper.find(Route).length).toEqual(4)
  })

  describe('routes', () => {
    let mockStore
    let mockRecipes
    let mockFavorites

    beforeEach(() => {
      mockRecipes = [{ name: 'chicken' }, { name: 'salmon' }]
      mockFavorites = [{ name: 'chicken' }]
      mockStore = {getState: jest.fn(), subscribe: jest.fn(), recipes: mockRecipes, favorites: mockRecipes, dispatch: jest.fn()} 
    })

    it('routes /favorites to the Home component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/favorites']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Home).length).toEqual(1)
    })

    it('routes /shopping to the Home component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/shopping']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Home).length).toEqual(1)
    })

    it('routes /main to the Main component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/main']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Main).length).toEqual(1)
    })

    it('routes / to the Splash component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Splash).length).toEqual(1)
    })
  })
})
