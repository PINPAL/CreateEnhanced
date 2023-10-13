ServerEvents.recipes((event) => {
  // Wooden Tier Recipes
  event.shaped("easypaxellite:wood_paxel", ["AAA", " B ", " B "], {
    A: "#minecraft:planks",
    B: "#forge:rods/wooden",
  });
  event.shaped("minecraft:wooden_hoe", ["AA ", " B ", " B "], {
    A: "#minecraft:planks",
    B: "#forge:rods/wooden",
  });
  event.shaped("minecraft:wooden_sword", [" A ", " A ", " B "], {
    A: "#minecraft:planks",
    B: "#forge:rods/wooden",
  });
  event.shaped("farmersdelight:flint_knife", [" A ", " A ", " B "], {
    A: "minecraft:flint",
    B: "#forge:rods/wooden",
  });
  // Leather Armor
  event.shaped("minecraft:leather_helmet", ["AAA", "A A"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_chestplate", ["A A", "AAA", "AAA"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_leggings", ["AAA", "A A", "A A"], {
    A: "#forge:leather",
  });
  event.shaped("minecraft:leather_boots", ["A A", "A A"], {
    A: "#forge:leather",
  });
  // Refined Stone
  event.recipes.create.milling("kubejs:refined_stone", "#forge:cobblestone");
  // Stone Paxel
  event.shaped("easypaxellite:stone_paxel", ["SSS", "SPS", " R "], {
    S: "kubejs:refined_stone",
    P: "easypaxellite:wood_paxel",
    R: "#forge:rods/wooden",
  });
  // Copper Paxel
  event.shaped("easypaxellite:golden_paxel", ["SSS", "SPS", " R "], {
    S: "#forge:plates/copper",
    P: "easypaxellite:stone_paxel",
    R: "#forge:rods/wooden",
  });
  // Stone Sword
  event.shaped("minecraft:stone_sword", [" S ", " S ", " P "], {
    S: "kubejs:refined_stone",
    P: "minecraft:wooden_sword",
  });
  // Copper Sword
  event.shaped("minecraft:golden_sword", [" S ", " S ", " P "], {
    S: "#forge:ingots/copper",
    P: "minecraft:stone_sword",
  });
  // Copper Knife
  event.shaped("create_things_and_misc:copper_knife", [" C ", " C ", " K "], {
    C: "#forge:ingots/copper",
    K: "farmersdelight:flint_knife",
  });
  // Stone Hoe
  event.shaped("minecraft:stone_hoe", ["SS ", " P ", " R "], {
    S: "kubejs:refined_stone",
    P: "minecraft:wooden_hoe",
    R: "#forge:rods/wooden",
  });
  // Copper Sword
  event.shaped("minecraft:golden_hoe", ["SS ", " P ", " R "], {
    S: "#forge:ingots/copper",
    P: "minecraft:stone_hoe",
    R: "#forge:rods/wooden",
  });
  // Create Netherite Armor Upgrades
  event.smithing(
    "create:netherite_diving_helmet",
    "minecraft:netherite_helmet",
    "create:copper_diving_helmet"
  );
  event.smithing(
    "create:netherite_diving_boots",
    "minecraft:netherite_boots",
    "create:copper_diving_boots"
  );
  event.smithing(
    "create:netherite_backtank",
    "minecraft:netherite_chestplate",
    "create:copper_backtank"
  );
  // Call sequenced assembly upgrade recipes
  upgradingItemsRecipes(event);
});

// Create sequenced assembly recipe for upgrading items
// =====================================================
function upgradingItemsRecipes(event) {
  /**
   * @param {Item} input_item    the input item
   * @param {Item} output_item   the output item
   * @param {Item} upgrade_item  the item used to upgrade
   * @param {Number} upgrade_cost  the number upgrade items needed to upgrade
   */
  [
    // Horse Armor
    {
      input_item: "minecraft:leather_horse_armor",
      output_item: "minecraft:golden_horse_armor",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:golden_horse_armor",
      output_item: "minecraft:iron_horse_armor",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:iron_horse_armor",
      output_item: "minecraft:diamond_horse_armor",
      upgrade_item: "#forge:gems/diamond",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:diamond_horse_armor",
      output_item: "netherite_horse_armor:netherite_horse_armor",
      upgrade_item: "#forge:ingots/netherite",
      upgrade_cost: 1,
    },
    // Backpack
    {
      input_item: "sophisticatedbackpacks:backpack",
      output_item: "sophisticatedbackpacks:iron_backpack",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 12,
    },
    {
      input_item: "sophisticatedbackpacks:iron_backpack",
      output_item: "sophisticatedbackpacks:gold_backpack",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 12,
    },
    {
      input_item: "sophisticatedbackpacks:gold_backpack",
      output_item: "sophisticatedbackpacks:diamond_backpack",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 12,
    },
    {
      input_item: "sophisticatedbackpacks:diamond_backpack",
      output_item: "sophisticatedbackpacks:netherite_backpack",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 6,
    },
    // Knife
    {
      input_item: "farmersdelight:flint_knife",
      output_item: "create_things_and_misc:copper_knife",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 2,
    },
    {
      input_item: "create_things_and_misc:copper_knife",
      output_item: "farmersdelight:iron_knife",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 2,
    },
    {
      input_item: "farmersdelight:iron_knife",
      output_item: "alloyed:steel_knife",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 2,
    },
    {
      input_item: "alloyed:steel_knife",
      output_item: "farmersdelight:diamond_knife",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 2,
    },
    {
      input_item: "farmersdelight:diamond_knife",
      output_item: Item.of(
        "farmersdelight:netherite_knife",
        "{Unbreakable:1b}"
      ),
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Helmet
    {
      input_item: "minecraft:leather_helmet",
      output_item: "minecraft:golden_helmet",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 5,
    },
    {
      input_item: "minecraft:golden_helmet",
      output_item: "minecraft:chainmail_helmet",
      upgrade_item: "minecraft:chain",
      upgrade_cost: 5,
    },
    {
      input_item: "minecraft:chainmail_helmet",
      output_item: "minecraft:iron_helmet",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 5,
    },
    {
      input_item: "minecraft:iron_helmet",
      output_item: "alloyed:steel_helmet",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 5,
    },
    {
      input_item: "alloyed:steel_helmet",
      output_item: "minecraft:diamond_helmet",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 5,
    },
    {
      input_item: "minecraft:diamond_helmet",
      output_item: "minecraft:netherite_helmet",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Chestplate
    {
      input_item: "minecraft:leather_chestplate",
      output_item: "minecraft:golden_chestplate",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 8,
    },
    {
      input_item: "minecraft:golden_chestplate",
      output_item: "minecraft:chainmail_chestplate",
      upgrade_item: "minecraft:chain",
      upgrade_cost: 8,
    },
    {
      input_item: "minecraft:chainmail_chestplate",
      output_item: "minecraft:iron_chestplate",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 8,
    },
    {
      input_item: "minecraft:iron_chestplate",
      output_item: "alloyed:steel_chestplate",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 8,
    },
    {
      input_item: "alloyed:steel_chestplate",
      output_item: "minecraft:diamond_chestplate",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 8,
    },
    {
      input_item: "minecraft:diamond_chestplate",
      output_item: "minecraft:netherite_chestplate",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Leggings
    {
      input_item: "minecraft:leather_leggings",
      output_item: "minecraft:golden_leggings",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 7,
    },
    {
      input_item: "minecraft:golden_leggings",
      output_item: "minecraft:chainmail_leggings",
      upgrade_item: "minecraft:chain",
      upgrade_cost: 7,
    },
    {
      input_item: "minecraft:chainmail_leggings",
      output_item: "minecraft:iron_leggings",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 7,
    },
    {
      input_item: "minecraft:iron_leggings",
      output_item: "alloyed:steel_leggings",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 7,
    },
    {
      input_item: "alloyed:steel_leggings",
      output_item: "minecraft:diamond_leggings",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 7,
    },
    {
      input_item: "minecraft:diamond_leggings",
      output_item: "minecraft:netherite_leggings",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Boots
    {
      input_item: "minecraft:leather_boots",
      output_item: "minecraft:golden_boots",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 4,
    },
    {
      input_item: "minecraft:golden_boots",
      output_item: "minecraft:chainmail_boots",
      upgrade_item: "minecraft:chain",
      upgrade_cost: 4,
    },
    {
      input_item: "minecraft:chainmail_boots",
      output_item: "minecraft:iron_boots",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 4,
    },
    {
      input_item: "minecraft:iron_boots",
      output_item: "alloyed:steel_boots",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 4,
    },
    {
      input_item: "alloyed:steel_boots",
      output_item: "minecraft:diamond_boots",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 4,
    },
    {
      input_item: "minecraft:diamond_boots",
      output_item: "minecraft:netherite_boots",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Sword
    {
      input_item: "minecraft:wooden_sword",
      output_item: "minecraft:stone_sword",
      upgrade_item: "kubejs:refined_stone",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:golden_sword",
      output_item: "minecraft:iron_sword",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:stone_sword",
      output_item: "minecraft:golden_sword",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:iron_sword",
      output_item: "alloyed:steel_sword",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 2,
    },
    {
      input_item: "alloyed:steel_sword",
      output_item: "minecraft:diamond_sword",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:diamond_sword",
      output_item: "minecraft:netherite_sword",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Hoe
    {
      input_item: "minecraft:wooden_hoe",
      output_item: "minecraft:stone_hoe",
      upgrade_item: "kubejs:refined_stone",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:stone_hoe",
      output_item: "minecraft:golden_hoe",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:golden_hoe",
      output_item: "minecraft:iron_hoe",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:iron_hoe",
      output_item: "alloyed:steel_hoe",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 2,
    },
    {
      input_item: "alloyed:steel_hoe",
      output_item: "minecraft:diamond_hoe",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 2,
    },
    {
      input_item: "minecraft:diamond_hoe",
      output_item: "minecraft:netherite_hoe",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 1,
    },
    // Paxel
    {
      input_item: "easypaxellite:wood_paxel",
      output_item: "easypaxellite:stone_paxel",
      upgrade_item: "kubejs:refined_stone",
      upgrade_cost: 5,
    },
    {
      input_item: "easypaxellite:stone_paxel",
      output_item: "easypaxellite:golden_paxel",
      upgrade_item: "#forge:ingots/copper",
      upgrade_cost: 5,
    },
    {
      input_item: "easypaxellite:golden_paxel",
      output_item: "easypaxellite:iron_paxel",
      upgrade_item: "#forge:ingots/iron",
      upgrade_cost: 7,
    },
    {
      input_item: "easypaxellite:iron_paxel",
      output_item: "easypaxellite:diamond_paxel",
      upgrade_item: "#forge:ingots/steel",
      upgrade_cost: 7,
    },
    {
      input_item: "easypaxellite:diamond_paxel",
      output_item: "easypaxellite:netherite_paxel",
      upgrade_item: "minecraft:diamond",
      upgrade_cost: 7,
    },
    {
      input_item: "easypaxellite:netherite_paxel",
      output_item: "easypaxellite:tempered_netherite_paxel",
      upgrade_item: "minecraft:netherite_ingot",
      upgrade_cost: 3,
    },
  ].forEach((recipe) => {
    event.recipes
      .createSequencedAssembly([recipe.output_item], recipe.input_item, [
        event.recipes.createDeploying(recipe.input_item, [
          recipe.input_item,
          recipe.upgrade_item,
        ]),
      ])
      .transitionalItem(recipe.input_item)
      .loops(recipe.upgrade_cost);
  });
}
