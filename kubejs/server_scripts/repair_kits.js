ServerEvents.recipes((event) => {
  const materials = [
    {
      name: "netherite",
      paxelId: "tempered_netherite",
      material: "#forge:ingots/netherite",
    },
    {
      name: "diamond",
      paxelId: "netherite",
      material: "#forge:gems/diamond",
    },
    {
      name: "steel",
      paxelId: "diamond",
      modId: "alloyed",
      material: "#forge:ingots/steel",
    },
    {
      name: "iron",
      paxelId: "iron",
      material: "#forge:ingots/iron",
    },
    {
      name: "copper",
      paxelId: "golden",
      minecraftId: "golden",
      material: "#forge:ingots/copper",
    },
    {
      name: "stone",
      paxelId: "stone",
      material: "kubejs:refined_stone",
      noArmor: true,
    },
    {
      name: "wood",
      paxelId: "wood",
      minecraftId: "wooden",
      material: "#minecraft:planks",
      noArmor: true,
    },
  ].forEach((material) => {
    if (material.name == "netherite") {
      event.smithing(
        "kubejs:netherite_repair_kit",
        "kubejs:diamond_repair_kit",
        "#forge:ingots/netherite"
      );
    } else {
      event.shaped(
        "kubejs:" + material.name + "_repair_kit",
        [" A ", "ALA", " A "],
        {
          A: material.material,
          L: "minecraft:leather",
        }
      );
    }

    // Paxel
    event.shapeless("easypaxellite:" + material.paxelId + "_paxel", [
      "easypaxellite:" + material.paxelId + "_paxel",
      "kubejs:" + material.name + "_repair_kit",
    ]);
    // Sword / Hoe
    const items = [
      "sword",
      "hoe",
      "helmet",
      "chestplate",
      "leggings",
      "boots",
    ].forEach((item) => {
      // Skip armor for wooden and stone
      if (
        item == "helmet" ||
        item == "chestplate" ||
        item == "leggings" ||
        item == "boots"
      ) {
        if (material.hasOwnProperty("noArmor")) {
          return;
        }
      }
      // Get the repair item
      // If the material has a modId, use that, otherwise use minecraft (eg: alloyed:steel instead of minecraft:steel)
      // If the material has a minecraftId, use that, otherwise use the material name (eg: wooden instead of wood)
      // Add the item name (eg: sword)
      let repairedItem =
        (material.hasOwnProperty("modId") ? material.modId : "minecraft") +
        ":" +
        (material.hasOwnProperty("minecraftId")
          ? material.minecraftId
          : material.name) +
        "_" +
        item;
      // Recipe
      event.shapeless(repairedItem, [
        repairedItem,
        "kubejs:" + material.name + "_repair_kit",
      ]);
    });
  });
});
