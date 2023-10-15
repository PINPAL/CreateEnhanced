MoreJSEvents.structureLoad((event) => {
  event.forEachPalettes((palette) => {
    palette.forEach((blockData) => {
      console.log(blockData.block);
      if (blockData.id == "minecraft:brewing_stand") {
        blockData.setBlock("kubejs:brewing_stand");
      }
      if (blockData.id == "minecraft:anvil") {
        blockData.setBlock("kubejs:anvil");
      }
    });
  });
});
