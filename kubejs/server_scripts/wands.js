ServerEvents.recipes((event) => {
  // Palette
  event.shaped(Item.of("wands:palette"), ["III", "IVI", "III"], {
    I: "minecraft:item_frame",
    V: "create:item_vault",
  });

  // Wand
  event.recipes.createMechanicalCrafting(
    Item.of("wands:netherite_wand", "{Unbreakable: 1b}"),
    ["   C ", "FFFFF", " NVPS", "   S "],
    {
      C: "minecraft:spyglass",
      F: "create:smart_fluid_pipe",
      N: "minecraft:netherite_ingot",
      V: "create_things_and_misc:vibration_mechanism",
      P: "create:potato_cannon",
      S: "minecraft:stick",
    }
  );
});
