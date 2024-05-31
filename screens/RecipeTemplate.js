import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import recipeStyles from '../styles/RecipeScreenStyles';

const RecipeTemplate = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { recipeId, recipeCategory } = route.params;
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const db = getFirestore();
                const recipeRef = doc(db, 'recipes', recipeId);
                const docSnapshot = await getDoc(recipeRef);

                if (docSnapshot.exists()) {
                    const recipeData = docSnapshot.data();

                    if (recipeData.imageURL) {
                        const storage = getStorage();
                        const imageRef = ref(storage, recipeData.imageURL);
                        const imageUrl = await getDownloadURL(imageRef);
                        recipeData.imageURL = imageUrl;
                    }

                    setRecipe({ id: docSnapshot.id, ...recipeData });
                    setLoading(false);
                } else {
                    setError('Recipe not found');
                    setLoading(false);
                }
            } catch (err) {
                setError('Failed to fetch recipe');
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [recipeId, recipeCategory]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!recipe) {
        return <Text>Recipe not found</Text>;
    }

    return (
        <React.Fragment>
            <StatusBar backgroundColor="#0C3B2E" />
            <View style={recipeStyles.backgroundContainer}>
                <ScrollView contentContainerStyle={recipeStyles.scrollView}>
                    <View key={recipe.id} style={recipeStyles.container}>
                        <View style={recipeStyles.recipebackground}>
                            <View style={recipeStyles.recipeHeader}>
                                <View style={recipeStyles.iconsContainer}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <AntDesign name="leftcircle" size={42} color="#FFBA00" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={recipeStyles.recipeName}>{recipe.recipeName}</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={{ uri: recipe.imageURL }} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <Text style={recipeStyles.detailTextBelowImage}>{recipe.recipeDescription}</Text>
                            </View>
                        </View>

                        <View style={recipeStyles.ingre}>
                            <View style={recipeStyles.sectionTitleCont}>
                                <Text style={recipeStyles.sectionTitle}>Ingredients</Text>
                            </View>
                            <View style={recipeStyles.listingreContainer}>
                                <View style={recipeStyles.tableRow}>
                                    <Text style={[recipeStyles.tableCellColumn, { flex: 1 }]}>Name</Text>
                                    <Text style={[recipeStyles.tableCellColumn2, { flex: 1 }]}>Quantity</Text>
                                </View>
                                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                                    <View key={index} style={recipeStyles.tableRow}>
                                        <Text style={[recipeStyles.tableCell, { flex: 1 }]}>{ingredient.name}</Text>
                                        <Text style={[recipeStyles.tableCell, { flex: 1 }]}>{ingredient.quantity}</Text>
                                    </View>
                                ))}
                            </View>

                            <View style={[recipeStyles.sectionTitleCont, recipeStyles.sectionTitleContDirect]}>
                                <Text style={recipeStyles.sectionTitle}>Directions</Text>
                            </View>
                            <View style={recipeStyles.listContainer}>
                                {recipe.directions && recipe.directions.map((direction, index) => (
                                    <View key={index} style={recipeStyles.stepContainer}>
                                        <Text style={recipeStyles.stepNumber}>{index + 1} </Text>
                                        <Text style={recipeStyles.stepText}>{direction}</Text>
                                    </View>
                                ))}
                                <View style={recipeStyles.addedByModifContainer}>
                                    <Text style={[recipeStyles.detailTextBelowList]}>Added By: {recipe.addedBy}</Text>
                                    {recipe.modifiedBy && recipe.modifiedAt && (
                                        <>
                                            <Text style={[recipeStyles.detailTextBelowList]}>Modified By: {recipe.modifiedBy}</Text>
                                            <Text style={[recipeStyles.detailTextBelowList]}>
                                                Modified At: {new Date(recipe.modifiedAt.toDate ? recipe.modifiedAt.toDate() : recipe.modifiedAt).toLocaleString()}
                                            </Text>
                                        </>
                                    )}
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default RecipeTemplate;
