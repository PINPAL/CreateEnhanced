ServerEvents.recipes((event) => {
  event.recipes.create.mechanical_crafting(
    "melter:melter",
    ["N  N", "N  N", "N  N", "pNNp"],
    {
      N: "#forge:ingots/netherite",
      p: "createindustry:plastic_sheet",
    }
  );
});
