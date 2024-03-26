import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
// import { data } from './utils/data';



export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  if (selectedRecipe) {
    return <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
  } else {
  return <RecipeListPage clickFn={setSelectedRecipe} />;
}};
