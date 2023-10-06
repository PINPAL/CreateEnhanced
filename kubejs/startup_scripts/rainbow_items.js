StartupEvents.registry("block", (event) => {
  event
    .create("rainbow_placard")
    .displayName("Rainbow Placard")
    .material("metal")
    .tagBlock("minecraft:mineable/paxel")
    .defaultCutout();

  event
    .create("rainbow_candle")
    .displayName("Rainbow Candle")
    .material("wool")
    .tagBlock("minecraft:mineable/paxel")
    .defaultCutout();

  event
    .create("rainbow_canvas_sign")
    .displayName("Rainbow Canvas Sign")
    .material("wood")
    .tagBlock("minecraft:mineable/paxel")
    .opaque(false)
    .fullBlock(false)
    .noCollision();

  event
    .create("rainbow_wool")
    .displayName("Rainbow Wool")
    .material("wool")
    .tagBlock("minecraft:mineable/paxel");

  event
    .create("rainbow_concrete")
    .displayName("Rainbow Concrete")
    .material("stone")
    .tagBlock("minecraft:mineable/pickaxe");

  event
    .create("rainbow_valve_handle")
    .displayName("Rainbow Valve Handle")
    .material("stone")
    .tagBlock("minecraft:mineable/pickaxe")
    .defaultCutout();
});

StartupEvents.registry("item", (event) => {
  event.create("rainbow_core").displayName("Rainbow Core").unstackable();
  event.create("rainbow_dye").displayName("Rainbow Dye");
  event.create("rainbow_toolbox").displayName("Rainbow Toolbox").unstackable();
});
