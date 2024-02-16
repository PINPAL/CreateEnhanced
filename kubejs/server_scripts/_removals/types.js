// priority: 1
const typesToRemove = ["minecraft:brewing"];

ServerEvents.recipes((event) => {
  typesToRemove.forEach((type) => {
    event.remove({ type: type });
  });
});
