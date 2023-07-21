ServerEvents.recipes((event) => {
  // Lattice
  event.remove({ id: "decorative_blocks:lattice" });
  event.shapeless("decorative_blocks:lattice", ["4x minecraft:stick"]);
});
