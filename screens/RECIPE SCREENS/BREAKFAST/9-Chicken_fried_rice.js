import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from 'react-native-vector-icons';

import recipeStyles from '../../../styles/RecipeScreenStyles';

const Chicken_Fried_Rice = ({ navigation }) => {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="#0C3B2E" />
            <View style={recipeStyles.backgroundContainer}>
                <ScrollView contentContainerStyle={recipeStyles.scrollView}>
                    <View style={recipeStyles.container}>
                        {/* Recipe Header */}
                        <View style={recipeStyles.recipebackground}>
                            <View style={recipeStyles.recipeHeader}>
                                <View style={recipeStyles.iconsContainer}>
                                    <TouchableOpacity onPress={() => navigation.goBack()}>
                                        <AntDesign name="leftcircle" size={42} color="#FFBA00" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>
                                        // navigation.goBack()
                                        Alert.alert('Feature Not Available', 'Feature will be available soon.')
                                    }>
                                        <View style={recipeStyles.heartIconBackground}>
                                            <Ionicons name="heart" size={25} color="black" />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={recipeStyles.recipeName}>Chicken Fried Rice</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={require('../../../img/category-recipe/BREAKFAST/friedrice.jpg')} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="time-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>25 mins</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="flame-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>531kcal</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="person-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>3 Servings</Text>
                                </View>
                            </View>
                        </View>

                        <View style={recipeStyles.ingre}>
                            {/* Ingredients */}
                            <View style={recipeStyles.sectionTitleCont}>
                                <Text style={recipeStyles.sectionTitle}>Ingredients</Text>
                            </View>
                            <View style={recipeStyles.listingreContainer}>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 cups cooked white rice
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 eegs beaten
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 6 ounces chiken breast (boneless)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 1/2 cups frozen mixed vegetables (carrots, green peas, and corn)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 onion (minced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 cloves garlic (minced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 tbsp cooking oil
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> Salt and ground black paper to taste
                                </Text>
                            </View>

                            <View style={recipeStyles.sectionTitleCont}>
                                <Text style={recipeStyles.sectionTitle}>Sauce Ingredients</Text>

                                <Text style={[recipeStyles.listItem, recipeStyles.saucebg]}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 tbsp oyster sauce
                                </Text>
                                <Text style={[recipeStyles.listItem, recipeStyles.saucebg]}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 tbsp soy sauce
                                </Text>
                                <Text style={[recipeStyles.listItem, recipeStyles.saucebg]}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 tsp sesame oil
                                </Text>
                            </View>


                            {/* Directions */}
                            <View style={[recipeStyles.sectionTitleCont, recipeStyles.sectionTitleContDirect]}>
                                <Text style={recipeStyles.sectionTitle}>Directions</Text>
                            </View>
                            <View style={recipeStyles.listContainer}>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>1</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Cut the chicken into small pieces. Arrange in a bowl and combine with the sauce ingredients. Mix well. Set aside.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>2</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Heat the oil in a pan. Fry the beaten eggs until done. Remove the cooked eggs from the pan. Chop it into pieces, and then set it aside.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>3</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Using the remaining oil (add more if needed), saute the garlic and onion.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>4</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the marinated chicken once the onion softens. Stir-fry for 2 to 3 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>5</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the vegetables. Continue stir-frying for 2 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>6</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the rice. Toss until all the ingredients are well blended. Continue cooking for 3 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Season with salt and ground black pepper.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>8</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Transfer to a serving plate. Serve immediately.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default Chicken_Fried_Rice;
