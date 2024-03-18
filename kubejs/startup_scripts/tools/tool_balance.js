ItemEvents.modification((event) => {
	// Neon Torch
	event.modify("create_things_and_misc:neon_tube", (item) => {
		item.maxDamage = 16;
	});

	// Paxel
	event.modify("kubejs:copper_paxel", (item) => {
		item.maxDamage = 500;
		item.digSpeed = 6;
	});
});
