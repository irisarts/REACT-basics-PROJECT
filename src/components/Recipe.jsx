import { Card, CardBody, Heading, Image, Stack, Tag, Text} from "@chakra-ui/react"

export const Recipe = ({recipe, clickFn}) => {
    const dietLabels = recipe.dietLabels.map((label) => <Tag key={label}>{label}</Tag>);
    const cautionLabels = recipe.cautions.map((labelCautions) => <Tag key={labelCautions} colorScheme='red'>{labelCautions}</Tag>);
    const dishTypes = recipe.dishType.map((type) => <b key={type}>{type}</b>);
    let healthLabels = [];
    if (recipe.healthLabels.includes("Vegetarian")){
        healthLabels.push(<Tag key={0}>Vegetarian</Tag>);
    }
    if (recipe.healthLabels.includes("Vegan")){
        healthLabels.push(<Tag key={1} >Vegan</Tag>);
    }
    if (recipe.healthLabels.includes("Pescatarian")){
        healthLabels.push(<Tag key={2} >Pescatarian</Tag>);
    }
    return(
        <>
        <Card key={recipe}
            borderRadius="xl"
            onClick={() => clickFn(recipe)}
            cursor="pointer"
            _hover={{ transform: 'scale(1.01)' }}
        >
        <CardBody >
            <Image h={64} w="sm" src={recipe.image} borderRadius="xl"/>
            <Stack mt="6" spacing="3">
            {recipe.mealType.map((type) => <h1 key={type}>{type.toUpperCase()}</h1>)}
            <Heading size="md">{recipe.label}</Heading>
            <Text> {dietLabels} </Text>
            <Text>Dish: {dishTypes}</Text>
            <Text>Cautions: {cautionLabels}</Text>
            <Text>{healthLabels}</Text>
            </Stack>
        </CardBody>
        </Card>
        </>
    )
};

