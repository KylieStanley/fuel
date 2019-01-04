const cleanRecipes = (recipes) => {
	return recipes.map(currentItem => ({
		bookmark: currentItem.bookmark,
		name: currentItem.recipe.label,
		yield: currentItem.recipe.yield,
		calories: currentItem.recipe.calories / currentItem.recipe.yield,
		recipe: currentItem.recipe.label
	}))
}

export default cleanRecipes