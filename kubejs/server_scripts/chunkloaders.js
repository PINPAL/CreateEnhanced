ServerEvents.recipes((event) => {
  // Chunkloader
  event.remove({ mod: "chunkloaders" });
  event.shaped(
    Item.of("chunkloaders:ultimate_chunk_loader"),
    [" N ", "NVN", " N "],
    {
      N: "createdeco:netherite_sheet",
      V: "create_things_and_misc:vibration_mechanism",
    }
  );

  // Contraption Chunkloader
  event.remove({ mod: "createchunkloading" });
  event.shaped(
    Item.of("createchunkloading:chunk_loader"),
    ["GBG", "BCB", "GBG"],
    {
      G: "#forge:glass",
      B: "create:brass_sheet",
      C: "chunkloaders:ultimate_chunk_loader",
    }
  );
});
