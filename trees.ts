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
              name: "Japanese Lilac",
              sciName: "Syringa Reticulata",
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
              name: "Bur Oak",
              sciName: "Quercus Macrocarpa",
            },
            {
              name: "Sweet Crabapple",
              sciName: "Malus Coronaria",
            },
          ],
        },
        "Entire Leaf": {
          "Rounded Base": {
            trees: [
              {
                name: "Shadblow Serviceberry",
                sciName: "Amelanchier canadensis",
              },
              {
                name: "Callery Pear",
                sciName: "Pyrus calleryana",
              },
            ],
          },
          "Pointed Base": {
            trees: [
              {
                name: "Silver Birch",
                sciName: "Betula pendula",
              },
              {
                name: "Russian Olive",
                sciName: "Elaeagnus angustifolia",
              },
              {
                name: "Black Willow",
                sciName: "Salix nigra",
              },
              {
                name: "Peachleaf Willow",
                sciName: "Salix amygdaloides",
              },
              {
                name: "Siberian Elm",
                sciName: "Ulmus pumila",
              },
            ],
          },
          "Heart Base": {
            trees: [
              {
                name: "Common Hackberry",
                sciName: "Celtis occidentalis",
              },
              {
                name: "American Basswood",
                sciName: "Tilia americana",
              },
              {
                name: "Littleleaf Linden",
                sciName: "Tilia cordata",
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
            name: "Boxelder Maple",
            sciName: "Acer Negundo",
          },
          {
            name: "White Ash",
            sciName: "Fraxinus Americana",
          },
          {
            name: "Green Ash",
            sciName: "Fraxinus Pennsylvanica",
          },
        ],
      },
      "Alternate Branching": {
        trees: [
          {
            name: "Honey Locust",
            sciName: "Gleditsia triacanthos",
          },
          {
            name: "Black Walnut",
            sciName: "Juglans nigra",
          },
          {
            name: "European Mountain Ash",
            sciName: "Sorbus aucuparia",
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
