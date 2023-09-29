ServerEvents.recipes((event) => {
  const swordHoe = ["sword", "hoe"];
  const armors = ["helmet", "chestplate", "leggings", "boots"];
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
    {
      name: "leather",
      minecraftId: "leather",
      material: "minecraft:string",
      noTools: true,
    },
    {
      name: "chainmail",
      minecraftId: "chainmail",
      material: "minecraft:chain",
      noTools: true,
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
    if (material.hasOwnProperty("paxelId")) {
      event.smithing(
        "easypaxellite:" + material.paxelId + "_paxel",
        `kubejs:broken_${material.name}_paxel`,
        `kubejs:${material.name}_repair_kit`
      );
    }
    // Sword / Hoe
    if (!material.hasOwnProperty("noTools")) {
      swordHoe.forEach((item) => {
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
        event.smithing(
          repairedItem,
          `kubejs:broken_${material.name}_${item}`,
          `kubejs:${material.name}_repair_kit`
        );
      });
    }

    armors.forEach((item) => {
      // Skip armor for wooden and stone
      if (material.hasOwnProperty("noArmor")) {
        return;
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
      event.smithing(
        repairedItem,
        `kubejs:broken_${material.name}_${item}`,
        `kubejs:${material.name}_repair_kit`
      );
    });
  });
});
