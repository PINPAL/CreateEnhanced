ServerEvents.recipes((event) => {
  // Trader Block
  event.shaped(Item.of("easy_villagers:trader"), ["AAA", "A A", "CPC"], {
    A: "createdeco:andesite_bars",
    C: "create:andesite_casing",
    P: "#minecraft:planks",
  });

  // Breeder
  event.shaped(Item.of("easy_villagers:breeder"), ["AAA", "ABA", "CPC"], {
    A: "createdeco:andesite_bars",
    C: "create:andesite_casing",
    P: "#minecraft:planks",
    B: "#minecraft:beds",
  });

  // Auto Trader
  event.shaped(Item.of("easy_villagers:auto_trader"), ["AAA", "A A", "CNC"], {
    A: "createdeco:brass_bars",
    C: "create:brass_casing",
    N: "minecraft:netherite_block",
  });

  // Converter
  event.shaped(Item.of("easy_villagers:converter"), ["AAA", "ABA", "CNC"], {
    A: "createdeco:brass_bars",
    B: "minecraft:rotten_flesh",
    C: "create:brass_casing",
    N: "#minecraft:planks",
  });

  // Incubator
  event.shaped(Item.of("easy_villagers:incubator"), ["AAA", "ABA", "CNC"], {
    A: "createdeco:andesite_bars",
    B: "#minecraft:wool",
    C: "create:andesite_casing",
    N: "#minecraft:planks",
  });
});

// ============================================================================
// Remove villager trades for tools, armor, and enchantments.
// ============================================================================
// FIXME: THIS IS THE WORKAROUND IMPLEMENTATION:
MoreJSEvents.updateVillagerOffers((event) => {
  // Returns the offers that were added to the villager.
  const newTrades = event.getAddedOffers();
  // Loop each trade
  newTrades.forEach((trade) => {
    // If trade is a tool or armor or enchantment, disable it.
    if (
      trade
        .getOutput()
        .getId()
        .match(
          /_boots|_leggings|_chestplate|_helmet|_sword|_axe|_shovel|_pickaxe|_hoe|enchanted_book|cake/g
        )
    ) {
      trade.setDisabled(true);
      trade.setOutput("minecraft:air");
      trade.setFirstInput("minecraft:air");
      trade.setSecondInput("minecraft:air");
    }
  });
});
