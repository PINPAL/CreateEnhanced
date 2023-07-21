ServerEvents.recipes((event) => {
  event.remove({ mod: "sophisticatedstorage" });

  // Storage Tool
  event.shapeless("sophisticatedstorage:storage_tool", [
    "create:wrench",
    "sophisticatedstorage:upgrade_base",
  ]);

  // Upgrade Base
  event.shapeless("sophisticatedstorage:upgrade_base", [
    "minecraft:paper",
    "2x #forge:string",
    "#minecraft:planks",
  ]);

  // Compression Upgrade
  event.shaped(
    "sophisticatedstorage:compression_upgrade",
    ["EOE", "OUO", "EOE"],
    {
      U: "sophisticatedstorage:upgrade_base",
      E: "#forge:ender_pearls",
      O: "#forge:obsidian",
    }
  );

  // Void Upgrade
  event.shaped("sophisticatedstorage:void_upgrade", [" B ", " U ", "I N"], {
    B: "#forge:storage_blocks",
    U: "sophisticatedstorage:upgrade_base",
    I: "#forge:ingots",
    N: "#forge:nuggets",
  });

  // Stack Upgrades
  // =================
  // Tier 1
  event.recipes.create.deploying("sophisticatedstorage:stack_upgrade_tier_1", [
    "sophisticatedstorage:upgrade_base",
    "create:andesite_alloy",
  ]);
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("sophisticatedstorage:stack_upgrade_tier_1"),
      ],
      // input
      "sophisticatedstorage:upgrade_base",
      [
        event.recipes.createDeploying("sophisticatedstorage:upgrade_base", [
          "sophisticatedstorage:upgrade_base",
          "create:andesite_alloy",
        ]),
      ]
    )
    .transitionalItem("sophisticatedstorage:upgrade_base")
    .loops(1);
  // Tier 2
  event.recipes.create.deploying("sophisticatedstorage:stack_upgrade_tier_2", [
    "sophisticatedstorage:stack_upgrade_tier_1",
    "create:copper_sheet",
  ]);
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("sophisticatedstorage:stack_upgrade_tier_2"),
      ],
      // input
      "sophisticatedstorage:upgrade_base",
      [
        event.recipes.createDeploying("sophisticatedstorage:upgrade_base", [
          "sophisticatedstorage:upgrade_base",
          "create:andesite_alloy",
        ]),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_1",
          ["sophisticatedstorage:stack_upgrade_tier_1", "create:copper_sheet"]
        ),
      ]
    )
    .transitionalItem("sophisticatedstorage:upgrade_base")
    .loops(1);
  // Tier 3
  event.recipes.create.deploying("sophisticatedstorage:stack_upgrade_tier_3", [
    "sophisticatedstorage:stack_upgrade_tier_2",
    "create:brass_sheet",
  ]);
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("sophisticatedstorage:stack_upgrade_tier_3"),
      ],
      // input
      "sophisticatedstorage:upgrade_base",
      [
        event.recipes.createDeploying("sophisticatedstorage:upgrade_base", [
          "sophisticatedstorage:upgrade_base",
          "create:andesite_alloy",
        ]),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_1",
          ["sophisticatedstorage:stack_upgrade_tier_1", "create:copper_sheet"]
        ),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_2",
          ["sophisticatedstorage:stack_upgrade_tier_2", "create:brass_sheet"]
        ),
      ]
    )
    .transitionalItem("sophisticatedstorage:upgrade_base")
    .loops(1);
  // Tier 4
  event.recipes.create.deploying("sophisticatedstorage:stack_upgrade_tier_4", [
    "sophisticatedstorage:stack_upgrade_tier_3",
    "create:brass_sheet",
  ]);
  event.recipes
    .createSequencedAssembly(
      [
        // output
        Item.of("sophisticatedstorage:stack_upgrade_tier_4"),
      ],
      // input
      "sophisticatedstorage:upgrade_base",
      [
        event.recipes.createDeploying("sophisticatedstorage:upgrade_base", [
          "sophisticatedstorage:upgrade_base",
          "create:andesite_alloy",
        ]),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_1",
          ["sophisticatedstorage:stack_upgrade_tier_1", "create:copper_sheet"]
        ),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_2",
          ["sophisticatedstorage:stack_upgrade_tier_2", "create:brass_sheet"]
        ),
        event.recipes.createDeploying(
          "sophisticatedstorage:stack_upgrade_tier_3",
          ["sophisticatedstorage:stack_upgrade_tier_3", "create:sturdy_sheet"]
        ),
      ]
    )
    .transitionalItem("sophisticatedstorage:upgrade_base")
    .loops(1);

  // Andesite Chest
  event.recipes.create.deploying(
    Item.of("sophisticatedstorage:gold_chest", '{woodType: "spruce"}'),
    ["#forge:chests", "create:andesite_alloy"]
  );
  // Andesite Barrel
  event.recipes.create.deploying(
    Item.of("sophisticatedstorage:gold_barrel", '{woodType: "spruce"}'),
    ["#forge:barrels", "create:andesite_alloy"]
  );
  // Andesite Drawer 1
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_1",
      '{woodType: "spruce"}'
    ),
    [" L ", " B ", "   "],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:gold_barrel",
        '{woodType: "spruce"}'
      ).strongNBT(),
    }
  );
  // Andesite Drawer 2
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_2",
      '{woodType: "spruce"}'
    ),
    ["   ", "LBL", "   "],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:gold_barrel",
        '{woodType: "spruce"}'
      ).strongNBT(),
    }
  );
  // Andesite Drawer 3
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_3",
      '{woodType: "spruce"}'
    ),
    [" L ", " B ", "L L"],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:gold_barrel",
        '{woodType: "spruce"}'
      ).strongNBT(),
    }
  );
  // Andesite Drawer 4
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_gold_barrel_4",
      '{woodType: "spruce"}'
    ),
    ["L L", " B ", "L L"],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:gold_barrel",
        '{woodType: "spruce"}'
      ).strongNBT(),
    }
  );

  // Brass Chest
  event.recipes.create.deploying(
    Item.of("sophisticatedstorage:netherite_chest", '{woodType: "dark_oak"}'),
    ["#forge:chests", "create:andesite_alloy"]
  );
  // Brass Barrel
  event.recipes.create.deploying(
    Item.of("sophisticatedstorage:netherite_barrel", '{woodType: "dark_oak"}'),
    ["#forge:barrels", "create:andesite_alloy"]
  );
  // Brass Drawer 1
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_1",
      '{woodType: "dark_oak"}'
    ),
    [" L ", " B ", "   "],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:netherite_barrel",
        '{woodType: "dark_oak"}'
      ).strongNBT(),
    }
  );
  // Brass Drawer 2
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_2",
      '{woodType: "dark_oak"}'
    ),
    ["   ", "LBL", "   "],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:netherite_barrel",
        '{woodType: "dark_oak"}'
      ).strongNBT(),
    }
  );
  // Brass Drawer 3
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_3",
      '{woodType: "dark_oak"}'
    ),
    [" L ", " B ", "L L"],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:netherite_barrel",
        '{woodType: "dark_oak"}'
      ).strongNBT(),
    }
  );
  // Brass Drawer 4
  event.shaped(
    Item.of(
      "sophisticatedstorage:limited_netherite_barrel_4",
      '{woodType: "dark_oak"}'
    ),
    ["L L", " B ", "L L"],
    {
      L: "#minecraft:logs",
      B: Item.of(
        "sophisticatedstorage:netherite_barrel",
        '{woodType: "dark_oak"}'
      ).strongNBT(),
    }
  );
});
