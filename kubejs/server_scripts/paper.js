ServerEvents.recipes((event) => {
  event.remove({ output: "createindustry:sawdust" });
  [
    "minecraft:book",
    "farmersdelight:book_from_canvas",
    "minecraft:paper",
    "quark:tweaks/crafting/utility/bent/paper",
    "farmersdelight:paper_from_tree_bark",
    "create:pressing/sugar_cane",
    "create_paper_line:mixing/wood_pulp",
    "create_paper_line:mixing/wood_pulp_with_saw_dust",
    "create_paper_line:mixing/wood_pulp_from_saw_dust",
  ].forEach((recipeID) => {
    event.remove({ id: recipeID });
  });

  // Fix Dryer Recipe
  event.remove({ output: "create_paper_line:dryer" });
  event.shaped(Item.of("create_paper_line:dryer"), ["SSS", "   ", "SSS"], {
    S: "#minecraft:wooden_slabs",
  });

  // Wood Pulping
  event.recipes.create.mixing(
    [Fluid.of("create_paper_line:wood_pulp", 200)],
    [
      Fluid.of("minecraft:water", 250),
      "createindustry:sawdust",
      "farmersdelight:tree_bark",
      "2x farmersdelight:straw",
    ]
  );

  // Replacing create_paper_line:wood_chips with farmsdelight:tree_bark
  event.replaceInput(
    { input: "create_paper_line:wood_chips" },
    "create_paper_line:wood_chips",
    "farmersdelight:tree_bark"
  );
  event.replaceOutput(
    { output: "create_paper_line:wood_chips" },
    "create_paper_line:wood_chips",
    "farmersdelight:tree_bark"
  );

  // Replace white dye with white dye liquid
  event.remove({ id: "create_paper_line:mixing/whitened_wood_pulp" });
  event.recipes.create.mixing(
    [Fluid.of("create_paper_line:whitened_wood_pulp", 100)],
    [
      Fluid.of("create_paper_line:wood_pulp", 100),
      Fluid.of("kubejs:white_dye_fluid", 500),
    ]
  );

  // Replace frame with supplementalies frame
  event.remove({ output: "create_paper_line:frame" });
  event.replaceInput(
    { input: "create_paper_line:frame" },
    "create_paper_line:frame",
    "supplementaries:timber_frame"
  );

  // Bucket Recipes
  event.recipes.create.filling("create_paper_line:wood_pulp_bucket", [
    Fluid.of("create_paper_line:wood_pulp", 1000),
    "minecraft:bucket",
  ]);
  event.recipes.create.filling("create_paper_line:whitened_wood_pulp_bucket", [
    Fluid.of("create_paper_line:whitened_wood_pulp", 1000),
    "minecraft:bucket",
  ]);

  // Merging Saw Dust
  event.replaceInput(
    { input: "create_paper_line:saw_dust" },
    "create_paper_line:saw_dust",
    "createindustry:sawdust"
  );
  event.replaceOutput(
    { output: "create_paper_line:saw_dust" },
    "create_paper_line:saw_dust",
    "createindustry:sawdust"
  );
});
