const unifiedIngots = ["steel", "bronze", "cast_iron", "tin", "platinum", "zinc", "brass"];

StartupEvents.registry("item", (event) => {
	unifiedIngots.forEach((ingot) => {
		event.create("create_complete_collection:" + ingot + "_ingot").displayName(formatName(ingot) + " Ingot");
		event.create("create_complete_collection:" + ingot + "_nugget").displayName(formatName(ingot) + " Nugget");
		event.create("create_complete_collection:" + ingot + "_plate").displayName(formatName(ingot) + " Plate");
	});
});
