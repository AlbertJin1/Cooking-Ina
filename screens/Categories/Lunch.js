import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const LunchScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Pinoy Chicken Curry', time: '1hr 10min', calories: 497, image: require('../../img/category-recipe/LUNCH/Chicken-Curry.png') },
        { name: 'Bam-I (Pancit Bisaya)', time: '50min', calories: 496, image: require('../../img/category-recipe/LUNCH/Bam-I.png') },
        { name: 'Chicken Gising-gising', time: '35min', calories: 739, image: require('../../img/category-recipe/LUNCH/Chicken-Gising.png') },
        { name: 'Filipino Style Escabeche', time: '30min', calories: 598, image: require('../../img/category-recipe/LUNCH/Escabeche.png') },
        { name: 'Bangus Sisig', time: '35min', calories: 416, image: require('../../img/category-recipe/LUNCH/Bangus-Sisig.png') },
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
        navigation.navigate('LunchNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Pinoy Chicken Curry':
                navigateToRecipe('Pinoy Chicken Curry');
                break;
            case 'Bam-I (Pancit Bisaya)':
                navigateToRecipe('Bam-I (Pancit Bisaya)');
                break;
            case 'Chicken Gising-gising':
                navigateToRecipe('Chicken Gising-gising');
                break;
            case 'Filipino Style Escabeche':
                navigateToRecipe('Filipino Style Escabeche');
                break;
            case 'Bangus Sisig':
                navigateToRecipe('Bangus Sisig');
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
                        <Text style={RecipeCategory.screenTitle}>Lunch</Text>
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

export default LunchScreen;