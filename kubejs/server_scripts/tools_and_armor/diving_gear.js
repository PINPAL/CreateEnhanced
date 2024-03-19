ServerEvents.recipes((event) => {
	event.shaped("create:copper_diving_helmet", ["CCC", "CGC", " B "], {
		C: "#forge:ingots/copper",
		G: "#forge:glass",
		B: "kubejs:copper_helmet",
	});

	event.shaped("create:copper_diving_boots", ["CBC", "C C", "A A"], {
		C: "#forge:ingots/copper",
		A: "create:andesite_alloy",
		B: "kubejs:copper_boots",
	});

	event.shaped("create:copper_backtank", ["ASA", "CBC", " C "], {
		A: "create:andesite_alloy",
		S: "create:shaft",
		C: "#forge:ingots/copper",
		B: "kubejs:copper_chestplate",
	});
});
