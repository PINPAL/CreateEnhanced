// priority: 999
ServerEvents.tags("item", (event) => {
  // Remove Create copper armor from forge tags to prevent recipe removal
  event.get("forge:armors/helmets").remove("create:copper_diving_helmet");
  event.get("forge:armors/chestplates").remove("create:copper_backtank");
  event.get("forge:armors/boots").remove("create:copper_diving_boots");

  // Make paxel break more stuff faster
  event.get("minecraft:mineable/paxel").add("#forge:glass");
  event.get("minecraft:mineable/paxel").add("#minecraft:mineable/hoe");
  event.get("minecraft:mineable/paxel").add("#minecraft:wool");
  event.get("minecraft:mineable/paxel").add("#minecraft:wool_carpets");

  // Add Knives Together
  event.add("kubejs:mid_tier_knives", "create_things_and_misc:zinc_knife");
  event
    .get("kubejs:mid_tier_knives")
    .add("create_things_and_misc:copper_knife");
});
