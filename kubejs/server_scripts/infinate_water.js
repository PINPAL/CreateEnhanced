ServerEvents.recipes((event) => {
  event.shaped(
    Item.of(
      "minecraft:water_bucket",
      '{CustomModelData:1,HideFlags:1,display:{Name:\'{"text":"Infinite Water Bucket","italic":false}\'}}'
    ).enchant("minecraft:infinity", 1),
    ["NNN", "NWN", "NNN"],
    {
      N: "create_dd:mithril_nugget",
      W: "minecraft:water_bucket",
    }
  );
});
