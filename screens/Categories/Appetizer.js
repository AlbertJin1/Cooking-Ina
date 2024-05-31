import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const AppetizerScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const db = getFirestore();
                const q = query(collection(db, 'recipes'), where('recipeCategory', '==', 'Appetizer'));

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
        { name: 'Chicken Dynamite Lumpia', time: '28min', calories: 563, image: require('../../img/category-recipe/APPETIZER/Dynamite.png') },
        { name: 'Tuna Kilawin', time: '1hr 1min', calories: 225, image: require('../../img/category-recipe/APPETIZER/Tuna-Kilawin.png') },
        { name: 'Cheesy Onion Rings', time: '7min', calories: 1388, image: require('../../img/category-recipe/APPETIZER/CheesyOnionRings.png') },
        { name: 'Loaded Nachos', time: '15min', calories: 729, image: require('../../img/category-recipe/APPETIZER/LoadedNachos.png') },
        { name: 'Chicken Siomai', time: '25min', calories: 129, image: require('../../img/category-recipe/APPETIZER/ChickenSiomai.png') },
    ];

    const navigateToRecipe = async (recipe) => {
        try {
            if (recipe && recipe.id) {
                const imageUrl = recipe.image ? recipe.image : await fetchImage(recipe.imageURL);
                navigation.navigate('RecipeTemplate', { recipeId: recipe.id, recipeCategory: 'Appetizer', imageURL: imageUrl });
            } else if (recipe && recipe.name) {
                navigation.navigate('AppetizerNav', {
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
                        <Text style={RecipeCategory.screenTitle}>Appetizer</Text>
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

export default AppetizerScreen;