const weekMeals: string[][] = [[], [], [], []];

let selectedWeekIndex: number = 0;

const weekSelector = document.querySelector('#weekSelector') as HTMLSelectElement;
const mealInput = document.querySelector('#mealInput') as HTMLInputElement;
const addMealBtn = document.querySelector('#addMealBtn') as HTMLButtonElement;
const mealsList = document.querySelector('#meals') as HTMLUListElement;

const displayMeals = () => {
    mealsList.innerHTML = `<h3>Week ${selectedWeekIndex + 1}:</h3>\n`;
    weekMeals[selectedWeekIndex].forEach(meal => mealsList.innerHTML += `<li>${meal}</li>\n`)
}

const addMeal = () => {
    const meal = mealInput.value.trim();
    if (meal) {
        weekMeals[selectedWeekIndex].push(meal);
        mealInput.value = '';
        displayMeals();
    } else {
        alert('Fill in Meal');
    }
}

const updateSelectedWeek = () => {
    selectedWeekIndex = +weekSelector.value;
    displayMeals();
}

addMealBtn.addEventListener('click', addMeal);
weekSelector.addEventListener('change', updateSelectedWeek);

let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
