//priority: 1

ItemEvents.toolTierRegistry((event) => {
	event.add("steel", (tier) => {
		tier.uses = 4096;
		tier.speed = 7;
		tier.attackDamageBonus = 3;
		tier.level = 3;
		tier.repairIngredient = "#forge:ingots/steel";
	});
});

ItemEvents.armorTierRegistry((event) => {
	event.add("steel", (tier) => {
		tier.durabilityMultiplier = 30;
		tier.slotProtections = [3, 7, 5, 3];
		tier.toughness = 1;
		tier.knockbackResistance = 0;
	});
});

StartupEvents.registry("item", (event) => {
	const types = ["sword", "hoe", "helmet", "chestplate", "leggings", "boots"];
	types.forEach((type) => {
		event
			.create(`steel_${type}`, `${type}`)
			.displayName(`Steel ${formatName(type)}`)
			.tier("steel")
			.unstackable();
	});
});
