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
    event.add("kubejs:steel_armor", item);
  });

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

  [
    "create:track",
    "railways:track_acacia",
    "railways:track_birch",
    "railways:track_dark_oak",
    "railways:track_jungle",
    "railways:track_oak",
    "railways:track_spruce",
    "railways:track_crimson",
    "railways:track_warped",
    "railways:track_blackstone",
    "railways:track_mangrove",
    "railways:track_ender",
  ].forEach((item) => {
    event.add("kubejs:train_tracks", item);
  });

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
  [
    "sophisticatedstorage:limited_gold_barrel_1",
    "sophisticatedstorage:limited_gold_barrel_2",
    "sophisticatedstorage:limited_gold_barrel_3",
    "sophisticatedstorage:limited_gold_barrel_4",
    "sophisticatedstorage:limited_netherite_barrel_1",
    "sophisticatedstorage:limited_netherite_barrel_2",
    "sophisticatedstorage:limited_netherite_barrel_3",
    "sophisticatedstorage:limited_netherite_barrel_4",
  ].forEach((item) => {
    event.add("quests:storage_blocks", item);
  });
});
