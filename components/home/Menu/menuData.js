

export const menuData = {
  allDayMenu: [
    {
      id: 1,
      name: "Bagel and Cream Cheese",
      description: "Freshly baked bagel with cream cheese",
      price: 4.5,
      image: require("../../../assets/plain.png"),
    },
    {
      id: 2,
      name: "Sriracha Maple Tandem Sandwich",
      description:
        "Egg, cheddar, spinach, and bacon topped with sriracha maple syrup",
      price: 7.29,
      image: require("../../../assets/siracha.png"),
    },
    {
      id: 3,
      name: "Yogurt Parfait",
      description:
        "Nonfat Greek vanilla yogurt with blueberries, strawberries and house made granola",
      price: 5.79,
      image: require("../../../assets/yogurt.png"),
    },
    {
      id: 4,
      name: "Full Caeser Salad",
      description:
        "Romaine lettuce, Parmesan cheese, house made croutons (contain dairy), and Caesar dressing.",
      price: 8.99,
      image: require("../../../assets/salad.png"),
    },
    {
      id: 5,
      name: "The Tandem Classic",
      description:
        "Plain cream cheese, smoked salmon, tomatoes, red onions, and capers.",
      price: 9.49,
      image: require("../../../assets/classic.png"),
    },
  ],
  popularItems: [
    {
      id: 1,
      name: "Egg Sandwich",
      description: "Bagel with egg and sausage and your choice of cheese",
      price: 3.69,
      image: require("../../../assets/eggsan.png"),
    },
    {
      id: 2,
      name: "Iced Coffee",
      description: "Chilled coffee with milk and sweetener",
      price: 3.19,
      image: require("../../../assets/iced.png"),
    },
    {
      id: 3,
      name: "Spicy Tandem Sandwich",
      description:
        "Egg, bacon, cheddar cheese, spinach, jalapeno's, and chipotle mayo.",
      price: 7.29,
      image: require("../../../assets/spicy.png"),
    },
  ],
  foodTypes: [
    {
      title: "Bagels",
      data: [
        {
          id: 1,
          name: "Bagel and Cream Cheese",
          description: "Freshly baked bagel with cream cheese",
          price: 4.5,
          image: require("../../../assets/plain.png"),
        },
        {
          id: 2,
          name: "Lox Bagel",
          description:
            "Smoked salmon, cream cheese, tomato, and red onion on a bagel",
          price: 9.5,
          image: require("../../../assets/classic.png"),
        },
      ],
    },
    {
      title: "Breakfast Sandwiches",
      data: [
        {
          id: 1,
          name: "Breakfast Sandwich",
          description: "Egg, cheese, and bacon on a bagel",
          price: 6.5,
          image: require("../../../assets/eggsan.png"),
        },
        {
          id: 2,
          name: "Fresh Tandem Sandwich",
          description:
            "Egg, pepper jack cheese, tomato, red onions, and avocado.",
          price: 6.99,
          image: require("../../../assets/fresh.png"),
        },
        {
          id: 3,
          name: "Spicy Tandem Sandwich",
          description:
            "Egg, bacon, cheddar cheese, spinach, jalapeno's, and chipotle mayo.",
          price: 7.29,
          image: require("../../../assets/spicy.png"),
        },
      ],
    },
    {
      title: "Beverages",
      data: [
        {
          id: 1,
          name: "Iced Coffee",
          description: "Chilled coffee with milk and sweetener",
          price: 3.19,
          image: require("../../../assets/iced.png"),
        },
        {
          id: 2,
          name: "Iced Chocolate Macaroon Latte",
          description:
            "Chocolate sauce and coconut syrup, with espresso and milk of choice served over ice. Topped with whipped cream and shredded coconut.",
          price: 5.49,
          image: require("../../../assets/Iced1.png"),
        },
      ],
    },
    {
      title: "Lunch Sandwiches",
      data: [
        {
          id: 1,
          name: "Classic BLT",
          description: "Bacon, lettuce, tomato, and mayonnaise.",
          price: 7.79,
          image: require("../../../assets/blt.png"),
        },
        {
          id: 2,
          name: "Turkey Chipotle",
          description:
            "Turkey, cheddar cheese, avocado, oven roasted tomatoes, spinach, and chipotle mayo.",
          price: 8.29,
          image: require("../../../assets/turkey.png"), //change
        },
      ],
    },
    {
      title: "Salads",
      data: [
        {
          id: 1,
          name: "Full Caeser Salad",
          description:
            "Romaine lettuce, Parmesan cheese, house made croutons (contain dairy), and Caesar dressing.",
          price: 8.99,
          image: require("../../../assets/salad.png"),
        },
        {
          id: 2,
          name: "Full Santa Fe Salad",
          description:
            "Field greens, corn, black beans, avocado, red onions, cherry tomatoes, tortilla strips, and chipotle ranch dressing.",
          price: 9.99,
          image: require("../../../assets/santa.png"),
        },
      ],
    },
    {
      title: "Cream Cheese",
      data: [
        {
          id: 1,
          name: "Tub Bacon Scallion Cream Cheese",
          description: "Lipsum Dorem",
          price: 6.5,
        },
        {
          id: 2,
          name: "Tub Double Olive Cream Cheese",
          description: "Lipsum Dorem",
          price: 6.5,
        },
      ],
    },
    {
      title: "Extras",
      data: [
        {
          id: 1,
          name: "Scone",
          description: "Lipsum Dorem",
          price: 2.49,
          image: require("../../../assets/scone.png"),
        },
        {
          id: 2,
          name: "Muffin",
          description: "Lipsum Dorem",
          price: 2.19,
          image: require("../../../assets/muffin.png"),
        },
      ],
    },
  ],
};

export const foodTypes = [
  "Bagels",
  "Breakfast Sandwiches",
  "Beverages",
  "Lunch Sandwiches",
  "Salads",
  "Cream Cheese",
  "Extras",
];

export const popularItems = [
  {
    id: 1,
    name: "Egg Sandwich",
    description: "Bagel with egg and sausage and your choice of cheese",
    price: 3.69,
    image: require("../../../assets/eggsan.png"),
  },
  {
    id: 2,
    name: "Iced Coffee",
    description: "Chilled coffee with milk and sweetener",
    price: 3.19,
    image: require("../../../assets/iced.png"),
  },
  {
    id: 3,
    name: "Spicy Tandem Sandwich",
    description:
      "Egg, bacon, cheddar cheese, spinach, jalapeno's, and chipotle mayo.",
    price: 7.29,
    image: require("../../../assets/spicy.png"),
  },
];

export const allDayMenu = [
  {
    id: 1,
    name: "Bagel and Cream Cheese",
    description: "Freshly baked bagel with cream cheese",
    price: 4.5,
    image: require("../../../assets/plain.png"),
  },
  {
    id: 2,
    name: "Sriracha Maple Tandem Sandwich",
    description:
      "Egg, cheddar, spinach, and bacon topped with sriracha maple syrup",
    price: 7.29,
    image: require("../../../assets/siracha.png"),
  },
  {
    id: 3,
    name: "Yogurt Parfait",
    description:
      "Nonfat Greek vanilla yogurt with blueberries, strawberries and house made granola",
    price: 5.79,
    image: require("../../../assets/yogurt.png"),
  },
  {
    id: 4,
    name: "Full Caeser Salad",
    description:
      "Romaine lettuce, Parmesan cheese, house made croutons (contain dairy), and Caesar dressing.",
    price: 8.99,
    image: require("../../../assets/salad.png"),
  },
  {
    id: 5,
    name: "The Tandem Classic",
    description:
      "Plain cream cheese, smoked salmon, tomatoes, red onions, and capers.",
    price: 9.49,
    image: require("../../../assets/classic.png"),
  },
];
