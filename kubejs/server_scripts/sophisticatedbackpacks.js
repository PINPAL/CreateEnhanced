ServerEvents.recipes((event) => {
  // Backpack Base
  // Upgrades in kubejs/server_scripts/tool_upgrades.js
  event.shaped("sophisticatedbackpacks:backpack", ["SLS", "SCS", "LLL"], {
    S: "#forge:string",
    L: "#forge:leather",
    C: "#forge:chests/wooden",
  });

  // Upgrade Base
  event.shapeless("sophisticatedbackpacks:upgrade_base", [
    "minecraft:paper",
    "2x #forge:string",
    "#minecraft:planks",
  ]);

  // Pickup Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_pickup_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:string",
      P: "minecraft:sticky_piston",
      G: "#forge:ingots/gold",
      U: "sophisticatedbackpacks:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Void Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_void_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:string",
      P: "minecraft:ender_pearl",
      G: "#forge:obsidian",
      U: "sophisticatedbackpacks:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Restock Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_restock_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:chests/wooden",
      P: "minecraft:sticky_piston",
      G: "#forge:ingots/gold",
      U: "sophisticatedbackpacks:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Refill Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_refill_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:string",
      P: "minecraft:ender_pearl",
      G: "#forge:chests/wooden",
      U: "sophisticatedbackpacks:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Crafting Upgrade
  event.shaped(
    "sophisticatedbackpacks:crafting_upgrade",
    ["SCS", "CUC", "SCS"],
    {
      S: "#forge:string",
      C: "minecraft:crafting_table",
      U: "sophisticatedbackpacks:upgrade_base",
    }
  );

  // Stonecutter Upgrade
  event.shaped(
    "sophisticatedbackpacks:stonecutter_upgrade",
    ["SCS", "CUC", "SCS"],
    {
      S: "#forge:string",
      C: "minecraft:stonecutter",
      U: "sophisticatedbackpacks:upgrade_base",
    }
  );

  // Deposit Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_deposit_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:string",
      P: "#forge:chests/wooden",
      G: "minecraft:piston",
      U: "sophisticatedbackpacks:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Everlasting Upgrade
  event.shaped(
    "sophisticatedbackpacks:everlasting_upgrade",
    ["CNC", "NUN", "CNC"],
    {
      U: "sophisticatedbackpacks:upgrade_base",
      C: "minecraft:end_crystal",
      N: "minecraft:nether_star",
    }
  );
});
