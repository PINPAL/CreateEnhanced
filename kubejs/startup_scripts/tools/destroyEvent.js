ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.player.PlayerDestroyItemEvent",
  (event) => {
    global.destroyitem(event);
  }
);

global.destroyitem = (event) => {
  let itemThatBroke = event.getOriginal();
  let slotThatBroke = event.getHand();

  // Get the Mod of the item that broke
  let itemMod = itemThatBroke.getMod();
  let itemId = itemThatBroke.getId();

  // Get the NBT of the item that broke (eg: Enchantments)
  let itemNBT = itemThatBroke.nbtString;

  // Replace the Mod prefix with nothing
  itemId = itemId.replace(itemMod + ":", "");

  // Check if the item is a knife, hoe, sword, paxel or shield.
  if (
    itemMod == "easypaxellite" ||
    itemId == "shield" ||
    itemThatBroke.hasTag("forge:tools/swords") ||
    itemThatBroke.hasTag("forge:tools/knives") ||
    itemThatBroke.hasTag("forge:tools/hoes")
  ) {
    // Handle Conversions
    itemId = itemId.replace("golden", "copper");
    itemId = itemId.replace("wooden", "wood");
    if (itemMod == "easypaxellite") {
      itemId = itemId.replace("diamond", "steel");
      itemId = itemId.replace("netherite", "diamond");
      itemId = itemId.replace("tempered_netherite", "netherite");
    }
    // Generate Replacement Item
    let replacementItem = Item.of(`kubejs:broken_${itemId}`, `${itemNBT}`);

    console.log(slotThatBroke);
    console.log("Broken Item: " + itemThatBroke.getId());
    console.log("Replacement Item: " + replacementItem.getId());
    event.entity.tell(
      `${itemThatBroke.getId()} broke in ${slotThatBroke}. Replacing it with ${replacementItem.getId()}`
    );

    // Replace Item
    event.getEntity().setHeldItem(slotThatBroke, replacementItem);
  }
};
