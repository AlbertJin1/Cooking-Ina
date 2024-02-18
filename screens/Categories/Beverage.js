import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const BeverageScreen = () => {
    const navigation = useNavigation();
    const [pressedRecipes, setPressedRecipes] = useState([]); // New state


    const recommendedRecipes = [
        { name: 'Calamansi Juice', time: '15min', calories: 106, image: require('../../img/category-recipe/BEVERAGE/CalamansiJuice.png') },
        { name: 'Buko Shake', time: '10min', calories: 292, image: require('../../img/category-recipe/BEVERAGE/BukoShake.png') },
        { name: 'Tsokolate', time: '15min', calories: 464, image: require('../../img/category-recipe/BEVERAGE/Tsokolate.png') },
        { name: 'Melon Juice', time: '20min', calories: 311, image: require('../../img/category-recipe/BEVERAGE/MelonJuice.png') },
        { name: 'Mango Juice', time: '9min', calories: 167, image: require('../../img/category-recipe/BEVERAGE/MangoJuice.png') },
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
        navigation.navigate('BeverageNav', {
            screen: recipeName,
        });
    };

    const handleRecipePress = (recipeName) => {
        switch (recipeName) {
            case 'Calamansi Juice':
                navigateToRecipe('Calamansi Juice');
                break;
            case 'Buko Shake':
                navigateToRecipe('Buko Shake');
                break;
            case 'Tsokolate':
                navigateToRecipe('Tsokolate');
                break;
            case 'Melon Juice':
                navigateToRecipe('Melon Juice');
                break;
            case 'Mango Juice':
                navigateToRecipe('Mango Juice');
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
                        <Text style={RecipeCategory.screenTitle}>Beverage</Text>
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

export default BeverageScreen;