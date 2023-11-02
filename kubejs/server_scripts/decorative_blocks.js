const ModBlockProperties = Java.loadClass("lilypuree.decorative_blocks.blocks.state.ModBlockProperties");
const SupportFaceShape = Java.loadClass("lilypuree.decorative_blocks.blocks.state.SupportFaceShape");

ServerEvents.recipes((event) => {
	// Lattice
	event.shaped(Item.of("decorative_blocks:lattice"), ["SS ", "SS ", "   "], {
		S: "minecraft:stick",
	});
});

BlockEvents.rightClicked((event) => {
	let block = event.getBlock();
	let isCrouching = event.getPlayer().isCrouching();
	let sideClickedOn = event.getFacing();
	if (block.hasTag("decorative_blocks:supports") && event.getItem() == "create:wrench") {
		let blockState = event.getBlock().getBlockState();

		// let facing = blockState.getValue(BlockProperties.FACING);
		let waterlogged = blockState.getValue(BlockProperties.WATERLOGGED);
		let up = blockState.getValue(BlockProperties.UP);
		let horizontal = blockState.getValue(ModBlockProperties.HORIZONTAL_SHAPE);
		let vertical = blockState.getValue(ModBlockProperties.VERTICAL_SHAPE);

		// console.log(facing);
		// console.log(up);
		// console.log(horizontal);
		// console.log(vertical);
		// console.log(sideClickedOn);
		if (sideClickedOn == Direction.UP) {
			// If crouching toggle hiding the side
			if (isCrouching) {
				block.set(block.getId(), {
					up: up,
					horizontal:
						horizontal == SupportFaceShape.HIDDEN ? SupportFaceShape.SMALL : SupportFaceShape.HIDDEN,
					vertical: vertical,
					waterlogged: waterlogged,
				});
			} else if (!isCrouching) {
				// Ensure that the side is not hidden
				if (horizontal != SupportFaceShape.HIDDEN) {
					block.set(block.getId(), {
						up: up,
						horizontal: horizontal == SupportFaceShape.BIG ? SupportFaceShape.SMALL : SupportFaceShape.BIG,
						vertical: vertical,
						waterlogged: waterlogged,
					});
				}
			}
		} else {
			// If crouching toggle hiding the side
			if (isCrouching) {
				block.set(block.getId(), {
					up: up,
					horizontal: horizontal,
					vertical: vertical == SupportFaceShape.HIDDEN ? SupportFaceShape.SMALL : SupportFaceShape.HIDDEN,
					waterlogged: waterlogged,
				});
			} else if (!isCrouching) {
				// Ensure that the side is not hidden
				if (vertical != SupportFaceShape.HIDDEN) {
					block.set(block.getId(), {
						up: up,
						horizontal: horizontal,
						vertical: vertical == SupportFaceShape.BIG ? SupportFaceShape.SMALL : SupportFaceShape.BIG,
						waterlogged: waterlogged,
					});
				}
			}
		}
	}
});
