ServerEvents.recipes((event) => {
  // Lattice
  event.remove({ id: "decorative_blocks:lattice" });
  event.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
    S: "minecraft:stick",
  });
});
