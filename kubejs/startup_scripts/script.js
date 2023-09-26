// priority: 0

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
];

// function to replace _ with space and capitalise first letter of each word
function formatName(name) {
  return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

// Add Items
StartupEvents.registry("item", (event) => {
  event.create("empty_canister").displayName("Empty Canister");
  event
    .create("chlorine_canister")
    .displayName("Chlorine Gas Canister")
    .tooltip("Chlorine Gas: 1000/1000 mB")
    .unstackable();
  event
    .create("brine_canister")
    .displayName("Brine Canister")
    .tooltip("Brine: 1000/1000 mB")
    .unstackable();
  event.create("refined_stone").displayName("Refined Rock");

  // Repair Kits
  const materials = [
    "netherite",
    "diamond",
    "copper",
    "steel",
    "iron",
    "stone",
    "wood",
  ].forEach((material) => {
    event
      .create(material + "_repair_kit")
      .displayName(formatName(material) + " Repair Kit")
      .unstackable();
  });

  event
    .create("incomplete_saddle")
    .displayName("Incomplete Saddle")
    .unstackable();

  event
    .create("incomplete_totem_of_undying")
    .displayName("Incomplete Totem of Undying")
    .unstackable();

  // Creative Items
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal + "_ingot")
      .displayName("Molten " + formatName(metal) + " Ingot")
      .unstackable();
  });

  event.create("rainbow_core").displayName("Rainbow Core").unstackable();
  event.create("rainbow_dye").displayName("Rainbow Dye");
  event.create("rainbow_toolbox").displayName("Rainbow Toolbox").unstackable();
});

// Add Blocks
StartupEvents.registry("block", (event) => {
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal + "_block")
      .displayName("Molten " + formatName(metal) + " Block")
      .material("metal")
      .tagBlock("minecraft:mineable/pickaxe")
      .hardness(50);
  });

  event.create("belt_scroll").displayName("DEV ITEM");

  event
    .create("rainbow_placard")
    .displayName("Rainbow Placard")
    .material("metal")
    .tagBlock("minecraft:mineable/paxel");

  event
    .create("rainbow_candle")
    .displayName("Rainbow Candle")
    .material("wool")
    .tagBlock("minecraft:mineable/paxel");

  event
    .create("rainbow_canvas_sign")
    .displayName("Rainbow Canvas Sign")
    .material("wood")
    .tagBlock("minecraft:mineable/paxel");

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
    .renderType("cutout");

  event
    .create("metal_alloy_block")
    .displayName("Metal Alloy Block")
    .material("metal")
    .tagBlock("minecraft:mineable/pickaxe")
    .hardness(80);
});

// Add Fluids
StartupEvents.registry("fluid", (event) => {
  // Creative Items
  moltenMetals.forEach((metal) => {
    event
      .create("molten_" + metal)
      .displayName("Molten " + formatName(metal))
      .stillTexture("kubejs:block/fluid/molten_" + metal)
      .flowingTexture("kubejs:block/fluid/molten_" + metal)
      .noBlock()
      .bucketItem.texture("kubejs:item/bucket/molten_" + metal + "_bucket");
  });

  // Refined Storage
  event
    .create("biomethane")
    .displayName("Biomethane Gas")
    .thinTexture(0x29382c)
    .noBucket();
  event.create("brine").displayName("Brine").thickTexture(0xe6d1ae);
  event
    .create("chlorine")
    .displayName("Chlorine Gas")
    .thinTexture(0xfaf48c)
    .noBucket();
  event
    .create("methyl_chloride")
    .displayName("Methyl Chloride Gas")
    .thinTexture(0xf25d3f)
    .noBucket();

  // Coloured Fluids
  event
    .create("white_dye_fluid")
    .displayName("White Dye")
    .thinTexture(0xffffff);
  event
    .create("orange_dye_fluid")
    .displayName("Orange Dye")
    .thinTexture(0xf4b33f);
  event
    .create("magenta_dye_fluid")
    .displayName("Magenta Dye")
    .thinTexture(0xcb69c5);
  event
    .create("light_blue_dye_fluid")
    .displayName("Light Blue Dye")
    .thinTexture(0x5082ce);
  event
    .create("yellow_dye_fluid")
    .displayName("Yellow Dye")
    .thinTexture(0xe7e72a);
  event.create("lime_dye_fluid").displayName("Lime Dye").thinTexture(0x76c610);
  event.create("pink_dye_fluid").displayName("Pink Dye").thinTexture(0xdb8bb4);
  event.create("gray_dye_fluid").displayName("Gray Dye").thinTexture(0x767676);
  event
    .create("light_gray_dye_fluid")
    .displayName("Light Gray Dye")
    .thinTexture(0xc8c8c8);
  event.create("cyan_dye_fluid").displayName("Cyan Dye").thinTexture(0x2d7c9d);
  event
    .create("purple_dye_fluid")
    .displayName("Purple Dye")
    .thinTexture(0xa453ce);
  event.create("blue_dye_fluid").displayName("Blue Dye").thinTexture(0x345ec3);
  event
    .create("brown_dye_fluid")
    .displayName("Brown Dye")
    .thinTexture(0x7a4621);
  event
    .create("green_dye_fluid")
    .displayName("Green Dye")
    .thinTexture(0x4a6b18);
  event.create("red_dye_fluid").displayName("Red Dye").thinTexture(0xd2443f);
  event
    .create("black_dye_fluid")
    .displayName("Black Dye")
    .thinTexture(0x27263d);
});
