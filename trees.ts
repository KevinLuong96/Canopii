export const decision = {
  Coniferous: {},
  Deciduous: {
    "Simple Leaf": {
      "Opposite Branching": {
        "Rough, Non-rounded Bottom": {
          trees: [
            "Acer Saccharinum, Acer Platanoides/Acer Saccharum",
            "Acer Rubrum",
            "Quercus Rubra",
          ],
        },
        "Smooth, Rounded Bottom": {
          trees: ["Acer Rubrum", "Syringa Reticulata", "Acer Ginnala"],
        },
      },
      "Alternate Branching": {
        "Lobed Leaf": {
          trees: [
            "Ginkgo Biloba",
            "Quercus Robur",
            "Quercus Macrocarpa",
            "Malus Coronaria",
          ],
        },
        "Entire Leaf": {
          "Rounded Base": {
            trees: ["Amelanchier canadensis", "Pyrus calleryana"],
          },
          "Pointed Base": {
            trees: [
              "Betula pendula",
              "Elaeagnus angustifolia",
              "Salix nigra",
              "Salix amygdaloides",
              "Ulmus pumila",
            ],
          },
          "Heart Base": {
            trees: ["Celtis occidentalis", "Tilia americana", "Tilia cordata"],
          },
        },
      },
    },
    "Compound Leaf": {
      "Opposite Branching": {
        trees: ["Acer Negundo", "Fraxinus Americana", "Fraxinus Pennsylvanica"],
      },
      "Alternate Branching": {
        trees: [
          "Gleditsia triacanthos",
          "Juglans nigra",
          "Sorbus aucuparia",
          "Sorbus x hybrida",
        ],
      },
    },
  },
};
export const descriptions = {
  // TODO: add rough bottom
  "Simple Leaf": {
    text: "The leaf stem is the same as the main vein for that leaf.",
    image: require("./images/SimpleLeaf.png"),
  },
  "Compound Leaf": {
    text: "A single leaf with numerous leaflets.",
    image: require("./images/CompoundLeaf.png"),
  },
  "Opposite Branching": {
    text: "Leaves grow directly across from each other.",
    image: require("./images/OppositeBranching.png"),
  },
  "Alternate Branching": {
    text: "Leaves do not grow directly across from each other.",
    image: require("./images/AlternateBranching.png"),
  },
  "Lobed Leaf": {
    text: "Leaf has distinct protrusions which make it irregular shaped.",
    image: require("./images/LobedLeaf1.png"),
  },
  "Entire Leaf": {
    text: "The leaf does not have division",
    image: require("./images/EntireLeaf.png"),
  },
  "Rounded Base": {
    text: "Leaf base is rounded towards the stem.",
    image: require("./images/RoundBase.png"),
  },
  "Pointed Base": {
    text: "Leaf base is sharp towards the stem.",
    image: require("./images/SharpBase.png"),
  },
  "Heart Base": {
    text: "Leaf base is shaped as an inverted heart towards the stem.",
    image: require("./images/HeartBase.png"),
  },
  Deciduous: {
    text: "Leafy trees which shed their leaves anually.",
    image: require("./images/SimpleLeaf.png"),
  },
  Coniferous: {
    text:
      "Trees with needle=like or scale-like leaves which do not shed their leaves.",
    image: require("./images/CompoundLeaf.png"),
  },
};
