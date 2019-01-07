import React from 'react'
import { Home } from '../Home'
import Main  from '../containers/Main'
import { App }  from '../containers/App'
import Splash from '../components/Splash'
import { shallow, mount } from 'enzyme'
import { Route, component, render } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ModalContainer, ModalRoute } from 'react-router-modal';
import { CardModal } from '../components/CardModal'


jest.mock('../containers/CardContainer')
jest.mock('../containers/Main',() => () => <div />)


describe('App', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<App selectedCard={{name: 'chicken', source: 'Good Eats'}} history={{ goBack: jest.fn() }} />)
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render four possible routes', () => {
    expect(wrapper.find(Route).length).toEqual(4)
  })

  it('should render four possible routes', () => {
    expect(wrapper.find(ModalRoute).length).toEqual(1)
  })

  it('should render four possible routes', () => {
    expect(wrapper.find(ModalContainer).length).toEqual(1)
  })

  describe('routes', () => {
    let mockStore
    let mockRecipe
    let mockRecipes
    let mockFavorites

    beforeEach(() => {
      mockRecipe = {name: 'chicken', source: 'Good Eats'}
      mockRecipes = [mockRecipe]
      mockFavorites = [{ name: 'chicken' }]
      mockStore = { getState: jest.fn(), subscribe: jest.fn(), recipes: mockRecipes, selectedCard: mockRecipe, favorites: mockRecipes, dispatch: jest.fn() } 
    })

    it('routes /favorites to the Home component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/favorites']}>
            <App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }} />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Home).length).toEqual(1)
    })

    it('routes /shopping to the Home component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/shopping']}>
            <App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }} />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Home).length).toEqual(1)
    })

    it('routes /main to the Main component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/main']}>
            <App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }} />
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Main).length).toEqual(1)
    })

    it('routes / to the Splash component', () => {
      const wrapper = mount(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={['/']}>
            <App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }}/>
          </MemoryRouter>
        </Provider>
      )
      expect(wrapper.find(Splash).length).toEqual(1)
    })
  })
})
