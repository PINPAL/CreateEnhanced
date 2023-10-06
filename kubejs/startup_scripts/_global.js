// priority: 2

// function to replace _ with space and capitalise first letter of each word
function formatName(name) {
  return name.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}
