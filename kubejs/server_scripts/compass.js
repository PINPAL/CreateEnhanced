ServerEvents.recipes((event) => {
  // Explorer Compass
  event.shapeless("explorerscompass:explorerscompass", [
    "naturescompass:naturescompass",
  ]);
  // Nature Compass
  event.shapeless("naturescompass:naturescompass", [
    "explorerscompass:explorerscompass",
  ]);
});
