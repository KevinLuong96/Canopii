export const decision = {
  Coniferous: {},
  Deciduous: {
    "Simple Leaf": {
      "Opposite Branching": {
        "Rough, Non-rounded Bottom": {
          trees: [
            {
              sciName: "Acer Saccharinum",
              name: "Silver Maple",
            },
            {
              sciName: "Acer Platanoides/Acer Saccharum",
              name: "Norway or Sugar Maple",
            },
            {
              sciName: "Acer Rubrum",
              name: "Red Maple",
            },
            {
              sciName: "Quercus Rubra",
              name: "Northern Red Oak",
            },
          ],
        },
        "Smooth, Rounded Bottom": {
          trees: [
            {
              sciName: "Acer Rubrum",
              name: "Red Maple",
            },
            {
              sciName: "Japanese Lilac",
              name: "Syringa Reticulata",
            },
            {
              sciName: "Acer Ginnala",
              name: "Amur Maple",
            },
          ],
        },
      },
      "Alternate Branching": {
        "Lobed Leaf": {
          trees: [
            {
              sciName: "Ginkgo Biloba",
              name: "Maidenhair Tree",
            },
            {
              sciName: "Quercus Robur",
              name: "English Oak",
            },
            {
              sciName: "Bur Oak",
              name: "Quercus Macrocarpa",
            },
            {
              sciName: "Sweet Crabapple",
              name: "Malus Coronaria",
            },
          ],
        },
        "Entire Leaf": {
          "Rounded Base": {
            trees: [
              {
                sciName: "Shadblow Serviceberry",
                name: "Amelanchier canadensis",
              },
              {
                sciName: "Callery Pear",
                name: "Pyrus calleryana",
              },
            ],
          },
          "Pointed Base": {
            trees: [
              {
                sciName: "Silver Birch",
                name: "Betula pendula",
              },
              {
                sciName: "Russian Olive",
                name: "Elaeagnus angustifolia",
              },
              {
                sciName: "Black Willow",
                name: "Salix nigra",
              },
              {
                sciName: "Peachleaf Willow",
                name: "Salix amygdaloides",
              },
              {
                sciName: "Siberian Elm",
                name: "Ulmus pumila",
              },
            ],
          },
          "Heart Base": {
            trees: [
              {
                sciName: "Common Hackberry",
                name: "Celtis occidentalis",
              },
              {
                sciName: "American Basswood",
                name: "Tilia americana",
              },
              {
                sciName: "Littleleaf Linden",
                name: "Tilia cordata",
              },
            ],
          },
        },
      },
    },
    "Compound Leaf": {
      "Opposite Branching": {
        trees: [
          {
            sciName: "Boxelder Maple",
            name: "Acer Negundo",
          },
          {
            sciName: "White Ash",
            name: "Fraxinus Americana",
          },
          {
            sciName: "Green Ash",
            name: "Fraxinus Pennsylvanica",
          },
        ],
      },
      "Alternate Branching": {
        trees: [
          {
            sciName: "Honey Locust",
            name: "Gleditsia triacanthos",
          },
          {
            sciName: "Black Walnut",
            name: "Juglans nigra",
          },
          {
            sciName: "European Mountain Ash",
            name: "Sorbus aucuparia",
          },
          {
            sciName: "Oakleaf Mountain Ash",
            name: "Sorbus x hybrida",
          },
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
  "Rough, Non-rounded Bottom": {
    text: "TODO: PUT TEXT IN HERE! THIS IS TEMPORARY TEXTss",
    image: require("./images/OppositeBranching.png"),
  },
  "Smooth, Rounded Bottom": {
    text: "TODO: PUT TEXT IN HERE! THIS IS TEMPORARY TEXTss",
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
    image: require("./images/Deciduous.png"),
  },
  Coniferous: {
    text:
      "Trees with needle=like or scale-like leaves which do not shed their leaves.",
    image: require("./images/Coniferous.png"),
  },
};
