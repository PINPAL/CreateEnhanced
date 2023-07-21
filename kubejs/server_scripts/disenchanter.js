ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:enchanting_table" });
  event.remove({ output: "minecraft:anvil" });
  event.remove({ mod: "disenchanting" });

  event.recipes.createMechanicalCrafting(
    "disenchanting:disenchanter",
    ["  D  ", " EAE ", "GDBDG", "OPPPO", " OOO "],
    {
      D: "minecraft:diamond",
      E: "create_enchantment_industry:enchanting_guide",
      A: "minecraft:experience_bottle",
      G: "minecraft:gold_block",
      B: "minecraft:book",
      O: "minecraft:obsidian",
      P: "create:powdered_obsidian",
    }
  );
});
