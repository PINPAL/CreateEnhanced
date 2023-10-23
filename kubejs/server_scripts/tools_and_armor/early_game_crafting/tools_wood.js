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

  // Wood Paxel Head
  event
    .shaped("kubejs:wood_head", ["MMM", "MSM", "M M"], {
      M: "#minecraft:planks",
      S: "minecraft:stick",
    })
    .id("kubejs:wood_head_crafting");
  // Wood Blade
  event
    .shapeless("kubejs:wood_blade", [
      "#minecraft:planks",
      "minecraft:stick",
      "#minecraft:planks",
    ])
    .id("kubejs:wood_blade_crafting");
});
