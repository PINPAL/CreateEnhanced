ItemEvents.modification((event) => {
  event.modify("minecraft:golden_sword", (item) => {
    maxDamage = 180;
  });
  event.modify("minecraft:golden_hoe", (item) => {
    maxDamage = 180;
    digSpeed = 6;
  });
  event.modify("minecraft:golden_chestplate", (item) => {
    maxDamage = 220;
  });
  event.modify("minecraft:golden_boots", (item) => {
    maxDamage = 190;
  });
  event.modify("minecraft:golden_helmet", (item) => {
    maxDamage = 150;
  });
  event.modify("minecraft:golden_leggings", (item) => {
    maxDamage = 200;
  });

  // Paxel
  event.modify("easypaxellite:wood_paxel", (item) => {
    attackDamage = 2;
  });
  event.modify("easypaxellite:stone_paxel", (item) => {
    attackDamage = 3;
  });
  event.modify("easypaxellite:golden_paxel", (item) => {
    maxDamage = 500;
    digSpeed = 6;
    attackDamage = 4;
  });
  event.modify("easypaxellite:iron_paxel", (item) => {
    attackDamage = 5;
  });
  event.modify("easypaxellite:diamond_paxel", (item) => {
    attackDamage = 6;
  });
  event.modify("easypaxellite:netherite_paxel", (item) => {
    attackDamage = 7;
  });
  event.modify("easypaxellite:tempered_netherite_paxel", (item) => {
    attackDamage = 8;
  });
});
