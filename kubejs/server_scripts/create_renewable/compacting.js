ServerEvents.recipes((event) => {
	event.recipes.create
		.compacting("minecraft:tuff", [
			Fluid.of("minecraft:lava", 1000),
			"create:scoria",
			"minecraft:cobbled_deepslate",
		])
		.id("compacting/tuff");

	event.recipes.create
		.compacting("minecraft:prismarine_bricks", ["2x minecraft:prismarine"])
		.id("compacting/prismarine_bricks");

	event.recipes.create
		.compacting("minecraft:deepslate", ["4x minecraft:cobblestone", Fluid.of("minecraft:lava", 2000)])
		.heated()
		.id("compacting/deepslate");

	event.recipes.create
		.compacting("create:veridium", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "create:limestone"])
		.id("compacting/veridium");

	event.recipes.create
		.compacting("create:ochrum", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:granite"])
		.id("compacting/ochrum");

	event.recipes.create
		.compacting("create:crimsite", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:diorite"])
		.id("compacting/crimsite");

	event.recipes.create
		.compacting("create:asurine", [Fluid.of("minecraft:lava", 1000), "2x minecraft:tuff", "minecraft:andesite"])
		.id("compacting/asurine");
});
