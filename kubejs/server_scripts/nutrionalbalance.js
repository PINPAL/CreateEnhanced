ServerEvents.recipes((event) => {
	// Cooking Pot
	event.shaped("farmersdelight:cooking_pot", ["B B", "IWI", "III"], {
		B: "minecraft:brick",
		W: "minecraft:water_bucket",
		I: "#forge:ingots/iron",
	});
});

const nutritionAPI = Java.loadClass("com.dannyandson.nutritionalbalance.nutrients.PlayerNutritionData");

function generateHunchString(nutrient, fillLevel) {
	let hunchOutline = "";
	let hunchFilled = "";
	if (nutrient === "veggies") {
		hunchOutline = "\uEff1";
		hunchFilled = "\uEff2";
	}
	if (nutrient === "proteins") {
		hunchOutline = "\uEff3";
		hunchFilled = "\uEff4";
	}
	if (nutrient === "carbs") {
		hunchOutline = "\uEff5";
		hunchFilled = "\uEff6";
	}

	if (fillLevel <= 10) {
		return hunchOutline + hunchOutline + hunchOutline;
	}
	if (fillLevel <= 33) {
		return hunchFilled + hunchOutline + hunchOutline;
	}
	if (fillLevel <= 66) {
		return hunchFilled + hunchFilled + hunchOutline;
	} else {
		return hunchFilled + hunchFilled + hunchFilled;
	}
}

PlayerEvents.tick((event) => {
	let nutrients = nutritionAPI.getWorldNutritionData().getNutritionalBalancePlayer(event.player).getPlayerNutrients();
	let nutrientVeggies = "";
	let nutrientProteins = "";
	let nutrientCarbs = "";
	nutrients.forEach((nutrient) => {
		let nutrientName = nutrient.getNutrientName();
		let nutrientValue = nutrient.getValue();
		switch (nutrientName) {
			case "vegetables":
				nutrientVeggies = nutrientValue.toFixed(1);
				break;
			case "proteins":
				nutrientProteins = nutrientValue.toFixed(1);
				break;
			case "carbs":
				nutrientCarbs = nutrientValue.toFixed(1);
				break;
		}
	});
	event.player.paint({
		veggies: { remove: true },
		proteins: { remove: true },
		carbs: { remove: true },
	});
	event.player.paint({
		veggies: {
			type: "text",
			text: generateHunchString("veggies", nutrientVeggies),
			draw: "ingame",
			scale: 1.0,
			x: 25,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		proteins: {
			type: "text",
			text: generateHunchString("proteins", nutrientProteins),
			draw: "ingame",
			scale: 1.0,
			x: 55,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
		carbs: {
			type: "text",
			text: generateHunchString("carbs", nutrientCarbs),
			draw: "ingame",
			scale: 1.0,
			x: 85,
			y: -37,
			alignX: "center",
			alignY: "bottom",
		},
	});
});
