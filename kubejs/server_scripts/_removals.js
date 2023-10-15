// priority: 1
const modsToRemove = [
  "rsinfinitybooster",
  "refinedstorage",
  "refinedstorageaddons",
  "chunkloaders",
  "createchunkloading",
  "disenchanting",
  "itemfilters",
  "ironjetpacks",
  "simplemagnets",
  "shrink",
  "sophisticatedbackpacks",
  "sophisticatedstorage",
  "easypaxellite",
  "easy_villagers",
  "wands",
  "netherite_horse_armor",
];

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
  /alloyed:.*vertical_slab/,
  /supplementaries:.*vertical_slab/,

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

  // Alloyed
  "alloyed:bronze_ingot",
  "alloyed:bronze_nugget",
  "alloyed:bronze_sheet",
  "alloyed:bronze_block",
  "alloyed:steel_ingot",
  "alloyed:steel_nugget",
  "alloyed:steel_sheet",
  "alloyed:steel_pickaxe",
  "alloyed:steel_shovel",
  "alloyed:steel_axe",
  "alloyed:steel_shears",
  "alloyed:steel_fishing_rod",
  "alloyed:steel_sword",
  "alloyed:steel_hoe",
  "alloyed:steel_helmet",
  "alloyed:steel_chestplate",
  "alloyed:steel_leggings",
  "alloyed:steel_boots",

  // Create Deco
  "createdeco:netherite_bars",

  // Explorers Compass
  "explorerscompass:explorerscompass",

  // Create
  "create:cart_assembler",
  "create:rotation_speed_controller",
  "create:millstone",
  "create:hand_crank",
  "create:spout",
  "create:steam_engine",
  "create:deployer",
  "create:controls",
  "create:mechanical_drill",
  "create:extendo_grip",

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

  // Create Things and Misc
  "create_things_and_misc:radar",
  "create_things_and_misc:cherry_sail",

  // Create Addition
  "createaddition:digital_adapter",

  // Create Paper Line
  "create_paper_line:dryer",
  "create_paper_line:frame",

  // Create Industry
  "createindustry:napalm_bomb",
  "createindustry:napalm_bucket",
  "createindustry:thermite_grenade",
  /createindustry:.*concrete.*/,
  "createindustry:mesh",
  "createindustry:thermite_powder",
  "createindustry:factory_floor",
  "createindustry:factory_floor_slab",
  "createindustry:industrial_barrel",
  "createindustry:caution_block",
  "createindustry:coal_coke",
  "createindustry:steel_ingot",
  "createindustry:cast_iron_ingot",
  "createindustry:cast_iron_block",
  "createindustry:heavy_plate",
  "createindustry:steel_scaffolding",
  "createindustry:sawdust",
];

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

  // Farmers Delight
  "farmersdelight:book_from_canvas",
  "farmersdelight:cake_from_milk_bottle",
  "farmersdelight:paper_from_tree_bark",
  "farmersdelight:iron_nugget_from_blasting_knife",
  "farmersdelight:iron_nugget_from_smelting_knife",

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
  "create_things_and_misc:mangrove_sail_craft_backport",
  "create_things_and_misc:brass_speaker_craft",

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
];

ServerEvents.recipes((event) => {
  modsToRemove.forEach((mod) => {
    event.remove({ mod: mod });
  });
  outputsToRemove.forEach((output) => {
    event.remove({ output: output });
  });
  idsToRemove.forEach((id) => {
    event.remove({ id: id });
  });
});
