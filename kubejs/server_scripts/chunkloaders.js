ServerEvents.recipes((event) => {
	// Chunkloader
	event.shaped(Item.of("create_power_loader:andesite_chunk_loader"), [" N ", "NVN", " N "], {
		N: "createdeco:netherite_sheet",
		V: "create_things_and_misc:vibration_mechanism",
	});

	// Contraption Chunkloader
	event.shaped(Item.of("create_power_loader:brass_chunk_loader"), ["GBG", "BCB", "GBG"], {
		G: "#forge:glass",
		B: "create:brass_sheet",
		C: "chunkloaders:ultimate_chunk_loader",
	});
});
