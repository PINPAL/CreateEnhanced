ItemEvents.modification((event) => {
  event.modify("minecraft:golden_sword", (item) => {
    item.maxDamage = 180;
  });
  event.modify("minecraft:golden_hoe", (item) => {
    item.maxDamage = 180;
    item.digSpeed = 6;
  });
  event.modify("minecraft:golden_chestplate", (item) => {
    item.maxDamage = 220;
  });
  event.modify("minecraft:golden_boots", (item) => {
    item.maxDamage = 190;
  });
  event.modify("minecraft:golden_helmet", (item) => {
    item.maxDamage = 150;
  });
  event.modify("minecraft:golden_leggings", (item) => {
    item.maxDamage = 200;
  });

  // Neon Torch
  event.modify("create_things_and_misc:neon_tube", (item) => {
    item.maxDamage = 16;
  });

  // Paxel
  event.modify("easypaxellite:golden_paxel", (item) => {
    item.maxDamage = 500;
    item.digSpeed = 6;
  });
});
