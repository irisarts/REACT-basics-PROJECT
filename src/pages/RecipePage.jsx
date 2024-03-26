import { Heading, Tag, Image, Button, Container, Box, SimpleGrid } from '@chakra-ui/react';
import "../pages/RecipePage.css"; 

export const RecipePage = ({recipe, clickFn}) => {
    const dietLabels = recipe.dietLabels.map((label) => <Tag margin="5px" padding="5px" key={label}>{label}</Tag>);
    const cautionLabels = recipe.cautions.map((labelCautions) => <Tag key={labelCautions} margin="5px" padding="5px" colorScheme='red'>{labelCautions}</Tag>);
    const dishTypes = recipe.dishType.map((type) => <b key={type}>{type}</b>);
    const healthLabels = recipe.healthLabels.map((label) => <Tag margin="5px" padding="5px" key ={label}>{label}</Tag>);
    const {
        ingredients,
        totalNutrients
      } = recipe;
      const handleClick = () => clickFn();
    const filteredNutrients = {
        CALORIES: { value: Math.round(totalNutrients.ENERC_KCAL.quantity), unit: totalNutrients.ENERC_KCAL.unit } ,
        CARBS: { value: Math.round(totalNutrients.CHOCDF.quantity), unit: totalNutrients.CHOCDF.unit },
        PROTEIN: { value: Math.round(totalNutrients.PROCNT.quantity), unit: totalNutrients.PROCNT.unit },
        FAT: { value: Math.round(totalNutrients.FAT.quantity), unit: totalNutrients.FAT.unit },
        CHOLESTEROL: { value: Math.round(totalNutrients.CHOLE.quantity), unit: totalNutrients.CHOLE.unit },
        SODIUM: { value: Math.round(totalNutrients.NA.quantity), unit: totalNutrients.NA.unit }, 
      };
  
    return (
        <>

        <Container maxW="100vw" bg="blue.700" centerContent>
        <Box maxW="4xl" bg="white">
        <Button onClick={handleClick}> {"<"} </Button>
      <div className='grid-container'>
      <div className="image"><Image boxSize="4xl" objectFit="cover" objectPosition="center" maxH="sm" src={recipe.image}/></div>
      <div className="meal-type">{recipe.mealType.map((type) => <h1 key={type}>{type.toUpperCase()}</h1>)}</div>
      <div className="label"><Heading size="md">{recipe.label}</Heading></div>
      <div className="dish">Dish: {dishTypes}</div>
      <div className="totaltime"><strong>Total Cooking Time:</strong> {recipe.totalTime}</div>
      <div className="servings"><strong>Servings:</strong> {recipe.yield}</div>
      <div className="ingredients"><strong>Ingredients:</strong>
        {ingredients.map((ingredient, index) => (
      <div className='lis-ingredients' key={index}>{ingredient.text}</div>
        ))}
      </div>
      <div className="health-labels"><strong><p>Health Labels:</p></strong>{healthLabels}</div>
      <div className="diet-labels"><strong><p>Diet Labels:</p></strong>{dietLabels}</div>
      <div className='cautions'><strong><p>Cautions:</p></strong>{cautionLabels}</div>
      <div className='nutrients'><strong><p>Total Nutrients:</p></strong>
      <SimpleGrid columns={3} spacing={6} padding="10px">
        {Object.entries(filteredNutrients).map(([key, nutrient]) => (
          <div className='list-nutrients' key={key}>{key}: 
          <p>{nutrient.value} {nutrient.unit}</p></div>
        ))}
      </SimpleGrid>
      </div>
      </div>
      </Box>
      </Container>
      
        </>
    );
  };