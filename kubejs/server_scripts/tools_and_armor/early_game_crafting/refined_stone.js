ServerEvents.recipes((event) => {
  // Refined Stone
  event.recipes.create
    .milling("kubejs:refined_stone", "#forge:cobblestone")
    .id("kubejs:refined_stone_manual_only");
});
