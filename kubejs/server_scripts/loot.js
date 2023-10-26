LootJS.modifiers((event) => {
  const removables = [
    "minecraft:enchanted_book",
    "#forge:tools",
    "#forge:armors",
    "minecraft:book",
    /sophisticatedbackpacks/,
  ].forEach((item) => {
    event.addLootTypeModifier(LootType.CHEST).removeLoot(item);
  });
});
