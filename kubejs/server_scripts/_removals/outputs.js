// priority: 1
const outputsToRemove = [
	// Tools & Armor
	"#forge:pickaxes",
	"#forge:shovels",
	"#forge:axes",
	"#forge:swords",
	"#forge:hoes",
	"#forge:tools/knives",
	"#forge:armors/chestplates",
	"#forge:armors/helmets",
	"#forge:armors/leggings",
	"#forge:armors/boots",

	// Minecraft
	"minecraft:lodestone",

	// Vertical Slabs
	/createdeco:.*slab_vert/,
	/v_slab_compat:createindustry\/.*concrete.*/,

	// Supplementaries
	"supplementaries:cog_block",
	"supplementaries:bubble_blower",
	"supplementaries:crank",
	"supplementaries:faucet",
	"supplementaries:bamboo_spikes",
	"supplementaries:bamboo_spikes_tipped",
	"supplementaries:bomb",

	// Nutritional Balance
	"nutritionalbalance:lunchbox",

	// Farmers Delight
	"farmersdelight:cooking_pot",

	// Create Deco
	"createdeco:netherite_bars",

	// Explorers Compass
	"explorerscompass:explorerscompass",

	// Create
	"create:cart_assembler",
	"create:rotation_speed_controller",
	"create:hand_crank",
	"create:spout",
	"create:steam_engine",
	"create:deployer",
	"create:controls",
	"create:mechanical_drill",
	"create:extendo_grip",
	"create:fluid_tank",

	// Create Dreams & Desires
	Fluid.of("create_dd:condense_milk"),
	Fluid.of("create_dd:cream"),
	Fluid.of("create_dd:vanilla"),
	Fluid.of("create_dd:vanilla_milkshake"),
	Fluid.of("create_dd:strawberry"),
	Fluid.of("create_dd:strawberry_milkshake"),
	Fluid.of("create_dd:glowberry"),
	Fluid.of("create_dd:glowberry_milkshake"),
	Fluid.of("create_dd:caramel"),
	Fluid.of("create_dd:caramel_milkshake"),
	Fluid.of("create_dd:hot_chocolate"),
	Fluid.of("create_dd:chocolate_milkshake"),
	"create_dd:condense_milk_bucket",
	"create_dd:cream_bucket",
	"create_dd:vanilla_bucket",
	"create_dd:vanilla_milkshake_bucket",
	"create_dd:strawberry_bucket",
	"create_dd:strawberry_milkshake_bucket",
	"create_dd:glowberry_bucket",
	"create_dd:glowberry_milkshake_bucket",
	"create_dd:caramel_bucket",
	"create_dd:caramel_milkshake_bucket",
	"create_dd:hot_chocolate_bucket",
	"create_dd:chocolate_milkshake_bucket",

	"create_dd:steel_block",
	"create_dd:kinetic_motor",
	"create_dd:accelerator_motor",
	"create_dd:mithril_ingot",
	"create_dd:deforester_saw",
	"create_dd:infernal_mechanism",
	"create_dd:hydraulic_press",
	"create_dd:reinforcement_plating",
	"create_dd:bronze_casing",
	"create_dd:industrial_iron_ingot",
	"create_dd:industrial_iron_nugget",
	"create_dd:industrial_iron_sheet",
	"create_dd:industrial_iron_block",
	"createdeco:zinc_sheet",

	// Create Things and Misc
	"create_things_and_misc:radar",

	// Create Addition
	"createaddition:digital_adapter",
	"createaddition:electrum_rod",
	"createaddition:electrum_sheet",
	"createaddition:electrum_wire",
	"createaddition:zinc_sheet",
	Item.of("createaddition:diamond_grit_sandpaper").weakNBT(),

	// Create Paper Line
	"create_paper_line:dryer",
	"create_paper_line:frame",

	// Create Industry
	"tfmg:napalm_bomb",
	"tfmg:napalm_bucket",
	"tfmg:thermite_grenade",
	/tfmg:.*concrete.*/,
	"tfmg:mesh",
	"tfmg:thermite_powder",
	"tfmg:factory_floor",
	"tfmg:factory_floor_slab",
	/v_slab_compat:createindustry\/.*factory_floor.*/,
	"tfmg:industrial_barrel",
	"tfmg:caution_block",
	"tfmg:coal_coke",
	"tfmg:steel_ingot",
	"tfmg:cast_iron_ingot",
	"tfmg:cast_iron_block",
	"tfmg:heavy_plate",
	"tfmg:steel_scaffolding",
	"tfmg:sawdust",

	// Every Compat
	/everycomp:sd\/.*/,
];

ServerEvents.recipes((event) => {
	outputsToRemove.forEach((output) => {
		event.remove({ output: output });
	});
});
