ServerEvents.recipes((event) => {
	const unpackingRecipes = [
		{
			input: "createdeco:andesite_trapdoor",
			output: "create:andesite_alloy",
			count: 4,
		},
		{
			input: "createdeco:brass_trapdoor",
			output: "create:brass_ingot",
			count: 4,
		},
		{
			input: "createdeco:cast_iron_trapdoor",
			output: "createdeco:cast_iron_ingot",
			count: 4,
		},
		{
			input: "createdeco:copper_trapdoor",
			output: "create:copper_ingot",
			count: 4,
		},
		{
			input: "createdeco:zinc_trapdoor",
			output: "create:zinc_ingot",
			count: 4,
		},
		{
			input: "supplementaries:gold_trapdoor",
			output: "minecraft:gold_ingot",
			count: 4,
		},
	];

	unpackingRecipes.forEach((recipe) => {
		event.recipes.create
			.crushing(`${recipe.count}x ${recipe.output}`, recipe.input)
			.id(`kubejs:unpacking/${recipe.input.replace(":", "/")}`);
	});
});
