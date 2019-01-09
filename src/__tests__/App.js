import React from 'react'
import { List } from '../components/List'
import Main  from '../containers/Main'
import ErrorPage  from '../components/ErrorPage'
import { App, mapStateToProps }  from '../containers/App'
import Splash from '../components/Splash'
import { shallow, mount } from 'enzyme'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { ModalContainer, ModalRoute } from 'react-router-modal';


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
		expect(wrapper.find(Route).length).toEqual(5)
	})

	it('should render a ModalRoute route', () => {
		expect(wrapper.find(ModalRoute).length).toEqual(1)
	})

	it('should render a ModalContainer route', () => {
		expect(wrapper.find(ModalContainer).length).toEqual(1)
	})

	describe('routes', () => {
		let mockStore
		let mockRecipe
		let mockRecipes

		beforeEach(() => {
			mockRecipe = {name: 'chicken', source: 'Good Eats'}
			mockRecipes = [mockRecipe]
			mockStore = { getState: jest.fn(), subscribe: jest.fn(), recipes: mockRecipes, selectedCard: mockRecipe, favorites: mockRecipes, dispatch: jest.fn() } 
		})

		it('routes /favorites to the List component', () => {
			const wrapper = mount(
				<Provider store={mockStore}>
					<MemoryRouter initialEntries={['/favorites']}>
						<App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }} />
					</MemoryRouter>
				</Provider>
			)
			expect(wrapper.find(List).length).toEqual(1)
		})

		it('routes /shopping to the List component', () => {
			const wrapper = mount(
				<Provider store={mockStore}>
					<MemoryRouter initialEntries={['/shopping']}>
						<App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }} />
					</MemoryRouter>
				</Provider>
			)
			expect(wrapper.find(List).length).toEqual(1)
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

		it('routes /error to the ErrorPage component', () => {
			const wrapper = mount(
				<Provider store={mockStore}>
					<MemoryRouter initialEntries={['/error']}>
						<App selectedCard={ mockRecipe } history={{ goBack: jest.fn() }}/>
					</MemoryRouter>
				</Provider>
			)
			expect(wrapper.find(ErrorPage).length).toEqual(1)
		})
	})

	describe('mapStateToProps', () => {
		it('should return a state with a card selected', () => {
			const mockState = {
				selectedCard: { name: 'chicken' },
				recipes: [{ name: 'salmon'}]
			}
			const expected = { selectedCard: mockState.selectedCard }
			const result = mapStateToProps(mockState)
			expect(result).toEqual(expected)
		})
	})
})
