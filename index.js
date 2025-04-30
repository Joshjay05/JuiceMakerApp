// Juice Maker App

// Store for all created juices
const juiceStore = [];

// Function to create a juice with ingredients and quantities
const juiceMaker = (juiceName, ingredients) => {
  // Validate inputs
  if (!juiceName || !ingredients || ingredients.length === 0) {
    return {
      success: false,
      message: "Please provide a juice name and at least one ingredient",
    };
  }

  // Create the juice object
  const newJuice = {
    name: juiceName,
    ingredients: ingredients,
    createdAt: new Date().toISOString(),
    id: `juice-${Date.now()}`,
  };

  // Add to juice store
  juiceStore.push(newJuice);

  // Generate a description of the juice
  let description = `${juiceName} contains: `;
  ingredients.forEach((item, index) => {
    description += `${item.quantity} ${item.unit} of ${item.name}`;
    if (index < ingredients.length - 1) {
      description += ", ";
    }
  });

  return {
    success: true,
    juice: newJuice,
    description: description,
  };
};

// Function to get all created juices
const getAllJuices = () => {
  return juiceStore;
};

// Function to get a juice by name
const getJuiceByName = (name) => {
  return juiceStore.filter((juice) =>
    juice.name.toLowerCase().includes(name.toLowerCase())
  );
};

// Example usage:
const orangeJuice = juiceMaker("Orange Juice", [
  { name: "orange", quantity: 4, unit: "medium" },
]);

const mixedFruitJuice = juiceMaker("Tropical Delight", [
  { name: "pineapple", quantity: 1, unit: "cup" },
  { name: "mango", quantity: 1, unit: "whole" },
  { name: "orange", quantity: 2, unit: "whole" },
]);

console.log(orangeJuice.description);
// Output: Orange Juice contains: 4 medium of orange

console.log(mixedFruitJuice.description);
// Output: Tropical Delight contains: 1 cup of pineapple, 1 whole of mango, 2 whole of orange

// User Interface functions (for integration with a front-end)
const promptForJuiceName = () => {
  // In a real app, this would use a UI prompt or input field
  return "What would you like to name your juice?";
};

const promptForIngredients = () => {
  // In a real app, this would use a UI prompt or input fields
  return "Please add your ingredients (name, quantity, and unit):";
};

const addIngredient = (ingredients, name, quantity, unit) => {
  ingredients.push({ name, quantity, unit });
  return ingredients;
};

const createUserJuice = (juiceName, ingredients) => {
  const result = juiceMaker(juiceName, ingredients);
  return result.description;
};

// Sample user interaction flow
function simulateUserInteraction() {
  console.log("Welcome to the Juice Maker App!");

  // Get juice name
  console.log(promptForJuiceName());
  const juiceName = "Berry Blast"; // This would come from user input

  // Get ingredients
  console.log(promptForIngredients());
  const userIngredients = [];

  // User adds ingredients one by one
  addIngredient(userIngredients, "strawberry", 5, "whole");
  addIngredient(userIngredients, "blueberry", 1, "cup");
  addIngredient(userIngredients, "apple", 1, "whole");

  // Create the juice
  const juiceResult = createUserJuice(juiceName, userIngredients);
  console.log("Your juice is ready!");
  console.log(juiceResult);
}

// Run the simulation
simulateUserInteraction();
