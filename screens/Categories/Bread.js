import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const BreadScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Pandesal', time: '1hr 45min', calories: 856, image: require('../../img/category-recipe/BREAD/pandesal.jpg') },
        { name: 'Ensaymada', time: '35min', calories: 235, image: require('../../img/category-recipe/BREAD/Ensaymada.png') },
        { name: 'Monay', time: '2hr', calories: 249, image: require('../../img/category-recipe/BREAD/Monay.png') },
        { name: 'Ube Cheese Pandesal', time: '3hrs 20min', calories: 228, image: require('../../img/category-recipe/BREAD/UbeCheesePandesal.png') },
        { name: 'Star Bread', time: '2hrs 18min', calories: 307, image: require('../../img/category-recipe/BREAD/StarBread.png') },
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
        navigation.navigate('BreadNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Pandesal':
                navigateToRecipe('Pandesal');
                break;
            case 'Ensaymada':
                navigateToRecipe('Ensaymada');
                break;
            case 'Monay':
                navigateToRecipe('Monay');
                break;
            case 'Ube Cheese Pandesal':
                navigateToRecipe('Ube Cheese Pandesal');
                break;
            case 'Star Bread':
                navigateToRecipe('Star Bread');
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
                        <Text style={RecipeCategory.screenTitle}>Bread</Text>
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

export default BreadScreen;