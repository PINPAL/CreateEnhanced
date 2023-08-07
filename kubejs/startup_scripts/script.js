// priority: 0

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
});

// Add Fluids
StartupEvents.registry("fluid", (event) => {
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
