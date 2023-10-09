ServerEvents.recipes((event) => {
  event.recipes.createMechanicalCrafting(
    Item.of(
      "create:extendo_grip",
      '{CurioAttributeModifiers:[{AttributeName:"forge:reach_distance",Name:"forge:reach_distance",Amount:3,Operation:0,UUID:[I;775495772,434720553,-1780503515,1389346287],Slot:"hands"}]}'
    ),
    [" I ", " P ", "SSS", "SSS", " H "],
    {
      I: "#forge:ingots/brass",
      P: "create:precision_mechanism",
      S: "minecraft:stick",
      H: "create:brass_hand",
    }
  );
});

// Tag items as curios
ServerEvents.tags("item", (event) => {
  event.add("curios:hands", "create:extendo_grip");
});
