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

  // Paxel
  event.modify("easypaxellite:wood_paxel", (item) => {
    item.attackDamage = 2;
  });
  event.modify("easypaxellite:stone_paxel", (item) => {
    item.attackDamage = 3;
  });
  event.modify("easypaxellite:golden_paxel", (item) => {
    item.maxDamage = 500;
    item.digSpeed = 6;
    item.attackDamage = 4;
  });
  event.modify("easypaxellite:iron_paxel", (item) => {
    item.attackDamage = 5;
  });
  event.modify("easypaxellite:diamond_paxel", (item) => {
    item.attackDamage = 6;
  });
  event.modify("easypaxellite:netherite_paxel", (item) => {
    item.attackDamage = 7;
  });
  event.modify("easypaxellite:tempered_netherite_paxel", (item) => {
    item.attackDamage = 8;
  });
});
