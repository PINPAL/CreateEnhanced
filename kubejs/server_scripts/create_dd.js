ServerEvents.recipes((event) => {
  // Remove
  const itemsToRemove = [
    Fluid.of("create_dd:condense_milk"),
    Fluid.of("create_dd:cream"),
    Fluid.of("create_dd:vanilla"),
    Fluid.of("create_dd:vanilla_milkshake"),
    Fluid.of("create_dd:strawberry"),
    Fluid.of("create_dd:strawberry_milkshake"),
    Fluid.of("create_dd:glowberry"),
    Fluid.of("create_dd:glowberry_milkshake"),
    Fluid.of("create_dd:caramel"),
    Fluid.of("create_dd:caramel_milkshake"),
    Fluid.of("create_dd:hot_chocolate"),
    Fluid.of("create_dd:chocolate_milkshake"),

    "create_dd:condense_milk_bucket",
    "create_dd:cream_bucket",
    "create_dd:vanilla_bucket",
    "create_dd:vanilla_milkshake_bucket",
    "create_dd:strawberry_bucket",
    "create_dd:strawberry_milkshake_bucket",
    "create_dd:glowberry_bucket",
    "create_dd:glowberry_milkshake_bucket",
    "create_dd:caramel_bucket",
    "create_dd:caramel_milkshake_bucket",
    "create_dd:hot_chocolate_bucket",
    "create_dd:chocolate_milkshake_bucket",
  ].forEach((item) => {
    event.remove({ output: item });
  });
});
