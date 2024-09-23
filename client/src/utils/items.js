import mWhiteCabin from "./Luggage/m-white-cabin.webp";
import mWhiteMed from "./Luggage/m-white-med.webp";
import mWhiteLarge from "./Luggage/m-white-large.webp";

export const luggage = [
  {
    name: "Trailed M99",
    cabin: {
      wasPrice: 1999,
      offer: 50,
      price: 999,
      colors: [
        {
          color: "White",
          image: { mWhiteCabin },
        },
        {
          color: "White",
          image: { mWhiteCabin },
        },
      ],
    },

    medium: {
      type: "medium",
      wasPrice: 2999,
      offer: 50,
      price: 999,
      colors: [
        {
          color: "White",
          image: { mWhiteMed },
        },
      ],
    },
    large: {
      type: "large",
      wasPrice: 3999,
      offer: 50,
      price: 999,
      colors: [
        {
          color: "White",
          image: { mWhiteLarge },
        },
      ],
    },
  },
  {
    name: "Trailed M99",
    types: [
      {
        type: "cabin",
        wasPrice: 1999,
        offer: 50,
        price: 999,
        colors: [
          {
            color: "White",
            image: { mWhiteCabin },
          },
        ],
      },
      {
        type: "medium",
        wasPrice: 2999,
        offer: 50,
        price: 999,
        colors: [
          {
            color: "White",
            image: { mWhiteMed },
          },
        ],
      },
      {
        type: "large",
        wasPrice: 3999,
        offer: 50,
        price: 999,
        colors: [
          {
            color: "White",
            image: { mWhiteLarge },
          },
        ],
      },
    ],
  },
];
