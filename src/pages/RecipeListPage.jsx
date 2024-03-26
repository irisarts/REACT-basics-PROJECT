import { useState } from "react";
import { Recipe } from "../components/Recipe";
import { data } from "../utils/data";
import { Center, Heading, Input, SimpleGrid } from "@chakra-ui/react";

export const RecipeListPage = ({ clickFn }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleChange = (event) => setSearchWord(event.target.value);
  const [veganChoice, setVeganChoice] = useState(false);
  const handleVeganCheck = () => setVeganChoice(!veganChoice);
  const [vegetarianChoice, setVegetarianChoice] = useState(false);
  const handleVegetarianCheck = () => setVegetarianChoice(!vegetarianChoice);
  const [pescatarianChoice, setPescatarianChoice] = useState(false);
  const handlePescatarianCheck = () => setPescatarianChoice(!pescatarianChoice);
  const filteredRecipes = data.hits
    .filter(
      (hit) =>
        !(!hit.recipe.healthLabels.includes("Vegan") && veganChoice) &&
        !(
          !hit.recipe.healthLabels.includes("Vegetarian") && vegetarianChoice
        ) &&
        !(!hit.recipe.healthLabels.includes("Pescatarian") && pescatarianChoice)
    )
    .filter(
      (hit) =>
        hit.recipe.healthLabels
          .map((str) => str.toLowerCase())
          .includes(searchWord.toLowerCase()) ||
        hit.recipe.label.toLowerCase().includes(searchWord.toLowerCase())
    );
  const listFilteredRecipes = filteredRecipes.map((hit) => (
    <Recipe clickFn={clickFn} key={hit.recipe.label} recipe={hit.recipe} />
  ));

  return (
    <>
      <Center>
        <Heading>Winc Recipe Checker</Heading>
      </Center>
      <Center>
        <Input
          width="50vw"
          hhgh
          placeholder="Search recipes"
          value={searchWord}
          onChange={handleChange}
          size="lg"
        />
      </Center>
      <p>
        <strong>Select your diet of choice:</strong>
      </p>
      <p>
        <input
          onClick={handleVeganCheck}
          checked={veganChoice}
          type="checkbox"
        />
        <span className="slider"> Vegan</span>
      </p>

      <p>
        <input
          onClick={handleVegetarianCheck}
          checked={vegetarianChoice}
          type="checkbox"
        />
        <span className="slider"> Vegetarian</span>
      </p>

      <p>
        <input
          onClick={handlePescatarianCheck}
          checked={pescatarianChoice}
          type="checkbox"
        />
        <span className="slider"> Pescatarian</span>
      </p>
      <SimpleGrid columns={4} spacing={10}>
        {listFilteredRecipes}
      </SimpleGrid>
    </>
  );
};
