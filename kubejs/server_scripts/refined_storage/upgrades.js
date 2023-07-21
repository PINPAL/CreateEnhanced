ServerEvents.recipes((event) => {
  // Upgrade
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("refinedstorage:upgrade"),
      ],
      // input
      "alloyed:steel_sheet",
      [
        event.recipes.createDeploying("alloyed:steel_sheet", [
          "alloyed:steel_sheet",
          "refinedstorage:silicon",
        ]),
        event.recipes.createDeploying("alloyed:steel_sheet", [
          "alloyed:steel_sheet",
          "createaddition:copper_wire",
        ]),
        event.recipes.createDeploying("alloyed:steel_sheet", [
          "alloyed:steel_sheet",
          "createaddition:capacitor",
        ]),
      ]
    )
    .transitionalItem("alloyed:steel_sheet")
    .loops(3);

  // Crafting Upgrade
  event.shapeless("refinedstorage:crafting_upgrade", [
    "refinedstorage:upgrade",
    "minecraft:crafting_table",
  ]);

  // Stack Upgrade
  event.shapeless("refinedstorage:stack_upgrade", [
    "3x refinedstorage:speed_upgrade",
  ]);

  // Speed Upgrade
  event.recipes.create.mixing(
    [Item.of("refinedstorage:speed_upgrade")],
    [
      "refinedstorage:upgrade",
      Fluid.of("create_enchantment_industry:hyper_experience", 50),
    ]
  );
});
