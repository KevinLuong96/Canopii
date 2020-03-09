export const decision = {
  Coniferous: {},
  Deciduous: {
    "Simple Leaf": {
      "Opposite Branching": {
        "Rough, Non-rounded Bottom": {
          trees: [
            {
              ID: 224,
              sciName: "Acer Saccharinum",
              name: "Silver Maple",
            },
            {
              ID: 225,
              sciName: "Acer Platanoides/Acer Saccharum",
              name: "Norway or Sugar Maple",
            },
            {
              ID: 222,
              sciName: "Acer Rubrum",
              name: "Red Maple",
            },
            {
              ID: 819,
              sciName: "Quercus Rubra",
              name: "Northern Red Oak",
            },
          ],
        },
        "Smooth, Rounded Bottom": {
          trees: [
            {
              ID: 222,
              sciName: "Acer Rubrum",
              name: "Red Maple",
            },
            {
              ID: 1208,
              name: "Japanese Lilac",
              sciName: "Syringa Reticulata",
            },
            {
              ID: 190,
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
              ID: 162,
              sciName: "Ginkgo Biloba",
              name: "Maidenhair Tree",
            },
            {
              ID: 818,
              sciName: "Quercus Robur",
              name: "English Oak",
            },
            {
              ID: 803,
              name: "Bur Oak",
              sciName: "Quercus Macrocarpa",
            },
            {
              ID: 1385,
              name: "Sweet Crabapple",
              sciName: "Malus Coronaria",
            },
          ],
        },
        "Entire Leaf": {
          "Rounded Base": {
            trees: [
              {
                ID: 1336,
                name: "Shadblow Serviceberry",
                sciName: "Amelanchier canadensis",
              },
              {
                ID: 1447,
                name: "Callery Pear",
                sciName: "Pyrus calleryana",
              },
            ],
          },
          "Pointed Base": {
            trees: [
              {
                ID: 414,
                name: "Silver Birch",
                sciName: "Betula pendula",
              },
              {
                ID: 580,
                name: "Russian Olive",
                sciName: "Elaeagnus angustifolia",
              },
              {
                ID: 1567,
                name: "Black Willow",
                sciName: "Salix nigra",
              },
              {
                ID: 1547,
                name: "Peachleaf Willow",
                sciName: "Salix amygdaloides",
              },
              {
                ID: 1744,
                name: "Siberian Elm",
                sciName: "Ulmus pumila",
              },
            ],
          },
          "Heart Base": {
            trees: [
              {
                ID: 501,
                name: "Common Hackberry",
                sciName: "Celtis occidentalis",
              },
              {
                ID: 1706,
                name: "American Basswood",
                sciName: "Tilia americana",
              },
              {
                ID: 1708,
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
            ID: 210,
            name: "Boxelder Maple",
            sciName: "Acer Negundo",
          },
          {
            ID: 1188,
            name: "White Ash",
            sciName: "Fraxinus Americana",
          },
          {
            ID: 1195,
            name: "Green Ash",
            sciName: "Fraxinus Pennsylvanica",
          },
        ],
      },
      "Alternate Branching": {
        trees: [
          {
            ID: 694,
            name: "Honey Locust",
            sciName: "Gleditsia triacanthos",
          },
          {
            ID: 881,
            name: "Black Walnut",
            sciName: "Juglans nigra",
          },
          {
            ID: 1464,
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
