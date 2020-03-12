export const decision = {
  Coniferous: {
    "Bundled Needles": {
      "Two-Three Needles": {
        "Pinus Sylvestris": {
          trees: [
            {
              ID: 124,
              sciName: "Pinus Sylvestris",
              name: "Scots Pine",
            },
          ],
        },
        "Pinus Nigra": {
          trees: [
            {
              ID: 107,
              sciName: "Pinus Nigra",
              name: "European Black Pine",
            },
          ],
        },
      },
      "Five Needles": {
        trees: [
          {
            ID: 123,
            sciName: "Pinus Strobus",
            name: "Eastern White Pine",
          },
        ],
      },
    },
    "Individual Needles": {
      Needles: {
        "3.5-6.75 Inch Long Cones": {
          trees: [
            {
              ID: 74,
              sciName: "Picea Abies",
              name: "Norway Spruce",
            },
          ],
        },
        "1-4 Inch Long Cones": {
          trees: [
            {
              ID: 80,
              sciName: "Picea Pungens",
              name: "Blue Spruce",
            },
            {
              ID: 77,
              sciName: "Picea Glauca",
              name: "White Spruce",
            },
          ],
        },
      },
      Scales: {
        trees: [
          {
            ID: 48,
            sciName: "Thuja Occidentalis",
            name: "Eastern Aborvitae",
          },
        ],
      },
    },
  },
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
    text: "Your tree has needle or scale-like leaves.",
    image: require("./images/Coniferous.png"),
  },
  "Bundled Needles": {
    text: "The needles come in groups out of the stems.",
    image: require("./images/BundledNeedles.png"),
  },
  "Two-Three Needles": {
    text: "There are 2 or 3 needles in each bundle.",
    image: require("./images/TwoOrThreeBundleNeedles.png"),
  },
  "Pinus Sylvestris": {
    text: "The needles on the tree are 2-3 inches long.",
    image: require("./images/Coniferous.png"),
  },
  "Pinus Nigra": {
    text: "The needles on the tree are 3-5 inches long.",
    image: require("./images/Coniferous.png"),
  },
  "Five Needles": {
    text: "There are 5 needles in each bundle.",
    image: require("./images/FiveBundleNeedles.png"),
  },
  Needles: {
    text: "Your tree has needles.",
    image: require("./images/Needles.png"),
  },
  "Individual Needles": {
    text: "Individual needles come out of the stem.",
    image: require("./images/IndividualNeedles.png"),
  },
  "3.5-6.75 Inch Long Cones": {
    text: "The cones on the tree are 3.5 to 6.75 inches long.",
    image: require("./images/Coniferous.png"),
  },
  "1-4 Inch Long Cones": {
    text: "The cones on the tree are 1-4 inches long and no longer.",
    image: require("./images/Coniferous.png"),
  },
  Scales: {
    text: "Your tree has scale-like leaves. ",
    image: require("./images/Scales.png"),
  },
};
