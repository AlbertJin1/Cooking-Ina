import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const DinnerScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Chicken Adobo', time: '35min', calories: 607, image: require('../../img/category-recipe/DINNER/adobo.jpg') },
        { name: 'Lumpiang Shanghai', time: '8min', calories: 619, image: require('../../img/category-recipe/DINNER/lumpia.jpg') },
        { name: 'Chicken Gising-gising', time: '35min', calories: 739, image: require('../../img/category-recipe/DINNER/Chicken-Gising.png') },
        { name: 'Filipino Style Escabeche', time: '30min', calories: 598, image: require('../../img/category-recipe/DINNER/Escabeche.png') },
        { name: 'Tortang Talong', time: '27min', calories: 579, image: require('../../img/category-recipe/DINNER/talong.png') },
    ];

    const handleHeartPress = (recipeName) => {
        setPressedRecipes((prevPressedRecipes) => {
            if (prevPressedRecipes.includes(recipeName)) {
                // Recipe is already pressed, remove it
                return prevPressedRecipes.filter((name) => name !== recipeName);
            } else {
                // Recipe is not pressed, add it
                return [...prevPressedRecipes, recipeName];
            }
        });
    };

    const navigateToRecipe = (recipeName) => {
        navigation.navigate('DinnerNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Chicken Adobo':
                navigateToRecipe('Chicken Adobo');
                break;
            case 'Lumpiang Shanghai':
                navigateToRecipe('Lumpiang Shanghai');
                break;
            case 'Chicken Gising-gising':
                navigateToRecipe('Chicken Gising-gising');
                break;
            case 'Filipino Style Escabeche':
                navigateToRecipe('Filipino Style Escabeche');
                break;
            case 'Tortang Talong':
                navigateToRecipe('Tortang Talong');
                break;
            default:
                break;
        }
    };

    return (
        <View style={RecipeCategory.backgroundContainer}>
            <ScrollView contentContainerStyle={RecipeCategory.scrollView}>

                <View style={RecipeCategory.container}>

                    <View style={RecipeCategory.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={RecipeCategory.goBackButton}>
                            <AntDesign name="leftcircle" size={46} color="#6D9773" />
                        </TouchableOpacity>
                        <Text style={RecipeCategory.screenTitle}>Dinner</Text>
                    </View>


                    {recommendedRecipes.map((recipe) => (
                        <TouchableOpacity
                            key={recipe.name}
                            style={RecipeCategory.recipeContainer}
                            onPress={() => handleRecipePress(recipe.name)}  // Pass the recipe name to the handler
                        >
                            <Image source={recipe.image} style={RecipeCategory.recipeImage} />
                            <View style={RecipeCategory.recipeDetailsContainer}>
                                <View style={RecipeCategory.recipeInfoContainer}>
                                    <Text style={RecipeCategory.recipeName}>{recipe.name}</Text>
                                    <View style={RecipeCategory.recipeInfo}>
                                        <View style={RecipeCategory.recipeInfoItem}>
                                            <Ionicons name="timer-outline" style={RecipeCategory.recipeIcon} />
                                            <Text style={RecipeCategory.recipeTime}>{recipe.time}</Text>
                                            <Text style={RecipeCategory.bulletIcon}>•</Text>
                                        </View>
                                        <View style={RecipeCategory.recipeInfoItem}>
                                            <Ionicons name="flame-outline" style={RecipeCategory.recipeIcon} />
                                            <Text style={RecipeCategory.recipeCalories}>{recipe.calories}kcal</Text>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => handleHeartPress(recipe.name)}>
                                    <Ionicons
                                        name={pressedRecipes.includes(recipe.name) ? 'heart' : 'heart-outline'}
                                        style={[RecipeCategory.recipeIcon, RecipeCategory.heartIcon]}
                                        color={pressedRecipes.includes(recipe.name) ? '#FFBA00' : 'black'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default DinnerScreen;