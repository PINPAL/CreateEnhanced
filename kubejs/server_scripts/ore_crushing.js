const ores = [
  { name: "iron", mod: "minecraft" },
  { name: "gold", mod: "minecraft" },
  { name: "copper", mod: "minecraft" },
  { name: "tin", mod: "create_dd" },
  { name: "zinc", mod: "create" },
];

ServerEvents.recipes((event) => {
  ores.forEach((ore) => {
    event.remove([
      {
        type: "create:crushing",
        input: `${ore.mod}:raw_${ore.name}`,
      },
      {
        type: "create:crushing",
        input: `${ore.mod}:${ore.name}_ore`,
      },
      {
        type: "create:crushing",
        input: `${ore.mod}:deepslate_${ore.name}_ore`,
      },
    ]);

    event.recipes.create.crushing(
      [
        `create:crushed_raw_${ore.name}`,
        Item.of(`create:crushed_raw_${ore.name}`).withChance(0.5),
        Item.of("create:experience_nugget").withChance(0.75),
      ],
      [`${ore.mod}:raw_${ore.name}`]
    );

    event.recipes.create.crushing(
      [
        `2x create:crushed_raw_${ore.name}`,
        Item.of(`create:crushed_raw_${ore.name}`).withChance(0.75),
        Item.of("create:experience_nugget").withChance(0.95),
      ],
      [`#forge:ores/${ore.name}`]
    );
  });
});
