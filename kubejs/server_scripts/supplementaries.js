ServerEvents.recipes((event) => {
  // Vertical Redstone (Cog Block)
  event.remove({ output: "supplementaries:cog_block" });
  event.shaped(
    Item.of("supplementaries:cog_block", 8), // arg 1: output
    [" C ", "BRB", " C "],
    {
      B: "createdeco:brass_bars",
      C: "create:brass_casing",
      R: "minecraft:redstone",
    }
  );
  // Remove Items
  event.remove({ output: "supplementaries:bubble_blower" });
  event.remove({ id: "supplementaries:item_lore_display" });
  event.remove({ id: "supplementaries:crank" });
  event.remove({ id: "supplementaries:faucet" });
  event.remove({ id: "supplementaries:soap/dirty_glass" });
  event.remove({ id: "supplementaries:soap/dirty_shard" });
  event.remove({ id: "supplementaries:soap/piston" });
  event.remove({ id: "supplementaries:soap_clean_minecraft_shulker_box" });
  event.remove({ id: "supplementaries:soap_clean_minecraft_concrete_powder" });
  event.remove({ id: "supplementaries:soap_clean_minecraft_concrete" });
  event.remove({
    id: "supplementaries:soap_clean_supplementaries_candle_holder",
  });
  event.remove({ id: "supplementaries:soap_clean_minecraft_stained_glass" });
  event.remove({ output: "supplementaries:bamboo_spikes" });
  event.remove({
    output: Item.of(
      "supplementaries:bamboo_spikes_tipped",
      '{Damage:0,Potion:"minecraft:poison"}'
    ),
  });
  event.remove({ output: "supplementaries:bomb" });
});
