import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const AppetizerScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Chicken Dynamite Lumpia', time: '28min', calories: 563, image: require('../../img/category-recipe/APPETIZER/Dynamite.png') },
        { name: 'Tuna Kilawin', time: '1hr 1min', calories: 225, image: require('../../img/category-recipe/APPETIZER/Tuna-Kilawin.png') },
        { name: 'Cheesy Onion Rings', time: '7min', calories: 1388, image: require('../../img/category-recipe/APPETIZER/CheesyOnionRings.png') },
        { name: 'Loaded Nachos', time: '15min', calories: 729, image: require('../../img/category-recipe/APPETIZER/LoadedNachos.png') },
        { name: 'Chicken Siomai', time: '25min', calories: 129, image: require('../../img/category-recipe/APPETIZER/ChickenSiomai.png') },
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
        navigation.navigate('AppetizerNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Chicken Dynamite Lumpia':
                navigateToRecipe('Chicken Dynamite Lumpia');
                break;
            case 'Tuna Kilawin':
                navigateToRecipe('Tuna Kilawin');
                break;
            case 'Cheesy Onion Rings':
                navigateToRecipe('Cheesy Onion Rings');
                break;
            case 'Loaded Nachos':
                navigateToRecipe('Loaded Nachos');
                break;
            case 'Chicken Siomai':
                navigateToRecipe('Chicken Siomai');
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
                        <Text style={RecipeCategory.screenTitle}>Appetizer</Text>
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

export default AppetizerScreen;