// Remove salting tag
ServerEvents.tags("item", (event) => {
  event.removeAll("salt:can_be_salted");
});

// Remove Salting Recipes
ServerEvents.recipes((event) => {
  event.remove({ id: "salt:salting" });
});
