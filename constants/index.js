export const categories = [
    {
      id: 1,
      name: "Pizza",
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 2,
      name: "Burger",
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 3,
      name: "Italian",
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 4,
      name: "Mexican",
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 5,
      name: "Sushi",
      image: require('../assets/images/pizzaIcon.png'),
    },
    {
      id: 6,
      name: "Indian",
      image: require('../assets/images/pizzaIcon.png'),
    }
  ];
  

export const featured = [
    {
      id: 1,
      title: "Hot and Spicy",
      description: "Experience the fiery flavors of local cuisine.",
      restaurants: [
        {
          id: 1,
          name: "Spice Haven",
          image: require('../assets/images/pizza.png'),
          lng: 45.1234,
          lat: 25.6789,
          address: "123 Spice Street, Kampala, Uganda",
          stars: 4.5,
          reviews: "4.4k",
          category: "Indian",
          dishes: [
            {
              id: 1,
              name: "Butter Chicken",
              description: "Tender chicken cooked in a rich buttery sauce.",
              price: "$10.99",
              image: require('../assets/images/pizzaDish.png'),
            },
            {
              id: 2,
              name: "Paneer Tikka",
              description: "Marinated cottage cheese cubes grilled to perfection.",
              price: "$8.99",
              image: require('../assets/images/pizzaDish.png'),
            },
            {
              id: 3,
              name: "Naan Bread",
              description: "Soft and fluffy traditional Indian bread.",
              price: "$2.99",
              image: require('../assets/images/pizzaDish.png'),
            }
          ]
        },
        {
          id: 2,
          name: "Burger Barn",
          image: require('../assets/images/pizza.png'),
          lng: 45.6789,
          lat: 25.1234,
          address: "456 Burger Avenue, Kampala, Uganda",
          stars: 4.2,
          reviews: "3.8k",
          category: "American",
          dishes: [
            {
              id: 4,
              name: "Classic Cheeseburger",
              description: "Juicy beef patty topped with melted cheese.",
              price: "$9.99",
              image: require('../assets/images/pizzaDish.png'),
            },
            {
              id: 5,
              name: "Crispy Chicken Sandwich",
              description: "Crispy fried chicken breast served on a toasted bun.",
              price: "$8.49",
              image: require('../assets/images/pizzaDish.png'),
            },
            {
              id: 6,
              name: "Fries",
              description: "Golden crispy fries served with ketchup.",
              price: "$2.49",
              image: require('../assets/images/pizzaDish.png'),
            }
          ]
        },
        {
          id: 3,
          name: "Pasta Palace",
          image: require('../assets/images/pizza.png'),
          lng: 45.3456,
          lat: 25.5678,
          address: "789 Pasta Lane, Kampala, Uganda",
          stars: 4.8,
          reviews: "5.2k",
          category: "Italian",
          dishes: [
            {
              id: 7,
              name: "Spaghetti Carbonara",
              description: "Classic Italian pasta dish with creamy sauce and bacon.",
              price: "$12.99",
              image:require('../assets/images/pizzaDish.png'),
            },
            {
              id: 8,
              name: "Margherita Pizza",
              description: "Traditional pizza topped with tomato sauce, mozzarella, and basil.",
              price: "$11.49",
              image: require('../assets/images/pizzaDish.png'),
            },
            {
              id: 9,
              name: "Tiramisu",
              description: "Decadent Italian dessert made with coffee-soaked ladyfingers and mascarpone cheese.",
              price: "$6.99",
              image: require('../assets/images/pizzaDish.png'),
            }
          ]
        }
      ]
    }
  ];
  