ServerEvents.recipes((event) => {
  event.remove({ output: "nutritionalbalance:lunchbox" });

  // Cooking Pot
  event.remove({ output: "farmersdelight:cooking_pot" });
  event.shaped(Item.of("farmersdelight:cooking_pots"), ["B B", "IWI", "III"], {
    B: "minecraft:brick",
    W: "minecraft:water_bucket",
    I: "#forge:ingots/iron",
  });
});
