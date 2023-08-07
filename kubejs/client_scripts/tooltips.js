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
