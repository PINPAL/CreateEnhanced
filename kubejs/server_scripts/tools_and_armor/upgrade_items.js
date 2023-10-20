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
          event.recipes.createDeploying(
            `kubejs:incomplete_${material.name}_blade`,
            [`kubejs:incomplete_${material.name}_blade`, material.cost]
          ),
        ]
      )
      .transitionalItem(`kubejs:incomplete_${material.name}_blade`)
      .loops(material.name == "netherite" ? 1 : 2);
    // Paxel Head
    event.recipes.create
      .sequenced_assembly(
        [`kubejs:${material.name}_head`],
        "kubejs:wood_head",
        [
          event.recipes.createDeploying(
            `kubejs:incomplete_${material.name}_head`,
            [`kubejs:incomplete_${material.name}_head`, material.cost]
          ),
        ]
      )
      .transitionalItem(`kubejs:incomplete_${material.name}_head`)
      .loops(material.name == "netherite" ? 3 : 7);
  });
  armorUpgradeMats.forEach((material) => {
    // Stitching
    event.recipes.createDeploying(
      `kubejs:unfinished_${material.name}_stitching`,
      ["kubejs:leather_stitching", material.cost]
    );
    event.recipes.create
      .sequenced_assembly(
        [`kubejs:${material.name}_stitching`],
        `kubejs:unfinished_${material.name}_stitching`,
        [
          event.recipes.createDeploying(
            `kubejs:unfinished_${material.name}_stitching`,
            [`kubejs:unfinished_${material.name}_stitching`, material.cost]
          ),
        ]
      )
      .transitionalItem(`kubejs:unfinished_${material.name}_stitching`)
      .loops(material.name == "netherite" ? 1 : 5);
  });
});
