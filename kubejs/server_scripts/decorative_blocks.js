// const ModBlockProperties = Java.loadClass(
//   "lilypuree.decorative_blocks.blocks.state.ModBlockProperties"
// );
// const SupportFaceShape = Java.loadClass(
//   "lilypuree.decorative_blocks.blocks.state.SupportFaceShape"
// );

ServerEvents.recipes((event) => {
  // Lattice
  event.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
    S: "minecraft:stick",
  });
});

// BlockEvents.rightClicked((event) => {
//   if (
//     event.getBlock().hasTag("decorative_blocks:supports") &&
//     event.getItem() == "create:wrench"
//   ) {
//     let blockState = event.getBlock().getBlockState();

//     console.log(blockState);
//     console.log(blockState.getValue(BlockProperties.UP));
//     blockState.setValue(BlockProperties.UP, false);
//   }
// });
