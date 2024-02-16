ServerEvents.recipes((event) => {
  event.shaped("create:copper_diving_helmet", ["CCC", "CGC", "   "], {
    C: "#forge:ingots/copper",
    G: "#forge:glass",
  });

  event.shaped("create:copper_diving_boots", ["C C", "C C", "A A"], {
    C: "#forge:ingots/copper",
    A: "create:andesite_alloy",
  });
});
