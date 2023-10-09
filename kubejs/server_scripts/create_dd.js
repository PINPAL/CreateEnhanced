ServerEvents.recipes((event) => {
  // Fix Mithril Recipe
  event.recipes.create
    .mixing(
      ["create_dd:mithril_ingot"],
      [
        "4x create:experience_nugget",
        "#forge:ingots/steel",
        "#forge:ingots/bronze",
        "create_dd:chromatic_compound",
        Fluid.of("createindustry:liquid_plastic", 1000),
      ]
    )
    .superheated();
});
