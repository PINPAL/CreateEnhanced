ServerEvents.recipes((event) => {
  event.recipes.createMechanicalCrafting(
    Item.of(
      "create:extendo_grip",
      '{Unbreakable:1b,CurioAttributeModifiers:[{AttributeName:"generic.attack_knockback",Name:"generic.attack_knockback",Amount:3,Operation:0,UUID:[I;1203229738,-1965539080,-1341673873,592198839],Slot:"hands"},{AttributeName:"forge:attack_range",Name:"forge:attack_range",Amount:3,Operation:0,UUID:[I;-1826537097,-1713487428,-1545263740,-720620157],Slot:"hands"},{AttributeName:"forge:reach_distance",Name:"forge:reach_distance",Amount:3,Operation:0,UUID:[I;775495772,434720553,-1780503515,1389346287],Slot:"hands"}]}'
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
