// priority: -1

const removedItems = [
  /quark:.*jasper.*/,
  /quark:.*limestone.*/,
  /quark:.*permafrost.*/,
  /quark:.*shale.*/,
  /quark:.*myalite.*/,
  /quark:.*soul_sandstone.*/,
  "quark:iron_rod",
  /quark:.*blossom.*/,
  /quark:.*ancient.*/,
  /quark:.*azalea.*/,
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
  /alloyed:.*pickaxe.*/,
  /alloyed:.*shovel.*/,
  /alloyed:.*axe.*/,
  /alloyed:.*shears.*/,
  /alloyed:.*fishing_rod.*/,

  "farmersdelight:golden_knife",
  "create_things_and_misc:zinc_knife",
  "create_things_and_misc:brass_knife",

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

  "createdeco:zinc_sheet",

  /createindustry:.*concrete.*/,

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
];

removedItems.forEach((item) => {
  ServerEvents.tags("item", (event) => {
    event.removeAllTagsFrom(item);
  });
  ServerEvents.tags("block", (event) => {
    event.removeAllTagsFrom(item);
  });
});

// fix incorrect items in sorting categories
ServerEvents.tags("item", (event) => {
  event.remove("as:diamond", "easypaxellite:diamond_paxel");
  event.add("as:steel", "easypaxellite:diamond_paxel");
  event.remove("as:netherite", "easypaxellite:netherite_paxel");
  event.add("as:diamond", "easypaxellite:netherite_paxel");

  let copperStuffs = [
    "minecraft:golden_helmet",
    "minecraft:golden_chestplate",
    "minecraft:golden_leggings",
    "minecraft:golden_boots",
    "minecraft:golden_sword",
    "minecraft:golden_hoe",
    "easypaxellite:golden_paxel",
    "minecraft:golden_horse_armor",
  ];
  copperStuffs.forEach((item) => {
    event.remove("minecraft:piglin_loved", item);
    event.remove("as:gold", item);
    event.add("as:copper", item);
  });
});
