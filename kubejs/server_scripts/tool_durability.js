PlayerEvents.tick((event) => {
  let p = event.player;
  if (p.swingTime == 1 && p.persistentData.swinging != 1) {
    handleDurability(event);
  }
});

PlayerEvents.inventoryChanged((event) => {
  let player = event.player;

  let helmet = player.getHeadArmorItem();
  let chestplate = player.getChestArmorItem();
  let leggings = player.getLegsArmorItem();
  let boots = player.getFeetArmorItem();

  let armor = [helmet, chestplate, leggings, boots];
  armor.forEach((item) => {
    if (item.hasTag("forge:armors")) {
      // Enchantments
      let itemEnchants = item.getEnchantments();
      // Durability
      let damage = item.getDamageValue();
      let maxDamage = item.getMaxDamage();
      let durability = maxDamage - damage;

      // Get ItemID without mod prefix
      let itemID = item.getId();
      itemID = itemID.replace(item.getMod() + ":", "");
      // Handle Conversions
      itemID = itemID.replace("golden", "copper");

      // Generate Replacement Item
      let replacementItem = Item.of(`kubejs:broken_${itemID}`);
      replacementItem = replacementItem.enchant(itemEnchants);

      // If armor is broken, replace it
      if (durability <= 1) {
        if (item.hasTag("forge:helmets")) {
          player.setHeadArmorItem(replacementItem);
        } else if (item.hasTag("forge:chestplates")) {
          player.setChestArmorItem(replacementItem);
        } else if (item.hasTag("forge:leggings")) {
          player.setLegsArmorItem(replacementItem);
        } else if (item.hasTag("forge:boots")) {
          player.setFeetArmorItem(replacementItem);
        }
        event.server.runCommandSilent(
          `playsound minecraft:item.shield.break player @a ${player.getX()} ${player.getY()} ${player.getZ()} 1 1`
        );
      }
    }
  });
});

function handleDurability(event) {
  let player = event.player;
  let item = player.getHeldItem("MAIN_HAND");
  if (
    item.getMod() == "easypaxellite" ||
    item.hasTag("forge:tools/swords") ||
    item.hasTag("forge:tools/hoes")
  ) {
    // Enchantments
    let itemEnchants = item.getEnchantments();
    // Durability
    let damage = item.getDamageValue();
    let maxDamage = item.getMaxDamage();
    let durability = maxDamage - damage;

    // Get ItemID without mod prefix
    let itemID = item.getId();
    itemID = itemID.replace(item.getMod() + ":", "");
    // Handle Conversions
    itemID = itemID.replace("golden", "copper");
    itemID = itemID.replace("wooden", "wood");
    if (item.getMod() == "easypaxellite") {
      itemID = itemID.replace("diamond", "steel");
      itemID = itemID.replace("netherite", "diamond");
      itemID = itemID.replace("tempered_netherite", "netherite");
    }

    // Generate Replacement Item
    let replacementItem = Item.of(`kubejs:broken_${itemID}`);

    // If tool is broken, replace it
    if (durability <= 1) {
      player.setHeldItem("MAIN_HAND", replacementItem.enchant(itemEnchants));
      event.server.runCommandSilent(
        `playsound minecraft:item.shield.break player @a ${player.getX()} ${player.getY()} ${player.getZ()} 1 1`
      );
    }
  }
}
