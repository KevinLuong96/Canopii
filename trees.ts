export const decision = {
  Coniferous: { Bundled: {}, Individual: { Scales: {}, Needles: {} } },
  Deciduous: {
    "Simple Leaf": {
      "Opposite Branching": {
        "Angled Bottom": {
          trees: [
            {
              ID: 224,
              sciName: "Acer Saccharinum",
              name: "Silver Maple",
            },
            {
              ID: 225,
              sciName: "Acer Saccharum",
              name: "Sugar Maple",
            },
            { ID: 219, sciName: "Acer Platanoides", name: "Norway Maple" },
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
        "Rounded Bottom": {
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
          "Rounded Bottom": {
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
          "Pointed Bottom": {
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
          "Heart Bottom": {
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
    text: "Leaves have their own stems and they're directly on the branch.",
    image: require("./images/SimpleLeaf.png"),
  },
  "Compound Leaf": {
    text: "The leaf shares a stem with multiple other leaves.",
    image: require("./images/CompoundLeaf.png"),
  },
  "Opposite Branching": {
    text: "Branches grow directly across from each other.",
    image: require("./images/OppositeBranching.png"),
  },
  "Angled Bottom": {
    text: "The bottom of the leaf is sharply angled away from the stem.",
    image: require("./images/AngledBase.png"),
  },
  "Rounded Bottom": {
    text: "The bottom of the leaf is rounded.",
    image: require("./images/RoundBase.png"),
  },
  "Alternate Branching": {
    text: "Branches do not grow directly across from each other.",
    image: require("./images/AlternateBranching.png"),
  },
  "Lobed Leaf": {
    text: "Leaf has distinct protrusions which makes it irregular shaped.",
    image: require("./images/LobedLeaf1.png"),
  },
  "Entire Leaf": {
    text: "Leaf is one whole shape without major protrusions.",
    image: require("./images/EntireLeaf.png"),
  },
  "Pointed Bottom": {
    text: "The bottom of the leaf is tapered to a point.",
    image: require("./images/SharpBase.png"),
  },
  "Heart Bottom": {
    text: "The bottom of the leaf is shaped like an upside down heart.",
    image: require("./images/HeartBase.png"),
  },
  Deciduous: {
    text: "Your tree has flat broad leaves.",
    image: require("./images/Deciduous.png"),
  },
  Coniferous: {
    text: "Your tree has needle or scale-like leaves. ",
    image: require("./images/Coniferous.png"),
  },
};
