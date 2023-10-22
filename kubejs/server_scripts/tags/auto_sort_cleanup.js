// priority: -1

// fix incorrect items in sorting categories
ServerEvents.tags("item", (event) => {
  event.remove("as:diamond", "easypaxellite:diamond_paxel");
  event.add("as:steel", "easypaxellite:diamond_paxel");
  event.remove("as:netherite", "easypaxellite:netherite_paxel");
  event.add("as:diamond", "easypaxellite:netherite_paxel");

  event.remove("as:iron", /storagedrawers:.*_storage_upgrade/);
  event.remove("as:gold", /storagedrawers:.*_storage_upgrade/);
  event.remove("as:diamond", /storagedrawers:.*_storage_upgrade/);
  event.remove("as:netherite", /storagedrawers:.*_storage_upgrade/);
  event.remove("as:emerald", /storagedrawers:.*_storage_upgrade/);

  event.remove("as:azalea", /flowering_azalea($|_)/);
  event.add("as:flowering_azalea", /flowering_azalea($|_)/);

  event.remove("as:oak", /dark_oak($|_)/);
  event.add("as:dark_oak", /dark_oak($|_)/);

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
