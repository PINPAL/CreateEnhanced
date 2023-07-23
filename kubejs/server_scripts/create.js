ServerEvents.recipes((event) => {
  // Remove Useless
  event.remove({ output: "createaddition:digital_adapter" });

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
    S: "create_dd:steel_sheet",
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

  // Remove Steel & Bronze from Create: Alloyed
  event.remove({ output: "alloyed:steel_ingot" });
  event.remove({ output: "alloyed:steel_nugget" });
  event.remove({ output: "alloyed:steel_sheet" });
  event.remove({ output: "create_dd:steel_block" });
  event.stonecutting("create_dd:steel_block", "#forge:storage_blocks/steel");

  event.remove({ output: "alloyed:bronze_ingot" });
  event.remove({ output: "alloyed:bronze_nugget" });
  event.remove({ output: "alloyed:bronze_sheet" });
  event.remove({ output: "alloyed:bronze_block" });
  event.stonecutting("alloyed:bronze_block", "#forge:storage_blocks/bronze");
});

// Remove Steel Steel & Bronze from Create: Alloyed
ServerEvents.tags("item", (event) => {
  event.remove("forge:ingots/steel", "alloyed:steel_ingot");
  event.remove("forge:nuggets/steel", "alloyed:steel_nugget");
  event.remove("forge:plates/steel", "alloyed:steel_sheet");

  event.remove("forge:ingots/bronze", "alloyed:bronze_ingot");
  event.remove("forge:nuggets/bronze", "alloyed:bronze_nugget");
  event.remove("forge:plates/bronze", "alloyed:bronze_sheet");
});
