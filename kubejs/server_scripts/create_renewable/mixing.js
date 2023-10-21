ServerEvents.recipes((event) => {
  event.recipes.create.mixing("minecraft:diorite", [
    "minecraft:cobblestone",
    "minecraft:quartz",
  ]);

  event.recipes.create.mixing("minecraft:calcite", [
    "minecraft:diorite",
    "minecraft:quartz",
  ]);

  event.recipes.create.mixing("create:limestone", [
    "minecraft:calcite",
    "minecraft:gravel",
  ]);
});
