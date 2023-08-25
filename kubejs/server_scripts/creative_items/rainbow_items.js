ServerEvents.recipes((event) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink",
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
  ];
  const chars = [
    "R",
    "O",
    "Y",
    "L",
    "G",
    "C",
    "0",
    "B",
    "P",
    "M",
    "1",
    "W",
    "2",
    "3",
    "4",
    "5",
  ];
  const toolbox = {};
  const valve_handle = {};
  const wool = {};
  const concrete = {};
  for (let i = 0; i < colors.length; i++) {
    toolbox[chars[i]] = `create:${colors[i]}_toolbox`;
    valve_handle[chars[i]] = `create:${colors[i]}_valve_handle`;
    wool[chars[i]] = `minecraft:${colors[i]}_wool`;
    concrete[chars[i]] = `minecraft:${colors[i]}_concrete`;
  }

  event.recipes.create.mechanical_crafting(
    "kubejs:rainbow_toolbox",
    [" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
    toolbox
  );

  event.recipes.create.mechanical_crafting(
    "kubejs:rainbow_valve_handle",
    [" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
    valve_handle
  );

  event.recipes.create.mechanical_crafting(
    "kubejs:rainbow_wool",
    [" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
    wool
  );

  event.recipes.create.mechanical_crafting(
    "kubejs:rainbow_concrete",
    [" R O ", "YLGC0", " B P ", "M1W23", " 4 5 "],
    concrete
  );
});
