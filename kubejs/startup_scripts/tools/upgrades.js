StartupEvents.registry("item", (event) => {
  toolMaterials.forEach((material) => {
    event
      .create(material + "_blade")
      .displayName(formatName(material) + " Blade")
      .unstackable();
    event
      .create(material + "_head")
      .displayName(formatName(material) + " Paxel Head")
      .unstackable();
  });
  armorMaterials.forEach((material) => {
    event
      .create(material + "_stitching")
      .displayName(formatName(material) + " Stitching")
      .unstackable();
  });
});
