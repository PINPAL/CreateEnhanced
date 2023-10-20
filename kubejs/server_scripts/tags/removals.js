// priority: -1

const removedItems = [
  "quark:jasper",
  "quark:limestone",
  "quark:permafrost",
  "quark:shale",
  "quark:myalite",
  "quark:iron_rod",
  /quark:.*blossom.*/,
  /quark:.*ancient.*/,
  /quark:.*corundum.*/,
  /quark:.*crystal_lamp.*/,
  /quark:.*lantern.*/,
  /quark:.*shingles.*/,
  /quark:.*hollow.*log.*/,
  /everycomp:.*hollow.*log.*/,
  /quark:.*polished.*/,
  /quark:.*egg.*/,
  /quark:.*raw.*/,
  /quark:.*diamond.*/,
  /quark:.*rang/,

  /.*spawn_egg.*/,

  /minecraft:.*pickaxe.*/,
  /minecraft:.*shovel.*/,
  /minecraft:.*axe.*/,
  /alloyed:.*pickaxe.*/,
  /alloyed:.*shovel.*/,
  /alloyed:.*axe.*/,

  /supplementaries:.*present.*/,
  /supplementaries:.*lantern.*/,
  /supplementaries:.*lapis.*/,
  /supplementaries:.*bomb.*/,
  /supplementaries:.*bamboo_spikes.*/,

  /createindustry:.*concrete.*/,

  /refinedstorage:.*disk_manipulator.*/,
  /refinedstorage:.*network.*/,
  /refinedstorage:.*security_manager.*/,
  /refinedstorage:.*relay.*/,

  /wands:.*iron_wand.*/,

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
