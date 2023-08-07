ServerEvents.recipes((event) => {
  const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ].forEach((color) => {
    event.remove({ output: "minecraft:" + color + "_concrete_powder" });
    event.remove({ output: "minecraft:" + color + "_stained_glass" });
    event.remove({ output: "minecraft:" + color + "_stained_glass_pane" });
    event.remove({ output: "quark:" + color + "_framed_glass" });
    event.remove({ output: "quark:" + color + "_framed_glass_pane" });
    event.remove({ output: "farmersdelight:" + color + "_canvas_sign" });
    event.remove({ output: "minecraft:" + color + "_wool" });
    event.remove({ output: "minecraft:" + color + "_carpet" });
    event.remove({ output: "minecraft:" + color + "_terracotta" });
    event.remove({ output: "minecraft:" + color + "_bed" });
    event.remove({ output: "minecraft:" + color + "_shulker_box" });
    event.remove({ output: "minecraft:" + color + "_candle" });
    event.remove({ output: "quark:" + color + "_rune" });
    event.remove({ output: "create:" + color + "_toolbox" });
    event.remove({ output: "supplementaries:candle_holder_" + color });
    event.remove({ output: "createdeco:" + color + "_placard" });
    event.remove({ output: "minecraft:" + color + "_banner" });
    event.remove({ output: "create:" + color + "_valve_handle" });

    // Dye Fluid
    event.recipes.create.mixing(
      [Fluid.of("kubejs:" + color + "_dye_fluid", 1000)],
      ["minecraft:" + color + "_dye", Fluid.of("water", 1000)]
    );

    // Concrete Powder
    event.recipes.create.mixing(
      ["minecraft:" + color + "_concrete_powder"],
      [
        "createindustry:concrete",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    // Stained Glass
    event.recipes.create.mixing(
      ["minecraft:" + color + "_stained_glass"],
      ["minecraft:glass", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Stained Glass Pane
    event.recipes.create.mixing(
      ["minecraft:" + color + "_stained_glass_pane"],
      ["minecraft:glass_pane", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    event.recipes.shapeless("16x minecraft:" + color + "_stained_glass_pane", [
      "6x minecraft:" + color + "_stained_glass",
    ]);
    // Framed Glass
    event.recipes.create.mixing(
      ["quark:" + color + "_framed_glass"],
      ["quark:framed_glass", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Framed Glass Pane
    event.recipes.create.mixing(
      ["quark:" + color + "_framed_glass_pane"],
      [
        "quark:framed_glass_pane",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    event.recipes.shapeless("16x quark:" + color + "_framed_glass_pane", [
      "6x quark:" + color + "_framed_glass",
    ]);
    // Toolbox
    event.recipes.create.mixing(
      ["create:" + color + "_toolbox"],
      ["create:brown_toolbox", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Canvas Sign
    event.recipes.create.mixing(
      ["farmersdelight:" + color + "_canvas_sign"],
      [
        "farmersdelight:canvas_sign",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    // Wool
    event.recipes.create.mixing(
      ["minecraft:" + color + "_wool"],
      ["minecraft:white_wool", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Carpet
    event.recipes.create.mixing(
      ["minecraft:" + color + "_carpet"],
      [
        "minecraft:white_carpet",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    event.recipes.shapeless("3x minecraft:" + color + "_carpet", [
      "2x minecraft:" + color + "_wool",
    ]);
    // Terracotta
    event.recipes.create.mixing(
      ["minecraft:" + color + "_terracotta"],
      ["minecraft:terracotta", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Bed
    event.recipes.create.mixing(
      ["minecraft:" + color + "_bed"],
      ["minecraft:white_bed", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    event.recipes.shapeless("minecraft:" + color + "_bed", [
      "3x minecraft:" + color + "_wool",
      "3x #minecraft:planks",
    ]);
    // Shulker Box
    event.recipes.create.mixing(
      ["minecraft:" + color + "_shulker_box"],
      ["minecraft:shulker_box", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Banner
    event.recipes.create.mixing(
      ["minecraft:" + color + "_banner"],
      [
        "minecraft:white_banner",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    event.shaped("minecraft:" + color + "_banner", ["WWW", "WWW", " S "], {
      W: "minecraft:" + color + "_wool",
      S: "minecraft:stick",
    });
    // Candle
    event.recipes.create.mixing(
      ["minecraft:" + color + "_candle"],
      ["minecraft:candle", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Supplementaries Candle Holder
    event.recipes.create.mixing(
      ["supplementaries:candle_holder_" + color],
      [
        "supplementaries:candle_holder",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
    event.recipes.shapeless("supplementaries:candle_holder_" + color, [
      "1x minecraft:" + color + "_candle",
      "1x #forge:ingots/iron",
    ]);
    // Quark Runes
    event.recipes.create.mixing(
      ["quark:" + color + "_rune"],
      ["quark:blank_rune", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
    );
    // Create Placard
    if (color != "white") {
      event.recipes.create.mixing(
        ["createdeco:" + color + "_placard"],
        ["create:placard", Fluid.of("kubejs:" + color + "_dye_fluid", 125)]
      );
    }
    // Create Valve Handle
    event.recipes.create.mixing(
      ["create:" + color + "_valve_handle"],
      [
        "create:copper_valve_handle",
        Fluid.of("kubejs:" + color + "_dye_fluid", 125),
      ]
    );
  });
});
