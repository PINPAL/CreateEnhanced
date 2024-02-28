const unifiedIngots = [
	"steel",
	"industrial_iron",
	"zinc",
	"brass",
	"copper",
	"netherite",
	"iron",
	"gold",
	"aluminum",
	"bronze",
	"tin",
];

StartupEvents.registry("item", (event) => {
	unifiedIngots.forEach((ingot) => {
		event.create("create_complete_collection:" + ingot + "_ingot").displayName(formatName(ingot) + " Ingot");
		event.create("create_complete_collection:" + ingot + "_nugget").displayName(formatName(ingot) + " Nugget");
		event.create("create_complete_collection:" + ingot + "_sheet").displayName(formatName(ingot) + " Sheet");
	});

	// Andesite Alloy
	event.create("create_complete_collection:andesite_ingot").displayName("Andesite Alloy");
	event.create("create_complete_collection:andesite_nugget").displayName("Andesite Alloy Nugget");
	event.create("create_complete_collection:andesite_sheet").displayName("Andesite Alloy Sheet");
});

StartupEvents.registry("block", (event) => {
	unifiedIngots.forEach((ingot) => {
		event
			.create("create_complete_collection:" + ingot + "_block")
			.displayName(formatName(ingot) + " Block")
			.hardness(50)
			.tagBlock("minecraft:mineable/pickaxe")
			.mapColor("metal")
			.soundType("metal");
	});

	// Andesite Alloy
	event
		.create("create_complete_collection:andesite_block")
		.displayName("Andesite Alloy Block")
		.hardness(50)
		.tagBlock("minecraft:mineable/pickaxe")
		.mapColor("metal")
		.soundType("metal");
});
