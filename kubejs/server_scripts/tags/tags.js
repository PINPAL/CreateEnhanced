//priority: 0

ServerEvents.tags("item", (event) => {
  [
    "minecraft:leather_chestplate",
    "minecraft:leather_leggings",
    "minecraft:leather_boots",
    "minecraft:leather_helmet",
  ].forEach((item) => {
    event.add("kubejs:leather_armor", item);
  });

  [
    "minecraft:chainmail_chestplate",
    "minecraft:chainmail_leggings",
    "minecraft:chainmail_boots",
    "minecraft:chainmail_helmet",
  ].forEach((item) => {
    event.add("kubejs:chainmail_armor", item);
  });

  [
    "create:netherite_diving_boots",
    "create:netherite_diving_helmet",
    "create:copper_diving_boots",
    "create:copper_diving_helmet",
  ].forEach((item) => {
    event.add("forge:armors", item);
  });

  ["create:netherite_diving_boots", "create:copper_diving_boots"].forEach(
    (item) => {
      event.add("forge:armors/boots", item);
      event.add("forge:boots", item);
    }
  );

  ["create:netherite_diving_helmet", "create:copper_diving_helmet"].forEach(
    (item) => {
      event.add("forge:armors/helmets", item);
      event.add("forge:helmets", item);
    }
  );

  [
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
    "minecraft:iron_helmet",
  ].forEach((item) => {
    event.add("kubejs:iron_armor", item);
  });

  [
    "alloyed:steel_chestplate",
    "alloyed:steel_leggings",
    "alloyed:steel_boots",
    "alloyed:steel_helmet",
  ].forEach((item) => {
    event.add("forge:armors", item);
    event.add("kubejs:steel_armor", item);
  });
  event.add("forge:tools/hoes", "alloyed:steel_hoe");
  event.add("forge:hoes", "alloyed:steel_hoe");
  event.add("forge:tools", "alloyed:steel_hoe");

  event.add("forge:helmets", "alloyed:steel_helmet");
  event.add("forge:chestplates", "alloyed:steel_chestplate");
  event.add("forge:leggings", "alloyed:steel_leggings");
  event.add("forge:boots", "alloyed:steel_boots");

  [
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
    "minecraft:diamond_helmet",
  ].forEach((item) => {
    event.add("kubejs:diamond_armor", item);
  });

  [
    "minecraft:netherite_chestplate",
    "minecraft:netherite_leggings",
    "minecraft:netherite_boots",
    "minecraft:netherite_helmet",
  ].forEach((item) => {
    event.add("kubejs:netherite_armor", item);
  });

  const createTrainTracks = ["create:track", /railways:track_.*/];
  createTrainTracks.forEach((item) => {
    console.log(item);
    event.add("kubejs:train_tracks", item);
  });
  event.remove("kubejs:train_tracks", /railways:track_switch.*/);
  event.remove("kubejs:train_tracks", "railways:track_coupler");
  event.remove("kubejs:train_tracks", /railways:track_incomplete_.*/);

  ["create:brass_funnel", "create:brass_tunnel", "create:smart_chute"].forEach(
    (item) => {
      event.add("quests:brass_sorter", item);
    }
  );

  [
    "minecraft:iron_nugget",
    "minecraft:gold_nugget",
    "create:zinc_nugget",
    "create:brass_nugget",
    "create_dd:tin_nugget",
  ].forEach((item) => {
    event.add("kubejs:simple_nuggets", item);
  });

  [/create:.*sail/, /create_things_and_misc:.*_sail/].forEach((item) => {
    event.add("kubejs:windmill_sails", item);
  });

  ["createaddition:connector", "createaddition:large_connector"].forEach(
    (item) => {
      event.add("kubejs:electric_connector", item);
    }
  );

  ["minecraft:bread"].forEach((item) => {
    event.add("forge:nutrients/carbs", item);
  });

  [
    "sophisticatedstorage:gold_barrel",
    "sophisticatedstorage:gold_chest",
  ].forEach((item) => {
    event.add("quests:andesite_storage", item);
  });

  [
    "minecraft:iron_ingot",
    "minecraft:gold_ingot",
    "create:zinc_ingot",
    "create:brass_ingot",
    "create_dd:tin_ingot",
  ].forEach((item) => {
    event.add("kubejs:simple_ingots", item);
  });

  [
    "minecraft:iron_block",
    "minecraft:gold_block",
    "create:zinc_block",
    "create:brass_block",
    "create_dd:tin_block",
  ].forEach((item) => {
    event.add("kubejs:simple_blocks", item);
  });

  event.add("quests:storage_blocks", "#forge:barrels");
  event.add("quests:storage_blocks", "#forge:chests");
  event.add("quests:storage_blocks", "#storagedrawers:drawers");
  [
    "metalbarrels:iron_barrel",
    "metalbarrels:gold_barrel",
    "metalbarrels:diamond_barrel",
  ].forEach((item) => {
    event.add("quests:storage_blocks", item);
  });

  const newGems = ["coal", "redstone"];
  newGems.forEach((gem) => {
    event.add(`forge:gems/${gem}`, `minecraft:${gem}`);
  });

  const brickTypes = ["blue", "scarlet", "dean", "dusk", "pearl"];
  const bricks = event.get("forge:ingots/brick").getObjectIds();
  brickTypes.forEach((type) => {
    let blacklist = Ingredient.of(`createdeco:${type}_brick`);
    bricks.forEach((item) => {
      if (!blacklist.test(item)) event.add(`kubejs:bricks_not_${type}`, item);
    });
  });

  event.add("forge:storage_blocks/bronze", "create_dd:bronze_block");

  const notAllowedtoSlice = [
    "minecraft:wooden_axe",
    "minecraft:stone_axe",
    "minecraft:iron_axe",
    "minecraft:golden_axe",
    "minecraft:diamond_axe",
    "minecraft:netherite_axe",
    "alloyed:steel_axe",
    "minecraft:wooden_shovel",
    "minecraft:stone_shovel",
    "minecraft:iron_shovel",
    "minecraft:golden_shovel",
    "minecraft:diamond_shovel",
    "minecraft:netherite_shovel",
    "alloyed:steel_shovel",
  ];
  notAllowedtoSlice.forEach((item) => {
    event.remove("sliceanddice:allowed_tools", item);
  });

  const easyPaxels = [
    "easypaxellite:wood_paxel",
    "easypaxellite:stone_paxel",
    "easypaxellite:iron_paxel",
    "easypaxellite:golden_paxel",
    "easypaxellite:diamond_paxel",
    "easypaxellite:netherite_paxel",
    "easypaxellite:tempered_netherite_paxel",
  ];
  easyPaxels.forEach((item) => {
    event.add("forge:axes", item);
    event.add("forge:tools/axes", item);
    event.add("minecraft:axes", item);
    event.add("minecraft:tools/axes", item);
  });

  const decals = [
    "create_things_and_misc:train_sing",
    "create_things_and_misc:train_sing_2",
    "create_things_and_misc:train_sing_3",
    "create_things_and_misc:train_sing_4",
    "create_things_and_misc:train_sing_5",
    "create_things_and_misc:train_sing_yellow_1",
    "create_things_and_misc:train_sing_yellow_2",
    "create_things_and_misc:train_sing_yellow_3",
    "create_things_and_misc:train_sing_yellow_4",
    "create_things_and_misc:train_sing_yellow_5",
    "create_things_and_misc:redsing",
    "create_things_and_misc:redsing_1",
    "create_things_and_misc:redsing_2",
    "create_things_and_misc:green_sing",
    "create_things_and_misc:green_sing_1",
    "create_things_and_misc:green_sing_2",
    "create_things_and_misc:green_sing_3",
    "create_things_and_misc:green_sing_4",
    "create_things_and_misc:green_sing_5",
    "create_things_and_misc:green_sing_6",
    "create_things_and_misc:speed_25",
    "create_things_and_misc:speed_50",
    "create_things_and_misc:speed_75",
    "create_things_and_misc:speed_100",
    "createdeco:white_decal",
    "createdeco:orange_decal",
    "createdeco:magenta_decal",
    "createdeco:light_blue_decal",
    "createdeco:yellow_decal",
    "createdeco:lime_decal",
    "createdeco:pink_decal",
    "createdeco:gray_decal",
    "createdeco:light_gray_decal",
    "createdeco:cyan_decal",
    "createdeco:purple_decal",
    "createdeco:blue_decal",
    "createdeco:brown_decal",
    "createdeco:green_decal",
    "createdeco:red_decal",
    "createdeco:black_decal",
    "design_decor:moyai_sign",
    "design_decor:warning_sign",
    "design_decor:arrow_up_sign",
    "design_decor:tap_sign",
    "design_decor:stop_sign",
    "design_decor:arrow_right_sign",
    "design_decor:arrow_left_sign",
    "design_decor:glitch_warning_sign",
    "design_decor:broken_wrench_sign",
    "design_decor:biohazard_sign",
    "design_decor:capitalism_warning_sign",
    "design_decor:arrow_down_sign",
    "design_decor:gear_sign",
    "design_decor:creeper_sign",
    "design_decor:bun_sign",
    "design_decor:silly_sign",
    "design_decor:american_sign",
    "design_decor:magnet_sign",
    "design_decor:blank_sign",
  ];
  decals.forEach((decal) => {
    event.add("kubejs:create_decals", decal);
  });

  event.add("kubejs:oak_drawers", /storagedrawers:oak_full_drawers_.*/);
  event.add("kubejs:spruce_drawers", /storagedrawers:spruce_full_drawers_.*/);
  event.add("kubejs:birch_drawers", /storagedrawers:birch_full_drawers_.*/);
  event.add("kubejs:jungle_drawers", /storagedrawers:jungle_full_drawers_.*/);
  event.add("kubejs:acacia_drawers", /storagedrawers:acacia_full_drawers_.*/);
  event.add(
    "kubejs:dark_oak_drawers",
    /storagedrawers:dark_oak_full_drawers_.*/
  );
  event.add("kubejs:crimson_drawers", /storagedrawers:crimson_full_drawers_.*/);
  event.add("kubejs:warped_drawers", /storagedrawers:warped_full_drawers_.*/);
  event.add(
    "kubejs:bamboo_drawers",
    /everycomp:sd\/quark\/bamboo_full_drawers_.*/
  );
  event.add(
    "kubejs:spirit_drawers",
    /everycomp:sd\/create_dd\/spirit_full_drawers_.*/
  );
  event.add(
    "kubejs:smoked_drawers",
    /everycomp:sd\/create_dd\/smoked_full_drawers_.*/
  );
  event.add(
    "kubejs:spirit_drawers",
    /everycomp:sd\/create_dd\/spirit_full_drawers_.*/
  );
  event.add(
    "kubejs:rose_drawers",
    /everycomp:sd\/create_dd\/rose_full_drawers_.*/
  );
  event.add(
    "kubejs:azalea_drawers",
    /everycomp:sd\/ecologics\/azalea_full_drawers_.*/
  );
  event.add(
    "kubejs:flowering_azalea_drawers",
    /everycomp:sd\/ecologics\/flowering_azalea_full_drawers_.*/
  );
  event.add(
    "kubejs:coconut_drawers",
    /everycomp:sd\/ecologics\/coconut_full_drawers_.*/
  );
  event.add(
    "kubejs:walnut_drawers",
    /everycomp:sd\/ecologics\/walnut_full_drawers_.*/
  );
});

ServerEvents.tags("block", (event) => {
  [/quark:.*blossom.*/, /quark:.*ancient.*/].forEach((item) => {
    event.removeAllTagsFrom(item);
  });

  event.remove("forge:stone", /quark:/);
});
