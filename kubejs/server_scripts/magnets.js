ServerEvents.recipes((event) => {
  // Demagnetization Coil
  event.shaped(
    Item.of("simplemagnets:advanced_demagnetization_coil"),
    [" E ", " S ", " B "],
    {
      E: "create:electron_tube",
      S: "create:shaft",
      B: "create:brass_casing",
    }
  );

  // Magnet
  event.recipes.createMechanicalCrafting(
    "simplemagnets:advancedmagnet",
    ["I I", "E E", "R R", "RQR"],
    {
      I: "create:iron_sheet",
      E: "create:electron_tube",
      R: "create:polished_rose_quartz",
      Q: "create_things_and_misc:rose_quartz_sheet",
    }
  );
});

ServerEvents.tags("item", (event) => {
  event.remove("curios:charm", "simplemagnets:advancedmagnet");
  event.add("curios:magnet", "simplemagnets:advancedmagnet");
});
