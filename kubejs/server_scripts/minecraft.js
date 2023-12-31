ServerEvents.recipes((event) => {
  // Lodestone
  event.shaped("8x minecraft:lodestone", ["III", "IDI", "III"], {
    I: "minecraft:chiseled_stone_bricks",
    D: "#forge:ingots/brass",
  });

  // White Wool
  event.recipes.create.compacting("minecraft:white_wool", "4x #forge:string");

  // Cobweb
  event.recipes.create.compacting("minecraft:cobweb", "9x #forge:string");

  // Hanging Roots
  event.recipes.create.haunting(
    "minecraft:hanging_roots",
    "minecraft:mangrove_propagule"
  );

  // Cheaper Jukebox
  event.replaceInput(
    { id: "minecraft:jukebox" },
    "minecraft:diamond",
    "#forge:ingots/cast_iron"
  );

  // Rooted Dirt
  event.recipes.create.deploying("minecraft:rooted_dirt", [
    "minecraft:dirt",
    "minecraft:hanging_roots",
  ]);

  // Name Tag
  event.recipes
    .createSequencedAssembly(["minecraft:name_tag"], "minecraft:string", [
      event.recipes.createDeploying("kubejs:incomplete_name_tag", [
        "kubejs:incomplete_saddle",
        "createdeco:iron_coin",
      ]),
    ])
    .transitionalItem("kubejs:incomplete_name_tag")
    .loops(5)
    .id("kubejs:name_tag");

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
      "createdeco:gold_coin",
      [
        event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
          "kubejs:incomplete_totem_of_undying",
          "minecraft:golden_apple",
        ]),
        event.recipes.create.filling("kubejs:incomplete_totem_of_undying", [
          Fluid.of("kubejs:molten_gold", 40),
          "kubejs:incomplete_totem_of_undying",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
          "kubejs:incomplete_totem_of_undying",
          "minecraft:emerald",
        ]),
        event.recipes.createDeploying("kubejs:incomplete_totem_of_undying", [
          "kubejs:incomplete_totem_of_undying",
          "create:experience_nugget",
        ]),
      ]
    )
    .transitionalItem("kubejs:incomplete_totem_of_undying")
    .loops(1)
    .id("kubejs:totem_of_undying");
});

ServerEvents.tags("item", (event) => {
  event.remove("curios:charm", "minecraft:totem_of_undying");
  event.add("curios:totem", "minecraft:totem_of_undying");
});
