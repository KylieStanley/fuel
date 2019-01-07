export const cleanRecipes = (recipes) => {
	return recipes.map(currentItem => ({
		name: currentItem.recipe.label,
		yield: currentItem.recipe.yield,
		calories: Math.round(currentItem.recipe.calories / currentItem.recipe.yield),
		dietLabel: currentItem.recipe.dietLabels,
		url: currentItem.recipe.url,
		image: currentItem.recipe.image,
		source: currentItem.recipe.source
	}))
}

export const cleanSearchString = (string) => {
	return string.replace(' ', '%20')
}