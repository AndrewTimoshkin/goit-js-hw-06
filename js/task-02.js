const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEL = document.querySelector(`#ingredients`);

const itemsListItemEL = ingredients.map(ingredient => {
  const
  itemEL = document.createElement('li');
  itemEL.classList.add('item');
  itemEL.textContent = `${ingredient}`;
  ingredientsListEL.append(itemEL);
  }
)

console.log(ingredientsListEL);
