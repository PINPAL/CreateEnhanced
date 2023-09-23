ServerEvents.recipes((event) => {
  const materials = [
    {
      name: "netherite",
      paxelId: "tempered_netherite",
      material: "#forge:ingots/netherite",
    },
    { name: "diamond", paxelId: "netherite", material: "#forge:gems/diamond" },
    { name: "steel", paxelId: "diamond", material: "#forge:ingots/steel" },
    { name: "iron", paxelId: "iron", material: "#forge:ingots/iron" },
    // { name: "copper", paxelId: "gold", material: "#forge:ingots/copper" },
    { name: "stone", paxelId: "stone", material: "kubejs:refined_stone" },
    { name: "wood", paxelId: "wood", material: "#minecraft:planks" },
  ].forEach((material) => {
    event.shaped(
      "kubejs:" + material.name + "_repair_kit",
      [" A ", "ALA", " A "],
      {
        A: material.material,
        L: "minecraft:leather",
      }
    );

    event.shapeless("easypaxellite:" + material.paxelId + "_paxel", [
      "easypaxellite:" + material.paxelId + "_paxel",
      "kubejs:" + material.name + "_repair_kit",
    ]);
  });
});
