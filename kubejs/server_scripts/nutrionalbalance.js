ServerEvents.recipes((event) => {
  // Cooking Pot
  event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
    B: "minecraft:brick",
    W: "minecraft:water_bucket",
    I: "#forge:ingots/iron",
  });
});
