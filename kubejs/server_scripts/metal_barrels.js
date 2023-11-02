ServerEvents.recipes((event) => {
	event.recipes.create.deploying("metalbarrels:iron_barrel", ["minecraft:barrel", "#forge:plates/andesite_alloy"]);
	event.recipes.create.deploying("metalbarrels:wood_to_iron", ["minecraft:stick", "#forge:plates/andesite_alloy"]);

	event.recipes.create.deploying("metalbarrels:gold_barrel", ["metalbarrels:iron_barrel", "#forge:plates/copper"]);
	event.recipes.create.deploying("metalbarrels:iron_to_gold", ["minecraft:stick", "#forge:plates/copper"]);

	event.recipes.create.deploying("metalbarrels:diamond_barrel", ["metalbarrels:gold_barrel", "#forge:plates/brass"]);
	event.recipes.create.deploying("metalbarrels:gold_to_diamond", ["minecraft:stick", "#forge:plates/brass"]);
});
