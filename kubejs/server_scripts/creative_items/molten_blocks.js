const metals = [
	{ name: "iron" },
	{ name: "copper" },
	{ name: "gold" },
	{ name: "zinc" },
	{ name: "brass" },
	{ name: "tin" },
	{ name: "bronze" },
	{ name: "steel" },
	{ name: "cast_iron" },
	{ name: "diamond" },
	{ name: "emerald" },
	{ name: "powdered_obsidian" },
	{ name: "redstone" },
];

ServerEvents.recipes((event) => {
	metals.forEach((metal) => {
		// iron block -> molten iron fluid
		event.recipes
			.melterMelting(Fluid.of("kubejs:molten_" + metal.name, 10), `#forge:storage_blocks/${metal.name}`)
			.processingTime(200)
			.minimumHeat(16);

		// molten iron fluid -> molten iron ingot
		event.custom({
			type: "create_dd:freezing",
			ingredients: [
				{
					item: `kubejs:molten_${metal.name}_bucket`,
				},
			],
			results: [
				{
					item: `kubejs:molten_${metal.name}_ingot`,
					count: 1,
				},
				{
					item: "minecraft:bucket",
					count: 1,
				},
			],
		});

		// molten iron ingot -> molten iron block
		event.recipes.create
			.compacting(Item.of(`kubejs:molten_${metal.name}_block`), Item.of(`11x kubejs:molten_${metal.name}_ingot`))
			.superheated();
	});

	event.recipes.create.mechanical_crafting(
		"kubejs:metal_alloy_block",
		["  a  ", " 123 ", "b456c", " 789 ", "  d  "],
		{
			1: "kubejs:molten_iron_block",
			2: "kubejs:molten_copper_block",
			3: "kubejs:molten_gold_block",
			4: "kubejs:molten_zinc_block",
			5: "kubejs:molten_brass_block",
			6: "kubejs:molten_tin_block",
			7: "kubejs:molten_bronze_block",
			8: "kubejs:molten_steel_block",
			9: "kubejs:molten_cast_iron_block",
			a: "kubejs:molten_diamond_block",
			b: "kubejs:molten_emerald_block",
			c: "kubejs:molten_powdered_obsidian_block",
			d: "kubejs:molten_redstone_block",
		}
	);
});
