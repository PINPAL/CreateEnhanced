PlayerEvents.inventoryChanged((event) => {
  handleDurability(event);
});

function handleDurability(event) {
  let player = event.player;

  let helmet = player.getHeadArmorItem();
  let chestplate = player.getChestArmorItem();
  let leggings = player.getLegsArmorItem();
  let boots = player.getFeetArmorItem();

  let breakableItems = [
    { item: helmet, slot: "helmet" },
    { item: chestplate, slot: "chestplate" },
    { item: leggings, slot: "leggings" },
    { item: boots, slot: "boots" },
  ];
  breakableItems.forEach((item) => {
    if (item.item.hasTag("forge:armors")) {
      // NBT (eg: Enchantments)
      let itemNBT = item.item.nbtString;
      // Durability
      let damage = item.item.getDamageValue();
      let maxDamage = item.item.getMaxDamage();
      let durability = maxDamage - damage;

      // Get ItemID without mod prefix
      let itemID = item.item.getId();
      itemID = itemID.replace(item.item.getMod() + ":", "");

      // Handle Conversions
      itemID = itemID.replace("golden", "copper");

      // Generate Replacement Item
      let replacementItem = Item.of(`kubejs:broken_${itemID}`, `${itemNBT}`);

      // If item is broken, replace it
      if (durability <= 10) {
        if (item.slot == "helmet") {
          player.setHeadArmorItem(replacementItem);
        } else if (item.slot == "chestplate") {
          player.setChestArmorItem(replacementItem);
        } else if (item.slot == "leggings") {
          player.setLegsArmorItem(replacementItem);
        } else if (item.slot == "boots") {
          player.setFeetArmorItem(replacementItem);
        }
        event.server.runCommandSilent(
          `playsound minecraft:item.shield.break player @a ${player.getX()} ${player.getY()} ${player.getZ()} 1 1`
        );
      }
    }
  });
}
