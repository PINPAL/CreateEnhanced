const incompleteAssemblies = [
  "saddle",
  "totem_of_undying",
  "creative_omega_potion",
  "name_tag",
];

StartupEvents.registry("item", (event) => {
  incompleteAssemblies.forEach((assembly) => {
    event
      .create("incomplete_" + assembly)
      .displayName("Incomplete " + formatName(assembly))
      .unstackable();
  });
});
