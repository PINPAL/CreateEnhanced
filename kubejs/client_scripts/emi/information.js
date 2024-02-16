JEIEvents.information((event) => {
	const itemsToDescriptionate = [
		{
			id: "tfmg:concrete",
			desc: ["Concrete is made when it dries out in the world after being placed using a bucket."],
		},
		{
			id: "tfmg:oil_deposit",
			desc: ["Rarely spawns at bedrock at the bottom of the world."],
		},
		{
			id: "minecraft:granite",
			desc: ["Spawns in massive veins underground in Mountain and Hill biomes."],
		},
		{
			id: "minecraft:diorite",
			desc: ["Spawns in massive veins underground in Savanna, Jungle and Mushroom biomes."],
		},
		{
			id: "minecraft:andesite",
			desc: ["Spawns in massive veins underground in Forest biomes."],
		},
		{
			id: "supplementaries:ash",
			desc: ["Spawns in veins around the nether, most commonly in Basalt Deltas."],
		},
	].forEach((item) => event.addItem(item.id, item.desc));

	const undergroundStoneTypes = [
		"minecraft:tuff",
		"tfmg:bauxite",
		"create:crimsite",
		"create:limestone",
		"create:asurine",
		"create:ochrum",
		"create:veridium",
		"create_dd:potassic",
		"create_dd:gabbro",
	].forEach((item) => event.addItem(item, ["Spawns in veins underground."]));

	const netherStoneTypes = ["create:scoria", "create:scorchia", "tfmg:sulfur"].forEach((item) =>
		event.addItem(item, ["Spawns in veins around The Nether."])
	);
});
