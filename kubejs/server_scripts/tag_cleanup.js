// priority: -999
ServerEvents.tags("item", (event) => {
  //   event.removeAll("forge:tools/axes");
  event.add("forge:tools/axes", "#kubejs:paxel");
  //   event.removeAll("forge:axes");
  event.add("forge:axes", "#kubejs:paxel");
  //   event.removeAll("minecraft:axes");
  event.add("minecraft:axes", "#kubejs:paxel");

  //   event.removeAll("forge:tools/shovels");
  event.add("forge:tools/shovels", "#kubejs:paxel");
  //   event.removeAll("forge:shovels");
  event.add("forge:shovels", "#kubejs:paxel");
  //   event.removeAll("minecraft:shovels");
  event.add("minecraft:shovels", "#kubejs:paxel");
});
