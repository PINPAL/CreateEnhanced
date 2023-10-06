StartupEvents.registry("block", (event) => {
  event.create("belt_scroll").displayName("DEV ITEM");
});

StartupEvents.registry("item", (event) => {
  // Refined Rock
  event.create("refined_stone").displayName("Refined Rock");
});
