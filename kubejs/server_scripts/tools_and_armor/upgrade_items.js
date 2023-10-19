const toolUpgradeMats = [
  { name: "netherite", cost: "#forge:ingots/netherite" },
  { name: "diamond", cost: "#forge:gems/diamond" },
  { name: "steel", cost: "#forge:ingots/steel" },
  { name: "iron", cost: "#forge:ingots/iron" },
  { name: "copper", cost: "#forge:ingots/copper" },
  { name: "stone", cost: "kubejs:refined_stone" },
];
const armorUpgradeMats = [
  { name: "netherite", cost: "#forge:ingots/netherite" },
  { name: "diamond", cost: "#forge:gems/diamond" },
  { name: "steel", cost: "#forge:ingots/steel" },
  { name: "iron", cost: "#forge:ingots/iron" },
  { name: "copper", cost: "#forge:ingots/copper" },
  { name: "chainmail", cost: "minecraft:chain" },
];

ServerEvents.recipes((event) => {
  toolUpgradeMats.forEach((material) => {
    // Blade
    event.recipes.create
      .sequenced_assembly(
        [`kubejs:${material.name}_blade`],
        "kubejs:wood_blade",
        [
          event.recipes.createDeploying("kubejs:wood_blade", [
            "kubejs:wood_blade",
            material.cost,
          ]),
        ]
      )
      .transitionalItem("kubejs:wood_blade")
      .loops(2);
    // Paxel Head
    event.recipes.create
      .sequenced_assembly(
        [`kubejs:${material.name}_head`],
        "kubejs:wood_head",
        [
          event.recipes.createDeploying("kubejs:wood_head", [
            "kubejs:wood_head",
            material.cost,
          ]),
        ]
      )
      .transitionalItem("kubejs:wood_head")
      .loops(7);
  });
  armorUpgradeMats.forEach((material) => {
    // Stitching
    event.recipes.create
      .sequenced_assembly(
        [`kubejs:${material.name}_stitching`],
        "kubejs:leather_stitching",
        [
          event.recipes.createDeploying("kubejs:leather_stitching", [
            "kubejs:leather_stitching",
            material.cost,
          ]),
        ]
      )
      .transitionalItem("kubejs:leather_stitching")
      .loops(6);
  });
});
