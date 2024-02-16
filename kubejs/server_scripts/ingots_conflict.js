ServerEvents.recipes((event) => {
	// Replace all industrial_iron with cast iron
	event.replaceInput(
		{ input: "create_dd:industrial_iron_ingot" },
		"create_dd:industrial_iron_ingot",
		"#forge:ingots/cast_iron"
	);
	event.replaceInput(
		{ input: "create_dd:industrial_iron_nugget" },
		"create_dd:industrial_iron_nugget",
		"#forge:nuggets/cast_iron"
	);
	event.replaceInput(
		{ input: "create_dd:industrial_iron_sheet" },
		"create_dd:industrial_iron_sheet",
		"#forge:plates/cast_iron"
	);
	event.stonecutting("create_dd:industrial_iron_block", "#forge:storage_blocks/cast_iron");
	event.stonecutting("createdeco:cast_iron_block", "#forge:storage_blocks/cast_iron");

	// Replace all occurances of "factory must grow steel_block" with #steel_block
	event.replaceInput({ input: "tfmg:steel_block" }, "tfmg:steel_block", "#forge:storage_blocks/steel");
	event.replaceInput({ input: "tfmg:heavy_plate" }, "tfmg:heavy_plate", "#forge:plates/steel");
	// Fix Sequenced Assembly recipes (broken due to heavy_plate replace)
	event.recipes
		.createSequencedAssembly(
			[
				// this is the item that will appear in JEI as the result
				Item.of("tfmg:steel_mechanism").withChance(0.76),
				// the rest of these items will part of the scrap
				Item.of("#forge:plates/steel").withChance(0.08),
				Item.of("#forge:ingots/steel").withChance(0.08),
				Item.of("#forge:ingots/aluminum").withChance(0.05),
				Item.of("tfmg:industrial_pipe").withChance(0.03),
			],
			// the input
			"#forge:plates/steel",
			[
				event.recipes.createDeploying("tfmg:unprocessed_steel_mechanism", [
					"tfmg:unprocessed_steel_mechanism",
					"#forge:ingots/steel",
				]),
				event.recipes.createDeploying("tfmg:unprocessed_steel_mechanism", [
					"tfmg:unprocessed_steel_mechanism",
					"#forge:ingots/aluminum",
				]),
				event.recipes.createDeploying("tfmg:unprocessed_steel_mechanism", [
					"tfmg:unprocessed_steel_mechanism",
					"tfmg:screw",
				]),
				event.recipes.createDeploying("tfmg:unprocessed_steel_mechanism", [
					"tfmg:unprocessed_steel_mechanism",
					"tfmg:screwdriver",
				]),
			]
		)
		.transitionalItem("tfmg:unprocessed_steel_mechanism")
		.loops(3);

	event.remove({ output: "tfmg:diesel_engine" });
	event.recipes
		.createSequencedAssembly([Item.of("tfmg:diesel_engine")], "tfmg:heavy_machinery_casing", [
			event.recipes.createDeploying("tfmg:heavy_machinery_casing", [
				"tfmg:heavy_machinery_casing",
				"#forge:ingots/aluminum",
			]),
			event.recipes.createDeploying("tfmg:heavy_machinery_casing", [
				"tfmg:heavy_machinery_casing",
				"#forge:plates/steel",
			]),
			event.recipes.createDeploying("tfmg:heavy_machinery_casing", ["tfmg:heavy_machinery_casing", "tfmg:screw"]),
			event.recipes.createDeploying("tfmg:heavy_machinery_casing", [
				"tfmg:heavy_machinery_casing",
				"tfmg:screwdriver",
			]),
			event.recipes.create.filling("tfmg:heavy_machinery_casing", [
				Fluid.of("tfmg:lubrication_oil", 1000),
				"tfmg:heavy_machinery_casing",
			]),
			event.recipes.createDeploying("tfmg:heavy_machinery_casing", [
				"tfmg:heavy_machinery_casing",
				"tfmg:steel_mechanism",
			]),
		])
		.transitionalItem("tfmg:heavy_machinery_casing")
		.loops(8);
});

// Fix Steel/Bronze/Cast Iron Conflicts
ServerEvents.tags("item", (event) => {
	// Create Dreams & Desires: Bronze
	event.add("forge:ingots/bronze", "create_dd:bronze_ingot");

	// Create: The Factory Must Grow
	event.remove("forge:ingots/steel", "tfmg:steel_ingot");
	event.remove("forge:ingots/cast_iron", "tfmg:cast_iron_ingot");
	event.remove("forge:blocks/cast_iron", "tfmg:cast_iron_block");
	event.add("forge:storage_blocks/steel", "tfmg:steel_block");

	// Create Dreams & Desires: Industrial Iron
	event.remove("forge:storage_blocks/industrial_iron", "create_dd:industrial_iron_block");
	event.add("forge:storage_blocks/cast_iron", "create_dd:industrial_iron_block");
});
