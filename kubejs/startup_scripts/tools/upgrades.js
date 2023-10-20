StartupEvents.registry("item", (event) => {
  toolMaterials.forEach((material) => {
    event
      .create(material + "_blade")
      .displayName(formatName(material) + " Blade")
      .unstackable();
    event
      .create("incomplete_" + material + "_blade")
      .displayName("Incomplete " + formatName(material) + " Blade")
      .unstackable();
    event
      .create(material + "_head")
      .displayName(formatName(material) + " Paxel Head")
      .unstackable();
    event
      .create("incomplete_" + material + "_head")
      .displayName("Incomplete " + formatName(material) + " Paxel Head")
      .unstackable();
  });
  armorMaterials.forEach((material) => {
    event
      .create(material + "_stitching")
      .displayName(formatName(material) + " Stitching")
      .unstackable();
    event
      .create("unfinished_" + material + "_stitching")
      .displayName("Incomplete " + formatName(material) + " Stitching")
      .unstackable();
  });
});
