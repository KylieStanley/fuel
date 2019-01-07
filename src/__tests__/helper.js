import {cleanRecipes, cleanSearchString } from '../helper'


describe('cleanRecipes', () => {
	it('should take in an array of recipes and return a cleaned array', () => {
		const mockRecipes = [{
			recipe: {
			label: 'chicken',
			yield: 4,
			calories: 100,
			dietLabels: 'Low Carb',
			url: 'chicken.com',
			image: 'chicken.jpg'
		}}]

		const expected = [{
			name: 'chicken',
			yield: 4,
			calories: 25,
			dietLabel: 'Low Carb',
			url: 'chicken.com',
			image: 'chicken.jpg'
		}]

		let result = cleanRecipes(mockRecipes)

		expect(result).toEqual(expected)
	})
})

describe('cleanSearchString', () => {
	it('should take in a string and return a modified string', () => {
		let result = cleanSearchString('Chicken Pasta')
		let expected = 'Chicken%20Pasta'
		expect(result).toEqual(expected)
	})
})