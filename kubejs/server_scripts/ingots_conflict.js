const unifiedIngots = [
	{ name: "steel", modsUsing: ["tfmg", "create_dd"] },
	{ name: "industrial_iron", modsUsing: ["createdeco"] },
	{ name: "zinc", modsUsing: ["create", "create_dd", "createaddition", "destroy"] },
	{ name: "brass", modsUsing: ["create"] },
	{ name: "copper", modsUsing: ["create", "minecraft"] },
	{ name: "andesite", modsUsing: ["create", "create_dd", "createdeco"] },
	{ name: "netherite", modsUsing: ["minecraft", "createdeco"] },
	{ name: "iron", modsUsing: ["minecraft", "create"] },
	{ name: "gold", modsUsing: ["minecraft", "create"] },
	{ name: "aluminum", modsUsing: ["tfmg"] },
	{ name: "bronze", modsUsing: ["create_dd"] },
	{ name: "tin", modsUsing: ["create_dd", "destroy"] },
];

ServerEvents.recipes((event) => {
	// Replace all modded ingots with unified ingots
	unifiedIngots.forEach((ingot) => {
		ingot.modsUsing.forEach((mod) => {
			// Ingots
			event.replaceInput(
				{ input: mod + ":" + ingot.name + "_ingot" },
				mod + ":" + ingot.name + "_ingot",
				"#forge:ingots/" + ingot.name
			);
			event
				.replaceOutput(
					{ output: mod + ":" + ingot.name + "_ingot" },
					mod + ":" + ingot.name + "_ingot",
					"#forge:ingots/" + ingot.name
				)
				.id("create_complete_collection:ingots/" + mod + "/" + ingot.name + "_ingot");

			// Nuggets
			event.replaceInput(
				{ input: mod + ":" + ingot.name + "_nugget" },
				mod + ":" + ingot.name + "_nugget",
				"#forge:nuggets/" + ingot.name
			);
			event
				.replaceOutput(
					{ output: mod + ":" + ingot.name + "_nugget" },
					mod + ":" + ingot.name + "_nugget",
					"#forge:nuggets/" + ingot.name
				)
				.id("create_complete_collection:ingots/" + ingot.name + "_nugget");

			// Plates
			event.replaceInput(
				{ input: mod + ":" + ingot.name + "_sheet" },
				mod + ":" + ingot.name + "_sheet",
				"#forge:plates/" + ingot.name
			);
			event
				.replaceOutput(
					{ output: mod + ":" + ingot.name + "_sheet" },
					mod + ":" + ingot.name + "_sheet",
					"#forge:plates/" + ingot.name
				)
				.id("create_complete_collection:ingots/" + ingot.name + "_sheet");
		});
	});
});

ServerEvents.tags("item", (event) => {
	// Add tags for all unified ingots
	unifiedIngots.forEach((ingot) => {
		event.add("create_complete_collection:" + ingot.name + "_ingot", "forge:ingots/" + ingot.name);
		event.add("create_complete_collection:" + ingot.name + "_nugget", "forge:nuggets/" + ingot.name);
		event.add("create_complete_collection:" + ingot.name + "_sheet", "forge:plates/" + ingot.name);
		event.add("create_complete_collection:" + ingot.name + "_block", "forge:storage_blocks/" + ingot.name);
	});

	// Remove modded ingots
	event.removeAllTagsFrom("tfmg:steel_ingot");
	event.removeAllTagsFrom("tfmg:steel_block");
	event.removeAllTagsFrom("create_dd:steel_ingot");
	event.removeAllTagsFrom("create_dd:steel_nugget");
	event.removeAllTagsFrom("create_dd:steel_sheet");
	event.removeAllTagsFrom("create_dd:steel_block");

	event.removeAllTagsFrom("create_dd:industrial_iron_ingot");
	event.removeAllTagsFrom("create_dd:industrial_iron_nugget");
	event.removeAllTagsFrom("create_dd:industrial_iron_sheet");
	event.removeAllTagsFrom("createdeco:industrial_iron_ingot");
	event.removeAllTagsFrom("createdeco:industrial_iron_nugget");
	event.removeAllTagsFrom("createdeco:industrial_iron_sheet");
	event.removeAllTagsFrom("tfmg:industrial_iron_ingot");
	event.removeAllTagsFrom("tfmg:industrial_iron_nugget");
	event.removeAllTagsFrom("tfmg:industrial_iron_sheet");

	event.removeAllTagsFrom("create:zinc_ingot");
	event.removeAllTagsFrom("create:zinc_nugget");
	event.removeAllTagsFrom("create_dd:zinc_sheet");
	event.removeAllTagsFrom("createdeco:zinc_sheet");
	event.removeAllTagsFrom("createaddition:zinc_sheet");
	event.removeAllTagsFrom("destroy:zinc_sheet");
});
