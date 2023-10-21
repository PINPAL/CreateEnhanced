ServerEvents.recipes((event) => {
  event.recipes.create.compacting("minecraft:tuff", [
    Fluid.of("minecraft:lava", 1000),
    "create:scoria",
    "minecraft:cobbled_deepslate",
  ]);

  event.recipes.create.compacting("minecraft:prismarine_bricks", [
    "2x minecraft:prismarine",
  ]);

  event.recipes.create
    .compacting("minecraft:deepslate", [
      "4x minecraft:cobblestone",
      Fluid.of("minecraft:lava", 2000),
    ])
    .heated();

  event.recipes.create.compacting("create:veridum", [
    "2x create:tuff",
    "create:limestone",
    Fluid.of("minecraft:lava", 1000),
  ]);

  event.recipes.create.compacting("create:ochrum", [
    "2x create:tuff",
    "minecraft:granite",
    Fluid.of("minecraft:lava", 1000),
  ]);

  event.recipes.create.compacting("create:crimsite", [
    "2x create:tuff",
    "minecraft:diorite",
    Fluid.of("minecraft:lava", 1000),
  ]);

  event.recipes.create.compacting("create:asurine", [
    "2x create:tuff",
    "minecraft:andesite",
    Fluid.of("minecraft:lava", 1000),
  ]);
});
