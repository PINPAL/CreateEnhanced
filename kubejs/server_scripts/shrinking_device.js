ServerEvents.recipes((event) => {
  event.remove({ mod: "shrink" });

  event.recipes.createMechanicalCrafting(
    "shrink:shrinking_device",
    [" DQD ", "TSSST", "SBSRS", "TSSST"],
    {
      D: "create:display_board",
      Q: "create_things_and_misc:vibration_mechanism",
      T: "create:railway_casing",
      B: "infinitybuttons:blue_emergency_button",
      R: "infinitybuttons:red_emergency_button",
      S: "create_dd:steel_sheet",
    }
  );
});
