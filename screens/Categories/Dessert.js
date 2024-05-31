import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const DessertsScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const db = getFirestore();
                const q = query(collection(db, 'recipes'), where('recipeCategory', '==', 'Dessert'));

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
        { name: 'Sweet Macaroni Salad', time: '20min', calories: 738, image: require('../../img/category-recipe/DESSERT/macaroni.jpg') },
        { name: 'Bibingka', time: '45min', calories: 734, image: require('../../img/category-recipe/DESSERT/Bibingka.png') },
        { name: 'Banana Bread', time: '1hr 10min', calories: 359, image: require('../../img/category-recipe/DESSERT/BananaBread.png') },
        { name: 'Buko Pandan', time: '20min', calories: 613, image: require('../../img/category-recipe/DESSERT/BukoPandan.png') },
        { name: 'Fruit Cocktail Float', time: '22min', calories: 307, image: require('../../img/category-recipe/DESSERT/FruitCocktailFloat.png') },
    ];

    const navigateToRecipe = async (recipe) => {
        try {
            if (recipe && recipe.id) {
                const imageUrl = recipe.image ? recipe.image : await fetchImage(recipe.imageURL);
                navigation.navigate('RecipeTemplate', { recipeId: recipe.id, recipeCategory: 'Dessert', imageURL: imageUrl });
            } else if (recipe && recipe.name) {
                navigation.navigate('DessertNav', {
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
                        <Text style={RecipeCategory.screenTitle}>Desserts</Text>
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

export default DessertsScreen;