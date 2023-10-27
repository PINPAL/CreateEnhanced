// priority: -100

const removedItems = [
  /quark:.*jasper.*/,
  /quark:.*limestone.*/,
  /quark:.*permafrost.*/,
  /quark:.*shale.*/,
  /quark:.*myalite.*/,
  /quark:.*soul_sandstone.*/,
  "quark:iron_rod",

  /createcasing:.*oak_shaft/,
  /createcasing:.*spruce_shaft/,
  /createcasing:.*birch_shaft/,
  /createcasing:.*jungle_shaft/,
  /createcasing:.*acacia_shaft/,
  /createcasing:.*dark_oak_shaft/,
  /createcasing:.*mangrove_shaft/,
  /createcasing:.*crimson_shaft/,
  /createcasing:.*warped_shaft/,
  /createcasing:.*glass_shaft/,
  /createcasing:.*brass_shaft/,

  /quark:.*blossom.*/,
  /everycomp:.*\/q\/.*blossom.*/,
  /supplementaries:quark\/.*blossom.*/,

  /quark:.*ancient.*/,
  /everycomp:.*\/q\/.*ancient.*/,
  /everycomp:.*\/quark\/.*ancient.*/,
  /supplementaries:quark\/.*ancient.*/,

  /quark:.*azalea.*/,
  /everycomp:.*\/q\/.*azalea.*/,
  /everycomp:.*\/quark\/.*azalea.*/,
  /supplementaries:q\/.*azalea.*/,

  /quark:.*corundum.*/,
  /quark:.*crystal_lamp.*/,
  /quark:.*lantern.*/,
  /quark:.*shingles.*/,
  /quark:.*hollow.*log.*/,
  /quark:.*hollow.*stem.*/,
  /everycomp:.*hollow.*log.*/,
  /quark:.*polished.*/,
  /quark:.*egg.*/,
  /quark:.*raw.*/,
  /quark:.*diamond.*/,
  /quark:.*rang/,
  "quark:forgotten_hat",

  /.*spawn_egg.*/,

  /minecraft:.*pickaxe.*/,
  /minecraft:.*shovel.*/,
  /minecraft:.*axe.*/,
  "minecraft:elytra",

  "minecraft:golden_sword",
  "minecraft:golden_hoe",
  "minecraft:golden_chestplate",
  "minecraft:golden_boots",
  "minecraft:golden_helmet",
  "minecraft:golden_leggings",

  /alloyed:.*pickaxe.*/,
  /alloyed:.*shovel.*/,
  /alloyed:.*axe.*/,
  /alloyed:.*shears.*/,
  /alloyed:.*fishing_rod.*/,

  /metalbarrels:.*_to_.*/,

  "farmersdelight:golden_knife",
  "create_things_and_misc:zinc_knife",
  "create_things_and_misc:brass_knife",
  "create_things_and_misc:cherry_sail",
  "create_things_and_misc:chorus_sail",
  "create_things_and_misc:jaboticaba_sail",
  "create_things_and_misc:ramboutan_sail",

  /supplementaries:.*present.*/,
  /supplementaries:.*lantern.*/,
  /supplementaries:.*lapis.*/,
  /supplementaries:.*bomb.*/,
  /supplementaries:.*bamboo_spikes.*/,
  "supplementaries:sconce_nether_brass",

  "createaddition:electrum_ingot",
  "createaddition:electrum_nugget",
  "createaddition:electrum_sheet",
  "createaddition:electrum_wire",
  "createaddition:electrum_spool",
  "createaddition:zinc_sheet",

  "create_dd:deforester_saw",

  "createdeco:zinc_sheet",

  /createindustry:.*concrete.*/,
  /v_slab_compat:createindustry\/.*concrete.*/,
  "createindustry:factory_floor",
  "createindustry:factory_floor_slab",
  /v_slab_compat:createindustry\/.*factory_floor.*/,

  /refinedstorage:.*disk_manipulator.*/,
  /refinedstorage:.*network.*/,
  /refinedstorage:.*security_manager.*/,
  /refinedstorage:.*relay.*/,

  "wands:stone_wand",
  "wands:iron_wand",
  "wands:diamond_wand",

  /sophisticatedstorage:.*iron.*/,
  /sophisticatedstorage:.*diamond.*/,
  /sophisticatedstorage:.*tier_upgrade.*/,
  /sophisticatedstorage:.*shulker_box.*/,

  /storagedrawers:.*half_drawer.*/,
  /storagedrawers:.*trim.*/,
  /everycomp:sd\/.*half_drawer.*/,
  /everycomp:sd\/.*trim.*/,

  "metalbarrels:copper_barrel",
  "create:copper_backtank_placeable",
];

removedItems.forEach((item) => {
  ServerEvents.tags("item", (event) => {
    event.removeAllTagsFrom(item);
  });
  ServerEvents.tags("block", (event) => {
    event.removeAllTagsFrom(item);
  });
});
