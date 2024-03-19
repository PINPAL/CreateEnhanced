ServerEvents.recipes((event) => {
	// Cheap Create Design n' Decor Lamps
	const designDecoLamps = ["copper", "zinc", "brass"];
	designDecoLamps.forEach((designDecoLamp) => {
		event.remove({ output: `design_decor:${designDecoLamp}_lamp` });
		event.shaped(`4x design_decor:${designDecoLamp}_lamp`, [" M ", "MGM", " M "], {
			M: "#forge:nuggets/" + designDecoLamp,
			G: "minecraft:glowstone_dust",
		});
	});
	// Cheap Cast Iron
	event.recipes.create.compacting("createdeco:cast_iron_ingot", "minecraft:iron_ingot");
	// Cheap Asphalt
	event.replaceOutput({ input: "create_dd:asphalt_block" }, "create_dd:asphalt_block", "16x create_dd:asphalt_block");
	event.recipes.create.mixing("16x create_dd:asphalt_block", ["2x create:scoria", "minecraft:slime_ball"]).heated();
	// Cheaper Everything else
	const lampColors = ["yellow", "red", "green", "blue"];
	const decorativeMats = [
		{
			outputMat: "andesite",
			bars: "createdeco:andesite_bars",
		},
		{
			outputMat: "brass",
			bars: "createdeco:brass_bars",
		},
		{
			outputMat: "industrial_iron",
			bars: "createdeco:industrial_iron_bars",
		},
		{
			outputMat: "iron",
			bars: "minecraft:iron_bars",
		},
		{
			outputMat: "copper",
			bars: "createdeco:copper_bars",
		},
		{
			outputMat: "zinc",
			bars: "createdeco:zinc_bars",
		},
	].forEach((decorativeMat) => {
		// Catwalk
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_catwalk",
		});
		event
			.shaped(Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk", 24), [" S ", "SBS", " S "], {
				S: `#forge:plates/${decorativeMat.outputMat}`,
				B: decorativeMat.bars,
			})
			.id("create_complete_collection:crafting/" + decorativeMat.outputMat + "_catwalk");

		// Catwalk Stairs
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_catwalk_stairs",
		});
		event
			.shaped(Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk_stairs", 3), [" S ", "SB "], {
				S: `#forge:plates/${decorativeMat.outputMat}`,
				B: decorativeMat.bars,
			})
			.id("create_complete_collection:crafting/" + decorativeMat.outputMat + "_catwalk_stairs");

		// Catwalk Railing
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_catwalk_railing",
		});
		event
			.shaped(Item.of("createdeco:" + decorativeMat.outputMat + "_catwalk_railing", 24), ["SSS", "B B", "B B"], {
				S: `#forge:plates/${decorativeMat.outputMat}`,
				B: decorativeMat.bars,
			})
			.id("create_complete_collection:crafting/" + decorativeMat.outputMat + "_catwalk_railing");

		// Sheet Metal
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_sheet_metal",
		});
		event
			.stonecutting(
				Item.of("createdeco:" + decorativeMat.outputMat + "_sheet_metal", 12),
				`#forge:plates/${decorativeMat.outputMat}`
			)
			.id("create_complete_collection:stonecutting/" + decorativeMat.outputMat + "_sheet_metal");

		// Ladder
		// event.remove({
		// 	output:
		// 		(decorativeMat.hasNativeLadder ? "create" : "createdeco") + ":" + decorativeMat.outputMat + "_ladder",
		// });
		// event
		// 	.shaped(
		// 		Item.of(
		// 			(decorativeMat.hasNativeLadder ? "create" : "createdeco") +
		// 				":" +
		// 				decorativeMat.outputMat +
		// 				"_ladder",
		// 			16
		// 		),
		// 		[" N ", " L ", " N "],
		// 		{
		// 			N: `#forge:nuggets/${decorativeMat.outputMat}`,
		// 			L: "#quark:ladders",
		// 		}
		// 	)
		// 	.id("create_complete_collection:crafting/" + decorativeMat.outputMat + "_ladder");

		// Support
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_support",
		});
		event
			.shaped(Item.of("createdeco:" + decorativeMat.outputMat + "_support", 24), [" B ", "B B", " B "], {
				B: decorativeMat.bars,
			})
			.id("create_complete_collection:crafting/" + decorativeMat.outputMat + "_support");

		// Hull
		event.remove({
			output: "createdeco:" + decorativeMat.outputMat + "_hull",
		});
		event
			.stonecutting(
				Item.of("createdeco:" + decorativeMat.outputMat + "_hull", 16),
				`#forge:plates/${decorativeMat.outputMat}`
			)
			.id("create_complete_collection:stonecutting/" + decorativeMat.outputMat + "_hull");

		// Lamp
		lampColors.forEach((lampColor) => {
			event.remove({
				output: "createdeco:" + lampColor + "_" + decorativeMat.outputMat + "_lamp",
			});
			event
				.shaped(
					Item.of("createdeco:" + lampColor + "_" + decorativeMat.outputMat + "_lamp", 8),
					[" N ", " L ", "DS "],
					{
						S: `#forge:plates/${decorativeMat.outputMat}`,
						L: "minecraft:lantern",
						N: `#forge:nuggets/${decorativeMat.outputMat}`,
						D: "minecraft:" + lampColor + "_dye",
					}
				)
				.id("create_complete_collection:crafting/" + lampColor + "_" + decorativeMat.outputMat + "_lamp");
		});
	});
});
