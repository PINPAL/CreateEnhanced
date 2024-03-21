// priority: 2

// function to replace _ with space and capitalise first letter of each word
function formatName(name) {
	return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

Platform.mods.kubejs.name = "Create Complete Collection";
Platform.mods.refinedstorage.name = "Digital Storage";
Platform.mods.refinedstorageaddons.name = "Digital Storage";
