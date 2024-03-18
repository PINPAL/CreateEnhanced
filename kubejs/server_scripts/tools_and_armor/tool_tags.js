// priority: 999
ServerEvents.tags("item", (event) => {
	// Remove Create copper armor from forge tags to prevent recipe removal
	event.get("forge:armors/helmets").remove("create:copper_diving_helmet");
	event.get("forge:armors/chestplates").remove("create:copper_backtank");
	event.get("forge:armors/boots").remove("create:copper_diving_boots");

	// Add paxel tag
	event.add("kubejs:paxel", /easypaxellite:.*_paxel$/);
	event.add("kubejs:paxel", "kubejs:copper_paxel");
});

ServerEvents.tags("block", (event) => {
	// Make paxel break more stuff faster
	event.add("minecraft:mineable/paxel", "#forge:glass");
	event.add("minecraft:mineable/paxel", "#minecraft:mineable/hoe");
	event.add("minecraft:mineable/paxel", "#minecraft:wool");
	event.add("minecraft:mineable/paxel", "#minecraft:wool_carpets");
});
