ServerEvents.recipes((event) => {
  event.recipes.create.deploying("metalbarrels:iron_barrel", [
    "minecraft:barrel",
    "create:andesite_alloy",
  ]);
  event.recipes.create.deploying("metalbarrels:gold_barrel", [
    "metalbarrels:iron_barrel",
    "#forge:ingots/copper",
  ]);
  event.recipes.create.deploying("metalbarrels:diamond_barrel", [
    "metalbarrels:gold_barrel",
    "#forge:ingots/brass",
  ]);
});
