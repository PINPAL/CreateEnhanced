const toolUpgradingTiers = [
  {
    tier: "stone",
    properties: {
      prefix: "minecraft:stone",
      hasArmor: false,
      hasHorseArmor: false,
      hasTools: true,
      hasKnife: false,
      hasBackpack: false,
      paxel: "easypaxellite:stone_paxel",
    },
    previousTier: {
      prefix: "minecraft:wooden",
      paxel: "easypaxellite:wood_paxel",
    },
  },
  {
    tier: "chainmail",
    properties: {
      prefix: "minecraft:chainmail",
      hasArmor: true,
      hasHorseArmor: false,
      hasTools: false,
      hasKnife: false,
      hasBackpack: false,
    },
    previousTier: {
      armorPrefix: "minecraft:leather",
    },
  },
  {
    tier: "copper",
    properties: {
      prefix: "minecraft:golden",
      hasArmor: true,
      hasHorseArmor: true,
      hasTools: true,
      hasKnife: true,
      hasBackpack: false,
      horseArmor: "minecraft:golden_horse_armor",
      knife: "create_things_and_misc:copper_knife",
      paxel: "easypaxellite:golden_paxel",
    },
    previousTier: {
      prefix: "minecraft:stone",
      horseArmor: "minecraft:leather_horse_armor",
      armorPrefix: "minecraft:chainmail",
      knife: "farmersdelight:flint_knife",
      paxel: "easypaxellite:stone_paxel",
    },
  },
  {
    tier: "iron",
    properties: {
      prefix: "minecraft:iron",
      hasArmor: true,
      hasHorseArmor: true,
      hasTools: true,
      hasKnife: true,
      hasBackpack: true,
      horseArmor: "minecraft:iron_horse_armor",
      backpack: "sophisticatedbackpacks:iron_backpack",
      knife: "farmersdelight:iron_knife",
      paxel: "easypaxellite:iron_paxel",
    },
    previousTier: {
      prefix: "minecraft:golden",
      horseArmor: "minecraft:golden_horse_armor",
      armorPrefix: "minecraft:golden",
      knife: "create_things_and_misc:copper_knife",
      paxel: "easypaxellite:golden_paxel",
      backpack: "sophisticatedbackpacks:backpack",
    },
  },
  {
    tier: "steel",
    properties: {
      prefix: "alloyed:steel",
      hasArmor: true,
      hasHorseArmor: false,
      hasTools: true,
      hasKnife: true,
      hasBackpack: true,
      backpack: "sophisticatedbackpacks:gold_backpack",
      knife: "alloyed:steel_knife",
      paxel: "easypaxellite:diamond_paxel",
    },
    previousTier: {
      prefix: "minecraft:iron",
      armorPrefix: "minecraft:iron",
      knife: "farmersdelight:iron_knife",
      paxel: "easypaxellite:iron_paxel",
      backpack: "sophisticatedbackpacks:iron_backpack",
    },
  },
  {
    tier: "diamond",
    properties: {
      prefix: "minecraft:diamond",
      hasArmor: true,
      hasHorseArmor: true,
      hasTools: true,
      hasKnife: true,
      hasBackpack: true,
      horseArmor: "minecraft:diamond_horse_armor",
      backpack: "sophisticatedbackpacks:diamond_backpack",
      knife: "farmersdelight:diamond_knife",
      paxel: "easypaxellite:netherite_paxel",
    },
    previousTier: {
      prefix: "alloyed:steel",
      horseArmor: "minecraft:iron_horse_armor",
      armorPrefix: "alloyed:steel",
      knife: "alloyed:steel_knife",
      paxel: "easypaxellite:diamond_paxel",
      backpack: "sophisticatedbackpacks:gold_backpack",
    },
  },
  {
    tier: "netherite",
    properties: {
      prefix: "minecraft:netherite",
      hasArmor: true,
      hasHorseArmor: true,
      hasTools: true,
      hasKnife: true,
      hasBackpack: true,
      horseArmor: "netherite_horse_armor:netherite_horse_armor",
      backpack: "sophisticatedbackpacks:netherite_backpack",
      knife: "farmersdelight:netherite_knife",
      paxel: "easypaxellite:tempered_netherite_paxel",
    },
    previousTier: {
      prefix: "minecraft:diamond",
      horseArmor: "minecraft:diamond_horse_armor",
      armorPrefix: "minecraft:diamond",
      knife: "farmersdelight:diamond_knife",
      paxel: "easypaxellite:netherite_paxel",
      backpack: "sophisticatedbackpacks:diamond_backpack",
    },
  },
];

ServerEvents.recipes((event) => {
  // Create Netherite Armor Upgrades
  event.smithing(
    "create:netherite_diving_helmet",
    "minecraft:netherite_helmet",
    "create:copper_diving_helmet"
  );
  event.smithing(
    "create:netherite_diving_boots",
    "minecraft:netherite_boots",
    "create:copper_diving_boots"
  );
  event.smithing(
    "create:netherite_backtank",
    "minecraft:netherite_chestplate",
    "create:copper_backtank"
  );
  // Smithing upgrade recipes
  toolUpgradingTiers.forEach((tier) => {
    // ARMOR
    // ============================
    if (tier.properties.hasArmor) {
      // Helmet
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_helmet`,
        `${tier.properties.prefix}_helmet`
      );
      event.smithing(
        `${tier.properties.prefix}_helmet`,
        `${tier.previousTier.armorPrefix}_helmet`,
        `kubejs:${tier.tier}_stitching`
      );
      // Chestplate
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_chestplate`,
        `${tier.properties.prefix}_chestplate`
      );
      event.smithing(
        `${tier.properties.prefix}_chestplate`,
        `${tier.previousTier.armorPrefix}_chestplate`,
        `kubejs:${tier.tier}_stitching`
      );
      // Leggings
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_leggings`,
        `${tier.properties.prefix}_leggings`
      );
      event.smithing(
        `${tier.properties.prefix}_leggings`,
        `${tier.previousTier.armorPrefix}_leggings`,
        `kubejs:${tier.tier}_stitching`
      );
      // Boots
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_boots`,
        `${tier.properties.prefix}_boots`
      );
      event.smithing(
        `${tier.properties.prefix}_boots`,
        `${tier.previousTier.armorPrefix}_boots`,
        `kubejs:${tier.tier}_stitching`
      );
    }
    // BACKPACK
    // ============================
    if (tier.properties.hasBackpack) {
      event.smithing(
        tier.properties.backpack,
        tier.previousTier.backpack,
        `kubejs:${tier.tier}_stitching`
      );
    }
    // KNIFE
    // ============================
    if (tier.properties.hasKnife) {
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_knife`,
        tier.properties.knife
      );
      event.smithing(
        // Unbreakable IF netherite
        tier.tier == "netherite"
          ? Item.of("farmersdelight:netherite_knife").withNBT(
              "{Unbreakable:1b}"
            )
          : tier.properties.knife,
        tier.previousTier.knife,
        `kubejs:${tier.tier}_blade`
      );
    }
    // HOE, SWORD, PAXEL
    // ============================
    if (tier.properties.hasTools) {
      // Sword
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_sword`,
        `${tier.properties.prefix}_sword`
      );
      event.smithing(
        `${tier.properties.prefix}_sword`,
        `${tier.previousTier.prefix}_sword`,
        `kubejs:${tier.tier}_blade`
      );
      // Hoe
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_hoe`,
        `${tier.properties.prefix}_hoe`
      );
      event.smithing(
        `${tier.properties.prefix}_hoe`,
        `${tier.previousTier.prefix}_hoe`,
        `kubejs:${tier.tier}_blade`
      );
      // Paxel
      event.recipes.create.crushing(
        `kubejs:broken_${tier.tier}_paxel`,
        tier.properties.paxel
      );
      event.smithing(
        tier.properties.paxel,
        tier.previousTier.paxel,
        `kubejs:${tier.tier}_head`
      );
    }
    // HORSE ARMOR
    // ============================
    if (tier.properties.hasHorseArmor) {
      event.smithing(
        tier.properties.horseArmor,
        tier.previousTier.horseArmor,
        Item.of(`kubejs:unfinished_${tier.tier}_stitching`).weakNBT()
      );
    }
  });
});
