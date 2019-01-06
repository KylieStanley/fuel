const cleanRecipes = (recipes) => {
	return recipes.map(currentItem => ({
		name: currentItem.recipe.label,
		yield: currentItem.recipe.yield,
		calories: (currentItem.recipe.calories / currentItem.recipe.yield),
		dietLabel: currentItem.recipe.dietLabels,
		url: currentItem.recipe.url,
		image: currentItem.recipe.image
	}))
}

export default cleanRecipes

