import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import RecipeCategory from '../../styles/RecipeCategoryStyles';

const BeverageScreen = () => {
    const navigation = useNavigation();
    const [recipes, setRecipes] = useState([]);
    const storage = getStorage();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const db = getFirestore();
                const q = query(collection(db, 'recipes'), where('recipeCategory', '==', 'Beverage'));

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
        { name: 'Calamansi Juice', time: '15min', calories: 106, image: require('../../img/category-recipe/BEVERAGE/CalamansiJuice.png') },
        { name: 'Buko Shake', time: '10min', calories: 292, image: require('../../img/category-recipe/BEVERAGE/BukoShake.png') },
        { name: 'Tsokolate', time: '15min', calories: 464, image: require('../../img/category-recipe/BEVERAGE/Tsokolate.png') },
        { name: 'Melon Juice', time: '20min', calories: 311, image: require('../../img/category-recipe/BEVERAGE/MelonJuice.png') },
        { name: 'Mango Juice', time: '9min', calories: 167, image: require('../../img/category-recipe/BEVERAGE/MangoJuice.png') },
    ];

    const navigateToRecipe = async (recipe) => {
        try {
            if (recipe && recipe.id) {
                const imageUrl = recipe.image ? recipe.image : await fetchImage(recipe.imageURL);
                navigation.navigate('RecipeTemplate', { recipeId: recipe.id, recipeCategory: 'Beverage', imageURL: imageUrl });
            } else if (recipe && recipe.name) {
                navigation.navigate('BeverageNav', {
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
                        <Text style={RecipeCategory.screenTitle}>Beverage</Text>
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

export default BeverageScreen;