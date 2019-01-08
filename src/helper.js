export const cleanRecipes = (recipes) => {
	return recipes.map(currentRecipe => ({
		name: currentRecipe.recipe.label,
		yield: currentRecipe.recipe.yield,
		calories: Math.round(currentRecipe.recipe.calories / currentRecipe.recipe.yield),
		dietLabel: currentRecipe.recipe.dietLabels,
		url: currentRecipe.recipe.url,
		image: currentRecipe.recipe.image,
		source: currentRecipe.recipe.source,
		ingredients: currentRecipe.recipe.ingredientLines
	}))
}

export const cleanSearchString = (string) => {
	return string.replace(' ', '%20')
}