ServerEvents.recipes((event) => {
  event
    .shaped("kubejs:leather_stitching", ["M M", "MSM", "M M"], {
      M: "#forge:leather",
      S: "#forge:string",
    })
    .id("kubejs:leather_stitching");

  event
    .shaped("kubejs:chainmail_stitching", ["M M", "MSM", "M M"], {
      M: "minecraft:chain",
      S: "#forge:string",
    })
    .id("kubejs:chainmail_stitching");

  event
    .shaped("kubejs:copper_stitching", ["M M", "MSM", "M M"], {
      M: "#forge:ingots/copper",
      S: "#forge:string",
    })
    .id("kubejs:copper_stitching");
});
