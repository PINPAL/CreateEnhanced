ServerEvents.recipes((event) => {
  // Vertical Redstone (Cog Block)
  event.remove({ output: "supplementaries:cog_block" });
  event.shaped(
    Item.of("supplementaries:cog_block", 8), // arg 1: output
    [" C ", "BRB", " C "],
    {
      B: "createdeco:brass_bars",
      C: "create:brass_casing",
      R: "minecraft:redstone",
    }
  );
  // Remove Items
  event.remove({ id: "supplementaries:item_lore_display" });
  event.remove({ id: "supplementaries:crank" });
  event.remove({ id: "supplementaries:faucet" });
});
