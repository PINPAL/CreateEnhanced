ServerEvents.recipes((event) => {
  // Saddle
  event.recipes
    .createSequencedAssembly(["minecraft:saddle"], "#forge:nuggets/iron", [
      event.recipes.createDeploying("kubejs:incomplete_saddle", [
        "kubejs:incomplete_saddle",
        "minecraft:leather",
      ]),
      event.recipes.createDeploying("kubejs:incomplete_saddle", [
        "kubejs:incomplete_saddle",
        "minecraft:string",
      ]),
    ])
    .transitionalItem("kubejs:incomplete_saddle")
    .loops(5)
    .id("kubejs:saddle");

  // Totem of Undying
  event.recipes
    .createSequencedAssembly(
      ["minecraft:totem_of_undying"],
      "#forge:blocks/gold",
      [
        event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
          "kubejs:incomplete_totem_of_undying",
          "minecraft:golden_apple",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
          "kubejs:incomplete_totem_of_undying",
          "minecraft:emerald",
        ]),
        event.recipes.create.filling("kubejs:incomplete_totem_of_undying", [
          Fluid.of("kubejs:molten_gold", 40),
          "kubejs:incomplete_totem_of_undying",
        ]),
      ]
    )
    .transitionalItem("kubejs:incomplete_totem_of_undying")
    .loops(1)
    .id("kubejs:totem_of_undying");
});
