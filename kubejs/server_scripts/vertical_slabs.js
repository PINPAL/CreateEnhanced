var vertical_slabs = [];

// Fetch all vertical slabs from v_slab_compat
ServerEvents.tags("item", (event) => {
	let v_slabs = event.get("v_slab_compat:vertical_slabs").getObjectIds();
	v_slabs.forEach((slab) => {
		vertical_slabs.push(Item.of(slab));
	});
});

ServerEvents.recipes((event) => {
	// Handle Quark Slabs
	event
		.findRecipes({
			type: "minecraft:crafting_shaped",
			output: /quark:.*vertical_slab/,
		})
		.forEach((recipe) => {
			let outputSlab = recipe.getOriginalRecipeResult().getId();
			let inputSlab = recipe.getOriginalRecipeIngredients();
			event.shapeless(outputSlab, inputSlab[0].getItemIds()[0].toString());
		});

	// Handle v_slab_compat
	vertical_slabs.forEach((item) => {
		event.shapeless(
			item,
			item.getId().replace("v_slab_compat:", "").replace("_vertical_slab", "_slab").replace("/", ":")
		);
	});
});
