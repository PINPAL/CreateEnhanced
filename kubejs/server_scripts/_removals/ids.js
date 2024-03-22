// priority: 1
const idsToRemove = [
	// Minecraft
	"minecraft:compacting/cast_iron_ingot",
	"minecraft:paper",
	"minecraft:book",
	"minecraft:cake",
	"minecraft:gold_nugget_from_blasting",

	// Salt
	"salt:salting",

	// Supplementaries
	"supplementaries:soap_clean_minecraft_stained_glass",
	"supplementaries:soap_clean_supplementaries_candle_holder",
	"supplementaries:soap_clean_minecraft_concrete",
	"supplementaries:soap_clean_minecraft_concrete_powder",
	"supplementaries:soap_clean_minecraft_shulker_box",
	"supplementaries:soap/piston",
	"supplementaries:soap/dirty_shard",
	"supplementaries:soap/dirty_glass",
	"supplementaries:item_lore_display",

	// Quark
	"quark:tweaks/crafting/utility/bent/paper",
	"quark:tweaks/smelting/bone_meal_utility",
	"quark:tweaks/crafting/utility/misc/easy_sticks",

	// Farmers Delight
	"farmersdelight:book_from_canvas",
	"farmersdelight:cake_from_milk_bottle",
	"farmersdelight:paper_from_tree_bark",
	"farmersdelight:iron_nugget_from_blasting_knife",
	"farmersdelight:iron_nugget_from_smelting_knife",

	// Farmers Delight Slicing in Mixer
	"farmersdelight:integration/create/mixing/cabbage_slice_from_mixing",
	"farmersdelight:integration/create/mixing/pie_crust_from_mixing",
	"farmersdelight:integration/create/mixing/tomato_sauce_from_mixing",

	// Create Dreams & Desires
	"create_dd:mixing/asphalt",
	"create_dd:industrial_iron/mechanical_press",
	"create_dd:crafting/mechanical_arm",
	"create_dd:crafting/gearbox",
	"create_dd:crafting/gearbox_from_vertical_gearbox",
	"create_dd:crafting/vertical_gearbox",
	"create_dd:crafting/vertical_gearbox_from_gearbox",
	"create_dd:crafting/item_interface",
	"create_dd:crafting/adj_chain_gearshift",
	"create_dd:crafting/mechanical_roller",
	"create_dd:crafting/contraption_controls",
	"create_dd:crafting/fluid_interface",
	"create_dd:industrial_iron/chute",
	"create_dd:industrial_iron/cauldron",
	"create_dd:industrial_iron/basin",
	"create_dd:industrial_iron/blast_furnace",
	"create_dd:industrial_iron/rail",
	"create_dd:industrial_iron/smithing_table",
	"create_dd:industrial_iron/detector_rail",
	"create_dd:industrial_iron/hopper",
	"create_dd:compacting/steel_ingot",
	"create_dd:crafting/asphalt_hazard_block",

	// Create Paper Line
	"create_paper_line:mixing/wood_pulp",
	"create_paper_line:mixing/wood_pulp_with_saw_dust",
	"create_paper_line:mixing/wood_pulp_from_saw_dust",
	"create_paper_line:mixing/whitened_wood_pulp",

	// Decorative Blocks
	"decorative_blocks:lattice",

	// Create Things and Misc
	/create_things_and_misc:.*_sail_craft.*/,
	/create_things_and_misc:.*_sail/,
	"create_things_and_misc:brass_speaker_craft",
	"create_things_and_misc:diluted_bonemeal_craft",

	// Create Industry
	"createindustry:compacting/steel_block",
	"createindustry:mixing/napalm",
	"createindustry:crafting/electron_tube_from_plastic",

	// Create
	"create:crafting/kinetics/item_vault",
	"create:crushing/tuff",
	"create:crushing/tuff_recycling",
	"create:item_application/copper_casing_from_wood_using_deployer",
	"create:item_application/copper_casing_from_log_using_deployer",
	"create:item_application/copper_casing_from_wood",
	"create:item_application/copper_casing_from_log",
	"create:crafting/kinetics/super_glue",
	"create:crafting/curiosities/cake",
	"create:pressing/sugar_cane",
	"create:splashing/crushed_raw_iron",
	"create:crafting/appliances/copper_backtank",

	// Create Connected
	"create_connected:crafting/kinetics/item_silo",

	// Broken Recipes
	"createindustry:colored_concrete/full_block/pink_concrete",
	"createindustry:colored_concrete/full_block/pink_concrete_q",
	"createindustry:colored_concrete/full_block/lime_concrete_q",
	"createindustry:colored_concrete/full_block/gray_concrete_q",
	"createindustry:colored_concrete/full_block/red_concrete_q",
	"createindustry:colored_concrete/full_block/purple_concrete_q",
	"createindustry:colored_concrete/full_block/light_gray_concrete_q",
	"createindustry:colored_concrete/full_block/cyan_concrete_q",
	"createindustry:colored_concrete/full_block/blue_concrete_q",
	"createindustry:colored_concrete/full_block/brown_concrete_q",
	"createindustry:colored_concrete/full_block/green_concrete_q",
	"createindustry:colored_concrete/full_block/red_concrete_q",
	"createindustry:colored_concrete/full_block/yellow_concrete_q",
	"createindustry:colored_concrete/full_block/light_blue_concrete_q",
	"createindustry:colored_concrete/full_block/magenta_concrete_q",
	"createindustry:colored_concrete/full_block/orange_concrete_q",
	"createindustry:colored_concrete/full_block/white_concrete_q",
	"createindustry:colored_concrete/full_block/black_concrete_q",
	"create_crystal_clear:steel_tinted_glass_casing",
	"design_decor:item_application/millstones/special_aluminum_cylinder",
	"design_decor:item_application/crushing_wheels/special_aluminum_cylinder",
];

ServerEvents.recipes((event) => {
	idsToRemove.forEach((id) => {
		event.remove({ id: id });
	});
});
