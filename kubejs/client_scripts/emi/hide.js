const hideFromJEI = [
  // Mod Match
  /sophisticatedbackpacks:*/,
  /sophisticatedstorage:*/,
  /refinedstorage:*/,
  /itemfilters:*/,
  /simplemagnets:*/,
  /wands:*/,
  /ftbquests:*/,
  /chunkloaders:*/,
  /doubleslabs:.*/,

  // Regex Match
  /create_central_kitchen:incomplete_.*/,
  /create_crystal_clear:.*encased.*/,
  /kubejs:broken_.*/,
  /kubejs:incomplete_.*/,
  /supplementaries:.*vertical_slab/,
  /alloyed:.*vertical_slab/,
  /createdeco:.*slab_vert/,
  /createaddition:.*electrum.*/,
  /createindustry:.*concrete.*/,
  /spawn_egg/,
  /supplementaries:.*present.*/,

  // Tag Match
  "#forge:pickaxes",
  "#forge:shovels",
  "#forge:axes",

  // Item Match
  "kubejs:belt_scroll",

  "create:extendo_grip",

  "create_things_and_misc:cherry_sail",
  "create_things_and_misc:brass_knife",
  "create_things_and_misc:zinc_knife",

  "create_paper_line:frame",
  "create_paper_line:saw_dust",
  "create_paper_line:wood_chips",

  "create_dd:kinetic_motor",
  "create_dd:accelerator_motor",
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
  "create_dd:industrial_iron_ingot",
  "create_dd:industrial_iron_nugget",
  "create_dd:industrial_iron_sheet",
  "create_dd:deforester_saw",

  "createaddition:digital_adapter",

  "createindustry:napalm_bomb",
  "createindustry:napalm_bucket",
  "createindustry:thermite_grenade",
  "createindustry:mesh",
  "createindustry:thermite_powder",
  "createindustry:napalm",
  "createindustry:factory_floor",
  "createindustry:factory_floor_slab",
  "createindustry:steel_ingot",
  "createindustry:cast_iron_ingot",
  "createindustry:cast_iron_block",
  "createindustry:heavy_plate",
  "createindustry:steel_scaffolding",
  "createindustry:industrial_barrel",
  "createindustry:caution_block",

  "nutritionalbalance:lunchbox",

  "supplementaries:crank",
  "supplementaries:faucet",
  "supplementaries:wrench",
  "supplementaries:flute",
  "supplementaries:soap",
  "supplementaries:soap_block",
  "supplementaries:bamboo_spikes",
  "supplementaries:bamboo_spikes_tipped",
  "supplementaries:bomb",
  "supplementaries:bomb_blue",
  "supplementaries:bellows",
  "supplementaries:pulley_block",
  "supplementaries:bubble_blower",

  "shrink:mob_bottle",

  "minecraft:infested_stone",
  "minecraft:infested_cobblestone",
  "minecraft:infested_stone_bricks",
  "minecraft:infested_mossy_stone_bricks",
  "minecraft:infested_cracked_stone_bricks",
  "minecraft:infested_chiseled_stone_bricks",
  "minecraft:infested_deepslate",

  "farmersdelight:golden_knife",
  "farmersdelight:netherite_knife",

  "alloyed:steel_pickaxe",
  "alloyed:steel_shovel",
  "alloyed:steel_axe",
  "alloyed:steel_shears",
  "alloyed:steel_fishing_rod",
  "alloyed:steel_ingot",
  "alloyed:steel_nugget",
  "alloyed:steel_sheet",
  "alloyed:bronze_ingot",
  "alloyed:bronze_nugget",
  "alloyed:bronze_sheet",

  "easypaxellite:netherite_paxel_ingot",

  "refinedstorageaddons:creative_wireless_crafting_grid",

  "ironjetpacks:strap",
  "ironjetpacks:thruster",
  "ironjetpacks:capacitor",
  "ironjetpacks:cell",
  "ironjetpacks:basic_coil",
  "ironjetpacks:advanced_coil",
  "ironjetpacks:ultimate_coil",

  "easy_villagers:iron_farm",
  "easy_villagers:farmer",

  "minecraft:elytra",
  "minecraft:anvil",
  "minecraft:chipped_anvil",
  "minecraft:damaged_anvil",
  "minecraft:brewing_stand",
  "minecraft:enchanted_book",
];

JEIEvents.hideItems((event) => {
  // Hide Items
  hideFromJEI.forEach((item) => {
    event.hide(item);
  });
});
