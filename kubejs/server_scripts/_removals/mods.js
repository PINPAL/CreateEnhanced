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
  "melter",
];

ServerEvents.recipes((event) => {
  modsToRemove.forEach((mod) => {
    event.remove({ mod: mod });
  });
});
