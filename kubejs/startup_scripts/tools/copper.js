//priority: 1

ItemEvents.toolTierRegistry((event) => {
	event.add("copper", (tier) => {
		tier.uses = 180;
		tier.speed = 5;
		tier.attackDamageBonus = 2;
		tier.level = 2;
		tier.repairIngredient = "#forge:ingots/copper";
	});
});
ItemEvents.armorTierRegistry((event) => {
	event.add("copper", (tier) => {
		tier.durabilityMultiplier = 15;
		tier.slotProtections = [2, 4, 5, 2];
		tier.equipSound = "item.armor.equip_gold";
		tier.toughness = 0;
		tier.knockbackResistance = 0;
	});
});

StartupEvents.registry("item", (event) => {
	const types = ["sword", "hoe", "helmet", "chestplate", "leggings", "boots"];
	types.forEach((type) => {
		event
			.create(`copper_${type}`, `${type}`)
			.displayName(`Copper ${formatName(type)}`)
			.tier("copper")
			.unstackable();
	});
});
