// Get meal selection elements
const breakfastMealSelect = document.getElementById('breakfast-meal');
const lunchMealSelect = document.getElementById('lunch-meal');
const dinnerMealSelect = document.getElementById('dinner-meal');

// Update meals button
const updateMealsButton = document.querySelector('.btn-update');

// Event listener for update meals button
updateMealsButton.addEventListener('click', updateMeals);

// Function to handle meal selection update
function updateMeals(event) {
  event.preventDefault();

  const breakfastMeal = breakfastMealSelect.value;
  const lunchMeal = lunchMealSelect.value;
  const dinnerMeal = dinnerMealSelect.value;

  // Perform necessary actions with the selected meals
  console.log('Selected Meals:');
  console.log('Breakfast:', breakfastMeal);
  console.log('Lunch:', lunchMeal);
  console.log('Dinner:', dinnerMeal);

  // You can perform further actions here, such as updating the UI or making API requests.
}

// JavaScript code

// Get the "Get Started" button
const getStartedButton = document.querySelector('.cta-button');

// Event listener for the "Get Started" button
getStartedButton.addEventListener('click', scrollToMealPlans);

// Function to scroll to the "Meal Plans" section
function scrollToMealPlans(event) {
  event.preventDefault();

  const mealPlansSection = document.getElementById('meal-plans');
  mealPlansSection.scrollIntoView({ behavior: 'smooth' });
}

