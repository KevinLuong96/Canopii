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
  "Simple Leaf": {
    text: "The leaf stem is the same as the main vein for that leaf.",
  },
  "Compound Leaf": {
    text: "A single leaf with numerous leaflets.",
  },
  "Opposite Branching": {
    text: "Leaves grow directly across from each other.",
  },
  "Alternate Branching": {
    text: "Leaves do not grow directly across from each other.",
  },
  "Lobed Leaf": {
    text: "Leaf has distinct protrusions which make it irregular shaped.",
  },
  "Entire Leaf": {
    text: "The leaf does not have division",
  },
  "Rounded Base": {
    text: "Leaf base is rounded towards the stem.",
  },
  "Pointed Base": {
    text: "Leaf base is sharp towards the stem.",
  },
  "Heart Base": {
    text: "Leaf base is shaped as an inverted heart towards the stem.",
  },
  Deciduous: {
    text: "Leafy trees which shed their leaves anually.",
  },
  Coniferous: {
    text:
      "Trees with needle=like or scale-like leaves which do not shed their leaves.",
  },
};
