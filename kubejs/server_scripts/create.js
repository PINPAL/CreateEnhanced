ServerEvents.recipes((event) => {
  // Remove
  const itemsToRemove = [
    "create_dd:deforester_saw",
    "createaddition:digital_adapter",
    "createindustry:napalm_bomb",
    "createindustry:napalm_bucket",
    "createindustry:thermite_grenade",
    /createindustry:.*concrete.*/,
    "createindustry:mesh",
    "createindustry:thermite_powder",
    "createindustry:factory_floor",
    "createindustry:factory_floor_slab",
    "createindustry:steel_ingot",
    "createindustry:cast_iron_ingot",
    "createindustry:cast_iron_block",
    "createindustry:heavy_plate",
    "createindustry:steel_scaffolding",
    "createindustry:industrial_barrel",
    "createindustry:caution_block",
  ].forEach((item) => {
    event.remove({ output: item });
  });
  const idsToRemove = [
    "createindustry:mixing/napalm",
    "create:item_application/copper_casing_from_wood_using_deployer",
    "create:item_application/copper_casing_from_log_using_deployer",
    "create:item_application/copper_casing_from_wood",
    "create:item_application/copper_casing_from_log",
  ].forEach((recipeID) => {
    event.remove({ id: recipeID });
  });

  // Concrete
  event.stonecutting(
    "2x createindustry:concrete_slab",
    "createindustry:concrete"
  );
  event.stonecutting(
    "createindustry:concrete_stairs",
    "createindustry:concrete"
  );
  event.stonecutting("createindustry:concrete_wall", "createindustry:concrete");
  event.recipes.create.filling("createindustry:liquid_concrete_bucket", [
    Fluid.of("createindustry:liquid_concrete_fluid", 1000),
    "minecraft:bucket",
  ]);
  event.recipes.create.emptying(
    [
      Fluid.of("createindustry:liquid_concrete_fluid", 1000),
      "minecraft:bucket",
    ],
    "createindustry:liquid_concrete_bucket"
  );

  // Harder steam engine
  event.remove({ id: "create:crafting/kinetics/steam_engine" });
  event.remove({ id: "create_dd:crafting/steam_engine" });
  event.shaped(Item.of("create:steam_engine"), [" G ", "IMS", " C "], {
    G: "create:golden_sheet",
    I: "create_dd:infernal_mechanism",
    M: "create_dd:integrated_mechanism",
    S: "create_dd:sealed_mechanism",
    C: "minecraft:copper_block",
  });

  // Harder Drill
  event.remove({ output: "create:mechanical_drill" });
  event.shaped(Item.of("create:mechanical_drill"), [" A ", "ASA", " C "], {
    A: "create:andesite_alloy",
    S: "#forge:plates/steel",
    C: "create:andesite_casing",
  });

  // Shadow Steel
  event.recipes.create
    .mixing(
      [Item.of("create_dd:shadow_steel")],
      ["minecraft:netherite_block", "8x create:iron_sheet"]
    )
    .superheated();

  // "Harder" Super glue
  event.remove({ id: "create:crafting/kinetics/super_glue" });

  // Fix brass speaker craft
  event.remove({ id: "create_things_and_misc:brass_speaker_craft" });
  event.shaped(
    Item.of("create_things_and_misc:brass_speaker"),
    [" R ", " N ", " R "],
    {
      R: "create:railway_casing",
      N: "minecraft:note_block",
    }
  );

  // Fix slime recipe
  event.remove({ id: "create:crafting/appliances/slime_ball" });
  event.shapeless("minecraft:slime_ball", [
    "minecraft:lime_dye",
    "#forge:dough",
  ]);

  // Nerf Tuff Crusing
  event.remove({ id: "create:crushing/tuff_recycling" });
  event.recipes.create.crushing(
    ["create_dd:potassic_cobble"],
    "#create:stone_types/tuff"
  );

  // Fix Coal Coke
  event.remove({ output: "createindustry:coal_coke" });
  event.recipes.create
    .mixing("createindustry:coal_coke", "#minecraft:coals")
    .heated();

  // Harder steel
  event.remove({ id: "create_dd:compacting/steel_ingot" });
  event.recipes.create
    .compacting("create_dd:steel_ingot", [
      "2x create_dd:industrial_iron_ingot",
      "createindustry:coal_coke",
    ])
    .heated()
    .id("kubejs:steel_ingot");

  // Remove Steel & Bronze from Create: Alloyed
  event.remove({ output: "alloyed:steel_ingot" });
  event.remove({ output: "alloyed:steel_nugget" });
  event.remove({ output: "alloyed:steel_sheet" });
  event.remove({ output: "create_dd:steel_block" });
  event.stonecutting("create_dd:steel_block", "#forge:storage_blocks/steel");
  event.stonecutting(
    "createindustry:steel_block",
    "#forge:storage_blocks/steel"
  );

  event.remove({ output: "alloyed:bronze_ingot" });
  event.remove({ output: "alloyed:bronze_nugget" });
  event.remove({ output: "alloyed:bronze_sheet" });
  event.remove({ output: "alloyed:bronze_block" });
  event.stonecutting("alloyed:bronze_block", "#forge:storage_blocks/bronze");

  // Replace all occurances of "factory must grow steel_block" with #steel_block
  event.replaceInput(
    { input: "createindustry:steel_block" },
    "createindustry:steel_block",
    "#forge:storage_blocks/steel"
  );
  event.replaceInput(
    { input: "createindustry:heavy_plate" },
    "createindustry:heavy_plate",
    "#forge:plates/steel"
  );
  // Fix Steel Mechanism (broken due to heavy_plate replace)
  event.recipes
    .createSequencedAssembly(
      [
        // this is the item that will appear in JEI as the result
        Item.of("createindustry:steel_mechanism").withChance(0.76),
        // the rest of these items will part of the scrap
        Item.of("#forge:plates/steel").withChance(0.08),
        Item.of("#forge:ingots/steel").withChance(0.08),
        Item.of("#forge:ingots/aluminum").withChance(0.05),
        Item.of("createindustry:industrial_pipe").withChance(0.03),
      ],
      // the input
      "#forge:plates/steel",
      [
        event.recipes.createDeploying(
          "createindustry:unprocessed_steel_mechanism",
          ["createindustry:unprocessed_steel_mechanism", "#forge:ingots/steel"]
        ),
        event.recipes.createDeploying(
          "createindustry:unprocessed_steel_mechanism",
          [
            "createindustry:unprocessed_steel_mechanism",
            "#forge:ingots/aluminum",
          ]
        ),
        event.recipes.createDeploying(
          "createindustry:unprocessed_steel_mechanism",
          ["createindustry:unprocessed_steel_mechanism", "createindustry:screw"]
        ),
        event.recipes.createDeploying(
          "createindustry:unprocessed_steel_mechanism",
          [
            "createindustry:unprocessed_steel_mechanism",
            "createindustry:screwdriver",
          ]
        ),
      ]
    )
    .transitionalItem("createindustry:unprocessed_steel_mechanism")
    .loops(3);
});

// Fix Steel/Bronze/Cast Iron Conflicts
ServerEvents.tags("item", (event) => {
  // Alloyed: Steel
  event.remove("forge:ingots/steel", "alloyed:steel_ingot");
  event.remove("forge:nuggets/steel", "alloyed:steel_nugget");
  event.remove("forge:plates/steel", "alloyed:steel_sheet");
  // Alloyed: Bronze
  event.remove("forge:ingots/bronze", "alloyed:bronze_ingot");
  event.remove("forge:nuggets/bronze", "alloyed:bronze_nugget");
  event.remove("forge:plates/bronze", "alloyed:bronze_sheet");

  // Create: The Factory Must Grow
  event.remove("forge:ingots/steel", "createindustry:steel_ingot");
  event.remove("forge:ingots/cast_iron", "createindustry:cast_iron_ingot");
  event.remove("forge:blocks/cast_iron", "createindustry:cast_iron_block");
  event.add("forge:storage_blocks/steel", "createindustry:steel_block");
});
