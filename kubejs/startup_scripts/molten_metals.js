const moltenMetals = [
  "iron",
  "copper",
  "gold",
  "zinc",
  "brass",
  "tin",
  "bronze",
  "steel",
  "cast_iron",
  "diamond",
  "emerald",
  "powdered_obsidian",
  "redstone",
];

StartupEvents.registry("item", (event) => {
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal + "_ingot")
      .displayName("Molten " + formatName(metal) + " Ingot")
      .unstackable();
  });
});

StartupEvents.registry("block", (event) => {
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal + "_block")
      .displayName("Molten " + formatName(metal) + " Block")
      .material("metal")
      .tagBlock("minecraft:mineable/pickaxe")
      .hardness(50);
  });

  event
    .create("metal_alloy_block")
    .displayName("Metal Alloy Block")
    .material("metal")
    .tagBlock("minecraft:mineable/pickaxe")
    .hardness(80);
});

StartupEvents.registry("fluid", (event) => {
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal)
      .displayName("Molten " + formatName(metal))
      .stillTexture("kubejs:block/fluid/molten_" + metal)
      .flowingTexture("kubejs:block/fluid/molten_" + metal)
      .noBlock()
      .bucketItem.texture("kubejs:item/bucket/molten_" + metal + "_bucket");
  });
});
