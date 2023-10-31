ServerEvents.recipes((event) => {
	// Vertical Redstone (Cog Block)
	event.shaped(
		Item.of("supplementaries:cog_block", 8), // arg 1: output
		[" C ", "BRB", " C "],
		{
			B: "createdeco:brass_bars",
			C: "create:brass_casing",
			R: "minecraft:redstone",
		}
	);

	// Bones into Ash
	event.smelting("3x supplementaries:ash", "minecraft:bone");
	event.smelting("supplementaries:ash", "minecraft:rotten_flesh");
});
