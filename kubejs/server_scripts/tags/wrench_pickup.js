const wrenchPickupables = [
  "refinedstorage:cable",
  /create_things_and_misc:.*_sail/,
];

// Make items wrench compatible
ServerEvents.tags("block", (event) => {
  wrenchPickupables.forEach((item) => {
    event.add("create:wrench_pickup", item);
  });
});
