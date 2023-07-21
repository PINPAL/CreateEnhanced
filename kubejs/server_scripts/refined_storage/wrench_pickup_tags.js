// Make refined storage recipes wrench compatible
ServerEvents.tags("item", (event) => {
  // Get the #create:wrench_pickup tag collection and add Refined Storage Cable to it
  event.get('create:wrench_pickup').add('refinedstorage:cable')
});