ServerEvents.recipes((event) => {
  event.recipes.create.deploying("metalbarrels:iron_barrel", [
    "minecraft:barrel",
    "create:andesite_alloy",
  ]);
  event.recipes.create.deploying("metalbarrels:wood_to_iron", [
    "minecraft:stick",
    "create:andesite_alloy",
  ]);

  event.recipes.create.deploying("metalbarrels:gold_barrel", [
    "metalbarrels:iron_barrel",
    "#forge:ingots/copper",
  ]);
  event.recipes.create.deploying("metalbarrels:iron_to_gold", [
    "minecraft:stick",
    "#forge:ingots/copper",
  ]);

  event.recipes.create.deploying("metalbarrels:diamond_barrel", [
    "metalbarrels:gold_barrel",
    "#forge:ingots/brass",
  ]);
  event.recipes.create.deploying("metalbarrels:gold_to_diamond", [
    "minecraft:stick",
    "#forge:ingots/brass",
  ]);
});
