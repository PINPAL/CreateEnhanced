// Remove salting tag
ServerEvents.tags("item", (event) => {
  event.removeAll("salt:can_be_salted");
});
