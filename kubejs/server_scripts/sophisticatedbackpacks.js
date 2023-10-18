ServerEvents.recipes((event) => {
  // Backpack Base
  // Upgrades in kubejs/server_scripts/tool_upgrades.js
  event.shaped("sophisticatedbackpacks:backpack", ["SLS", "SCS", "LLL"], {
    S: "#forge:string",
    L: "#forge:leather",
    C: "#forge:chests/wooden",
  });

  // Pickup Upgrade
  event.shaped(
    "sophisticatedbackpacks:advanced_pickup_upgrade",
    ["SPS", "GUG", "ZDZ"],
    {
      S: "#forge:string",
      P: "minecraft:sticky_piston",
      G: "#forge:ingots/gold",
      U: "sophisticatedstorage:upgrade_base",
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
      U: "sophisticatedstorage:upgrade_base",
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
      U: "sophisticatedstorage:upgrade_base",
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
      U: "sophisticatedstorage:upgrade_base",
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
      U: "sophisticatedstorage:upgrade_base",
    }
  );

  // Stonecutter Upgrade
  event.shaped(
    "sophisticatedbackpacks:stonecutter_upgrade",
    ["SCS", "CUC", "SCS"],
    {
      S: "#forge:string",
      C: "minecraft:stonecutter",
      U: "sophisticatedstorage:upgrade_base",
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
      U: "sophisticatedstorage:upgrade_base",
      Z: "#forge:plates/steel",
      D: "minecraft:diamond",
    }
  );

  // Everlasting Upgrade
  event.shaped(
    "sophisticatedbackpacks:everlasting_upgrade",
    ["CNC", "NUN", "CNC"],
    {
      U: "sophisticatedstorage:upgrade_base",
      C: "minecraft:end_crystal",
      N: "minecraft:nether_star",
    }
  );
});
