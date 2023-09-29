ItemEvents.tooltip((tooltip) => {
  tooltip.addAdvanced(
    "chunkloaders:ultimate_chunk_loader",
    (item, advanced, text) => {
      text.add(1, [
        Text.of("Does ").gray(),
        Text.of("NOT ").red(),
        Text.of("work on moving contraptions.").gray(),
      ]);
    }
  );
  tooltip.addAdvanced(
    "createchunkloading:chunk_loader",
    (item, advanced, text) => {
      text.add(1, [
        Text.of("Can ").gray(),
        Text.of("ONLY ").red(),
        Text.of("work on moving contraptions.").gray(),
      ]);
    }
  );
  const customItems = [
    "kubejs:rainbow_valve_handle",
    "kubejs:rainbow_wool",
    "kubejs:rainbow_concrete",
    "kubejs:metal_alloy_block",
    "kubejs:rainbow_toolbox",
    "kubejs:rainbow_canvas_sign",
    "kubejs:rainbow_placard",
    "kubejs:rainbow_dye",
    "kubejs:rainbow_candle",
  ];
  customItems.forEach((customItem) => {
    tooltip.addAdvanced(customItem, (item, advanced, text) => {
      text.add(1, [Text.of("End Game Crafting Ingredient").gray()]);
      text.add(1, [Text.of("Functionally Useless").gold()]);
    });
  });

  const brokenItemMaterials = [
    "netherite",
    "diamond",
    "steel",
    "iron",
    "copper",
    "stone",
    "wood",
  ];
  const breakableTools = ["paxel", "sword", "hoe"];
  brokenItemMaterials.forEach((material) => {
    breakableTools.forEach((tool) => {
      console.log(`kubejs:broken_${material}_${tool}`);
      tooltip.addAdvanced(
        `kubejs:broken_${material}_${tool}`,
        (item, advanced, text) => {
          text.add(1, [Text.of("Tool is Broken").darkRed()]);
          text.add(2, [Text.of("Requires Repair").red()]);
        }
      );
    });
  });
});

// const ItemDescription = Java.loadClass(
//   "com.simibubi.create.foundation.item.ItemDescription$Modifier"
// );
// const TooltipModifier = Java.loadClass(
//   "com.simibubi.create.foundation.item.TooltipModifier"
// );
// const Palette = Java.loadClass(
//   "com.simibubi.create.foundation.item.TooltipHelper$Palette"
// );

// ItemEvents.tooltip((event) => {
//   event.addAdvanced("chunkloaders:ultimate_chunk_loader", (item) => {
//     TooltipModifier.REGISTRY.register(
//       item.item,
//       new ItemDescription(item.item, Palette.STANDARD_CREATE)
//     );
//   });

//   event.addAdvanced("createchunkloading:chunk_loader", (item) => {
//     TooltipModifier.REGISTRY.register(
//       item.item,
//       new ItemDescription(item.item, Palette.STANDARD_CREATE)
//     );
//   });
// });
