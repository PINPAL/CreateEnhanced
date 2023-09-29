JEIEvents.hideItems((event) => {
  // Hide Items
  const hideFromJEI = [
    /kubejs:broken_.*/,
    /kubejs:incomplete_.*/,
    /supplementaries:.*vertical_slab/,
    /alloyed:.*vertical_slab/,
    /doubleslabs:.*/,
    /createdeco:.*slab_vert/,
    "create_dd:kinetic_motor",
    "create_dd:accelerator_motor",
    "kubejs:belt_scroll",
    /createaddition:.*electrum.*/,
    "create_paper_line:frame",
    "create_paper_line:saw_dust",
    "create_paper_line:wood_chips",
    "kubejs:white_dye_fluid_bucket",
    "kubejs:orange_dye_fluid_bucket",
    "kubejs:magenta_dye_fluid_bucket",
    "kubejs:light_blue_dye_fluid_bucket",
    "kubejs:yellow_dye_fluid_bucket",
    "kubejs:lime_dye_fluid_bucket",
    "kubejs:pink_dye_fluid_bucket",
    "kubejs:gray_dye_fluid_bucket",
    "kubejs:light_gray_dye_fluid_bucket",
    "kubejs:cyan_dye_fluid_bucket",
    "kubejs:purple_dye_fluid_bucket",
    "kubejs:blue_dye_fluid_bucket",
    "kubejs:brown_dye_fluid_bucket",
    "kubejs:green_dye_fluid_bucket",
    "kubejs:red_dye_fluid_bucket",
    "kubejs:black_dye_fluid_bucket",
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
    "createaddition:digital_adapter",
    "createindustry:napalm_bomb",
    "createindustry:napalm_bucket",
    "createindustry:thermite_grenade",
    /createindustry:.*concrete.*/,
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
    "create_dd:deforester_saw",
    "supplementaries:soap",
    "supplementaries:soap_block",
    "supplementaries:bamboo_spikes",
    "supplementaries:bamboo_spikes_tipped",
    "supplementaries:bomb",
    "supplementaries:bomb_blue",
    "supplementaries:bellows",
    "supplementaries:pulley_block",
    "supplementaries:bubble_blower",
    /cofh_core:/,
    /spawn_egg/,
    "minecraft:infested_stone",
    "minecraft:infested_cobblestone",
    "minecraft:infested_stone_bricks",
    "minecraft:infested_mossy_stone_bricks",
    "minecraft:infested_cracked_stone_bricks",
    "minecraft:infested_chiseled_stone_bricks",
    "minecraft:infested_deepslate",
    "shrink:mob_bottle",
    "#forge:pickaxes",
    "#forge:shovels",
    "#forge:axes",
    "farmersdelight:golden_knife",
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
    "supplementaries:crank",
    "supplementaries:faucet",
    /supplementaries:.*present.*/,
    "easypaxellite:netherite_paxel_ingot",
    /sophisticatedbackpacks:*/,
    /sophisticatedstorage:*/,
    /refinedstorage:*/,
    /itemfilters:*/,
    /simplemagnets:*/,
    "refinedstorageaddons:creative_wireless_crafting_grid",
    "ironjetpacks:strap",
    "ironjetpacks:thruster",
    "ironjetpacks:capacitor",
    "ironjetpacks:cell",
    "ironjetpacks:basic_coil",
    "ironjetpacks:advanced_coil",
    "ironjetpacks:ultimate_coil",
    "minecraft:elytra",
    /wands:*/,
    /ftbquests:*/,
    "easy_villagers:iron_farm",
    "easy_villagers:farmer",
    "minecraft:enchanting_table",
    "minecraft:anvil",
    "minecraft:chipped_anvil",
    "minecraft:damaged_anvil",
    /chunkloaders:*/,
    "minecraft:enchanted_book",
  ];
  hideFromJEI.forEach((item) => {
    event.hide(item);
  });
});

JEIEvents.addItems((event) => {
  // Add Items
  const addToJEI = [
    "createindustry:liquid_concrete_bucket",
    "createindustry:concrete",
    "createindustry:concrete_slab",
    "createindustry:concrete_stairs",
    "createindustry:concrete_wall",
    "createindustry:concrete_pillar",
    "ftbquests:book",
    "sophisticatedstorage:upgrade_base",
    "sophisticatedstorage:compression_upgrade",
    "sophisticatedstorage:stack_upgrade_tier_1",
    "sophisticatedstorage:stack_upgrade_tier_2",
    "sophisticatedstorage:stack_upgrade_tier_3",
    "sophisticatedstorage:stack_upgrade_tier_4",
    "sophisticatedstorage:void_upgrade",
    "sophisticatedstorage:storage_tool",
    Item.of("sophisticatedstorage:gold_chest", '{woodType: "spruce"}'),
    Item.of("sophisticatedstorage:gold_barrel", '{woodType: "spruce"}'),
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_1",
      '{woodType: "spruce"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_2",
      '{woodType: "spruce"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_3",
      '{woodType: "spruce"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_4",
      '{woodType: "spruce"}'
    ),
    Item.of("sophisticatedstorage:netherite_chest", '{woodType: "dark_oak"}'),
    Item.of("sophisticatedstorage:netherite_barrel", '{woodType: "dark_oak"}'),
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_1",
      '{woodType: "dark_oak"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_2",
      '{woodType: "dark_oak"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_3",
      '{woodType: "dark_oak"}'
    ),
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_4",
      '{woodType: "dark_oak"}'
    ),
    "sophisticatedbackpacks:backpack",
    "sophisticatedbackpacks:iron_backpack",
    "sophisticatedbackpacks:gold_backpack",
    "sophisticatedbackpacks:diamond_backpack",
    "sophisticatedbackpacks:netherite_backpack",
    "sophisticatedbackpacks:advanced_pickup_upgrade",
    "sophisticatedbackpacks:advanced_void_upgrade",
    "sophisticatedbackpacks:advanced_restock_upgrade",
    "sophisticatedbackpacks:advanced_deposit_upgrade",
    "sophisticatedbackpacks:advanced_refill_upgrade",
    "sophisticatedbackpacks:everlasting_upgrade",
    "refinedstorage:quartz_enriched_iron",
    "refinedstorageaddons:wireless_crafting_grid",
    "refinedstorage:wireless_fluid_grid",
    "refinedstorage:wireless_crafting_monitor",
    "refinedstorage:cable",
    "refinedstorage:crafting_grid",
    "refinedstorage:fluid_grid",
    "refinedstorage:pattern_grid",
    "refinedstorage:crafting_monitor",
    "refinedstorage:controller",
    "refinedstorage:external_storage",
    "refinedstorage:detector",
    "refinedstorage:importer",
    "refinedstorage:exporter",
    "refinedstorage:processor_binding",
    "refinedstorage:basic_processor",
    "refinedstorage:improved_processor",
    "refinedstorage:advanced_processor",
    "refinedstorage:wireless_transmitter",
    "refinedstorage:silicon",
    "refinedstorage:pattern",
    "refinedstorage:crafter",
    "refinedstorage:filter",
    "refinedstorage:upgrade",
    "refinedstorage:speed_upgrade",
    "refinedstorage:stack_upgrade",
    "refinedstorage:crafting_upgrade",
    "simplemagnets:advancedmagnet",
    "simplemagnets:advanced_demagnetization_coil",
    "wands:palette",
    "chunkloaders:ultimate_chunk_loader",
    Item.of("wands:netherite_wand", "{Unbreakable: 1b}"),
    Item.of(
      "minecraft:enchanted_book",
      '{display:{Lore:[\'[{"text":"Can contain ","color":"gray","italic":false},{"text":"ANY ","color":"red","italic":false},{"text":"enchantment.","color":"gray","italic":false}]\',\'{"text":" "}\',\'{"text":"Equal chance of all enchants.","color":"gold","italic":false}\',\'{"text":"Will always be Level I","color":"yellow","italic":false}\'],Name:\'{"text":"Random Enchanted Book","color":"gold","italic":false}\'}}'
    ),
    Item.of(
      "refinedstorage:cover",
      '{Item:{Count:1,id:"create:brass_casing"}}'
    ),
    Item.of(
      "refinedstorage:hollow_cover",
      '{Item:{Count:1,id:"create:brass_casing"}}'
    ),
    Item.of(
      "refinedstorage:cover",
      '{Item:{Count:1,id:"create:andesite_casing"}}'
    ),
    Item.of(
      "refinedstorage:hollow_cover",
      '{Item:{Count:1,id:"create:andesite_casing"}}'
    ),
  ];
  addToJEI.forEach((item) => {
    event.add(item);
  });
});

JEIEvents.hideFluids((event) => {
  // Hide Fluids
  const hideFluids = [
    "sophisticatedcore:xp_still",
    "createindustry:napalm",
    "createindustry:kerosene",
    "createindustry:naphta",
    "cofh_core:experience",
    "cofh_core:honey",
    "cofh_core:potion",
    "create_dd:condense_milk",
    "create_dd:cream",
    "create_dd:vanilla",
    "create_dd:vanilla_milkshake",
    "create_dd:strawberry",
    "create_dd:strawberry_milkshake",
    "create_dd:glowberry",
    "create_dd:glowberry_milkshake",
    "create_dd:caramel",
    "create_dd:caramel_milkshake",
    "create_dd:hot_chocolate",
    "create_dd:chocolate_milkshake",
  ].forEach((fluid) => {
    event.hide(fluid);
  });
});

JEIEvents.removeCategories((event) => {
  // Remove Categories
  const removeCategories = [
    "minecraft:anvil",
    "create_central_kitchen:cutting_board_deploying",
  ];
  removeCategories.forEach((item) => {
    event.remove(item);
  });
});

JEIEvents.information((event) => {
  const itemsToDescriptionate = [
    {
      id: "createindustry:concrete",
      desc: [
        "Concrete is made when it dries out in the world after being placed using a bucket.",
      ],
    },
    {
      id: "createindustry:oil_deposit",
      desc: ["Rarely spawns at bedrock at the bottom of the world."],
    },
    {
      id: "minecraft:granite",
      desc: [
        "Spawns in massive veins underground in Mountain and Hill biomes.",
      ],
    },
    {
      id: "minecraft:diorite",
      desc: [
        "Spawns in massive veins underground in Savanna, Jungle and Mushroom biomes.",
      ],
    },
    {
      id: "minecraft:andesite",
      desc: ["Spawns in massive veins underground in Forest biomes."],
    },
  ].forEach((item) => event.addItem(item.id, item.desc));

  const undergroundStoneTypes = [
    "minecraft:tuff",
    "createindustry:bauxite",
    "create:crimsite",
    "create:limestone",
    "create:asurine",
    "create:ochrum",
    "create:veridium",
    "create_dd:potassic",
    "create_dd:gabbro",
  ].forEach((item) => event.addItem(item, ["Spawns in veins underground."]));

  const netherStoneTypes = [
    "create:scoria",
    "create:scorchia",
    "supplementaries:ash",
  ].forEach((item) =>
    event.addItem(item, ["Spawns in veins around The Nether."])
  );
});
