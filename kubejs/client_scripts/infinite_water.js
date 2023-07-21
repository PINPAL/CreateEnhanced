JEIEvents.addItems((event) => {
  event.add(
    Item.of(
      "minecraft:water_bucket",
      '{CustomModelData:1,HideFlags:1,display:{Name:\'{"text":"Infinite Water Bucket","italic":false}\'}}'
    ).enchant("minecraft:infinity", 1)
  );
});
