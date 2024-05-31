import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const MainCourseScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const db = getFirestore();
                const q = query(collection(db, 'recipes'), where('recipeCategory', '==', 'Main Dish'));

                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const fetchedRecipes = [];
                    snapshot.forEach((doc) => {
                        const recipeData = doc.data();
                        fetchedRecipes.push({ id: doc.id, ...recipeData });
                    });
                    setRecipes(fetchedRecipes);
                });

                return () => unsubscribe();
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const staticRecipes = [
        { name: 'Baby Back Ribs', time: '2hr', calories: 317, image: require('../../img/category-recipe/MAIN/BabyBackRibs.png') },
        { name: 'Lumpiang Shanghai', time: '8min', calories: 619, image: require('../../img/category-recipe/MAIN/lumpia.jpg') },
        { name: 'Rellenong Manok', time: '1hr', calories: 558, image: require('../../img/category-recipe/MAIN/RellenongManok.png') },
        { name: 'Grilled Tuna Belly', time: '10min', calories: 287, image: require('../../img/category-recipe/MAIN/GrilledTunaBelly.png') },
    ];

    const navigateToRecipe = async (recipe) => {
        try {
            if (recipe && recipe.id) {
                const imageUrl = recipe.image ? recipe.image : await fetchImage(recipe.imageURL);
                navigation.navigate('RecipeTemplate', { recipeId: recipe.id, recipeCategory: 'Main Dish', imageURL: imageUrl });
            } else if (recipe && recipe.name) {
                navigation.navigate('MainCourseNav', {
                    screen: recipe.name,
                });
            }
        } catch (error) {
            console.error('Error navigating to recipe:', error);
        }
    };

    const fetchImage = async (imageUrl) => {
        const imageRef = ref(storage, imageUrl);
        return await getDownloadURL(imageRef);
    };

    const handleRecipePress = (recipe) => {
        navigateToRecipe(recipe);
    };

    return (
        <View style={RecipeCategory.backgroundContainer}>
            <ScrollView contentContainerStyle={RecipeCategory.scrollView}>
                <View style={RecipeCategory.container}>
                    <View style={RecipeCategory.titleContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={RecipeCategory.goBackButton}>
                            <AntDesign name="leftcircle" size={46} color="#6D9773" />
                        </TouchableOpacity>
                        <Text style={RecipeCategory.screenTitle}>Main Course</Text>
                    </View>

                    {[...staticRecipes, ...recipes].map((recipe) => (
                        <TouchableOpacity
                            key={recipe.id || recipe.name}
                            style={RecipeCategory.recipeContainer}
                            onPress={() => handleRecipePress(recipe)}
                        >
                            <Image source={recipe.image || { uri: recipe.imageURL }} style={RecipeCategory.recipeImage} />
                            <View style={RecipeCategory.recipeDetailsContainer}>
                                <View style={RecipeCategory.recipeInfoContainer}>
                                    <Text style={RecipeCategory.recipeName}>{recipe.name || recipe.recipeName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default MainCourseScreen;
