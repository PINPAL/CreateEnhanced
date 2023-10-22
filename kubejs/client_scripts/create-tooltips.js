const colorOrange = 0xc7954b;
const colorYellow = 0xeeda78;

const itemsToTooltip = [
  {
    item: "create_things_and_misc:radar",
    summary: ["Makes nearby $Entities$ glow through walls."],
    controls: [
      {
        control: "R-Clicked",
        requiresHold: false,
        text: [
          "$Activates$ radar for $3 seconds$",
          "and triggers $30 second$ cooldown.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:slime_cake",
    summary: ["Allows you to $Grow$ small Slimes."],
    controls: [
      {
        control: "R-Clicked on a Slime",
        requiresHold: false,
        text: ["Makes the Slime $Grow$ to the next size."],
      },
    ],
  },
  {
    item: "create_things_and_misc:neon_tube",
    summary: ["Allows you to explore caves easily."],
    controls: [
      {
        control: "R-Clicked",
        requiresHold: false,
        text: [
          "$Throws$ a $Neon Tube$ where you are looking.",
          "Consumes $1 Durability$ per throw.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:mending_rune",
    summary: ["$Repair$ mending items using your $XP$."],
    controls: [
      {
        control: "in Main Hand",
        requiresHold: false,
        text: [
          "$Consumes$ XP from your $Experience Bar$",
          "to $Repair$ items in your $Off Hand$.",
          "or in your $Armor Slots$.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:magnifying_glass",
    summary: ["Allows you to read $Cards$ and $Tickets$."],
    controls: [
      {
        control: "R-Clicked",
        requiresHold: false,
        text: [
          "$Prints$ the information into the chat.",
          "Requires a $Card$ or $Ticket$ in your $Off Hand$.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:empty_card",
    summary: [
      "A $reusable$ key for the $Card Reader$.",
      "",
      "Put into a $Card Inscriber$ to $Write$",
      "your security code onto the card.",
    ],
  },
  {
    item: "create_things_and_misc:empty_ticket",
    summary: [
      "A $one time use$ key for the $Card Reader$.",
      "",
      "Put into a $Card Inscriber$ to $Write$",
      "your security code onto the card.",
    ],
  },
  {
    item: "create_things_and_misc:card_press",
    summary: [
      "Allows you to $Write$ to Cards and Tickets.",
      "",
      "Put a $Ticket$ or $Card$, along a $Nametag$ into",
      "the interface to $Write$ the security code.",
      "",
      "Cards $can't be reproduced$ by other players.",
    ],
  },
  {
    item: "create_things_and_misc:card_reader",
    summary: ["Allows you to read $Cards$ and $Tickets$."],
    controls: [
      {
        control: "R-Clicked with Card",
        requiresHold: false,
        text: [
          "If $Card$ matches the $Card Reader$'s code,",
          "will $output$ a $Redstone Signal$.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:sticky_launcher",
    summary: ["Jump like a $rabbit$!"],
    controls: [
      {
        control: "Jumped On",
        requiresHold: false,
        text: ["Launches you in the air like a $Slime Block$."],
      },
    ],
  },
  {
    item: "create_things_and_misc:brass_sticky_launcher",
    summary: ["Jump like a $super rabbit$!"],
    controls: [
      {
        control: "Jumped On",
        requiresHold: false,
        text: [
          "Launches you in the air like a $Slime Block$.",
          "Much higher than the $Copper Sticky Launcher$.",
        ],
      },
    ],
  },
  {
    item: "create_things_and_misc:sticky_boots_boots",
    summary: ["Jump like a $rabbit$!"],
    controls: [
      {
        control: "Crouch then Jump",
        requiresHold: true,
        text: ["To $Jump$ much higher than normal."],
      },
    ],
  },
  {
    item: "create_things_and_misc:sprinkler",
    summary: ["$Bonemeal$ your crops automatically."],
    controls: [
      {
        control: "Provided Dilluted Bonemeal",
        requiresHold: false,
        text: [
          "Every $5 Seconds$ it will consume",
          "$1000mb$ of $Dilluted Bonemeal$ and",
          "advance crop growth by $one stage$ in",
          "a $5x5$ area centered on itself.",
        ],
      },
    ],
  },
  {
    item: "storagedrawers:drawer_key",
    summary: ["$Locks$ your drawer."],
    controls: [
      {
        control: "R-Clicked on Drawer",
        requiresHold: false,
        text: [
          "Toggles the $Lock$ on the $Drawer$.",
          "which prevents any other items types",
          "from being put into the $Drawer$.",
        ],
      },
      {
        control: "in Off Hand",
        requiresHold: false,
        text: ["$Locks$ drawers when you $place$ them."],
      },
    ],
  },
  {
    item: "storagedrawers:quantify_key",
    summary: ["Toggles $Item Quantites$ on your drawer."],
    controls: [
      {
        control: "R-Clicked on Drawer",
        requiresHold: false,
        text: ["Toggles the $Item Quantity$ display", "on the $Drawer$."],
      },
      {
        control: "in Off Hand",
        requiresHold: false,
        text: [
          "$Hides$ $Item Quantity$ on new drawers",
          "when you $place$ them.",
        ],
      },
    ],
  },
  {
    item: "storagedrawers:shroud_key",
    summary: ["Toggles $Display$ on your drawer."],
    controls: [
      {
        control: "R-Clicked on Drawer",
        requiresHold: false,
        text: [
          "Toggles the $Information$ display",
          "on the $Drawer$. This $Hides$ the",
          "$Item Quantity$ and $Icon$.",
        ],
      },
      {
        control: "in Off Hand",
        requiresHold: false,
        text: ["$Hides$ $Everything$ on new drawers", "when you $place$ them."],
      },
    ],
  },
];

const drawerWoodTypes = [
  { name: "oak", mod: "storagedrawers:" },
  { name: "spruce", mod: "storagedrawers:" },
  { name: "birch", mod: "storagedrawers:" },
  { name: "jungle", mod: "storagedrawers:" },
  { name: "acacia", mod: "storagedrawers:" },
  { name: "dark_oak", mod: "storagedrawers:" },
  { name: "crimson", mod: "storagedrawers:" },
  { name: "warped", mod: "storagedrawers:" },
  { name: "bamboo", mod: "everycomp:sd/quark/" },
  { name: "spirit", mod: "everycomp:sd/create_dd/" },
  { name: "rose", mod: "everycomp:sd/create_dd/" },
  { name: "smoked", mod: "everycomp:sd/create_dd/" },
];
const drawerControls = [
  {
    control: "R-Clicked with Item",
    requiresHold: false,
    text: ["Places the $item stack$ into the $Drawer$."],
  },
  {
    control: "Double R-Clicked with Item",
    requiresHold: false,
    text: ["Places $all items of that type$ into the $Drawer$."],
  },
  {
    control: "Crouch & R-Clicked with Empty Hand",
    requiresHold: true,
    text: ["Opens the $Configuration Interface$"],
  },
];
drawerWoodTypes.forEach((woodType) => {
  itemsToTooltip.push({
    item: woodType.mod + woodType.name + "_full_drawers_1",
    summary: ["$One$ Item $Slot$", "Holds $32 Stacks$ per Slot."],
    controls: drawerControls,
    advancedControls: true,
  });
  itemsToTooltip.push({
    item: woodType.mod + woodType.name + "_full_drawers_2",
    summary: ["$Two$ Item $Slot$", "Holds $16 Stacks$ per Slot."],
    controls: drawerControls,
    advancedControls: true,
  });
  itemsToTooltip.push({
    item: woodType.mod + woodType.name + "_full_drawers_4",
    summary: ["$Four$ Item $Slot$", "Holds $8 Stacks$ per Slot."],
    controls: drawerControls,
    advancedControls: true,
  });
});

ItemEvents.tooltip((tooltip) => {
  itemsToTooltip.forEach((tooltipItem) => {
    // add the tooltip to the item
    tooltip.addAdvanced(tooltipItem.item, (item, advanced, text) => {
      // Hide Original Tooltip (leaving just text[0] which is the item name)
      let name = text.get(0);
      text.removeIf((e) => e != name);
      // Add Hold [Shift] for Summary
      if (!tooltip.shift) {
        text.add(1, [
          Text.of("Hold ").darkGray(),
          Text.of("[Shift]").gray(),
          Text.of(" for Summary").darkGray(),
        ]);
        // When Holding Shift
      } else {
        text.add(1, [
          Text.of("Hold ").darkGray(),
          Text.of("[Shift]").white(),
          Text.of(" for Summary").darkGray(),
        ]);
        text.add(2, []);
        // define line number
        let lineNumber = 3;
        tooltipItem.summary.forEach((line) => {
          text.add(lineNumber, createFormattedTextObjectArray(line));
          lineNumber++;
        });

        // Add Controls
        if (tooltipItem.hasOwnProperty("controls")) {
          tooltipItem.controls.forEach((control) => {
            text.add(lineNumber, []);
            lineNumber++;
            text.add(lineNumber, [
              Text.of(control.requiresHold ? "Hold " : "When ").gray(),
              Text.of(control.control).gray(),
            ]);
            lineNumber++;
            control.text.forEach((line) => {
              let formattedTextObjectArray =
                createFormattedTextObjectArray(line);
              // Add a space before each line
              formattedTextObjectArray.unshift(" ");
              // Add the line to the tooltip
              text.add(lineNumber, formattedTextObjectArray);
              lineNumber++;
            });
          });
        }
      }
    });
  });
});

/**
 *
 * A function to create a formatted text object array
 * Seperates the text by $ characters and then sets any text inside $ pairs to be orange
 *
 * @param {line} A string of text to be formatted
 * @returns {textObjects} An array of text objects
 */
function createFormattedTextObjectArray(line) {
  // check if the first character is a $, if it is, the summary starts with a yellow text
  let startsInYellow = line.startsWith("$");
  // remove the $ if it does
  if (startsInYellow) {
    line = line.substring(1);
  }
  // get the summary line and split it into an array
  let lineContents = line.split("$");
  // define an interator for the for each loop
  let i = 0;
  // Create an empty array for text objects to be added to
  let textObjects = [];
  lineContents.forEach((textComponent) => {
    // Every other text component is orange
    let textColor = i % 2 == 0 ? colorOrange : colorYellow;
    // Unless the summary starts with yellow
    if (startsInYellow) {
      textColor = i % 2 == 0 ? colorYellow : colorOrange;
    }
    // Add the text component and color it
    let textObject = new Text().of(textComponent);
    textObject.color(textColor);
    textObjects.push(textObject);
    i++;
  });
  return textObjects;
}
