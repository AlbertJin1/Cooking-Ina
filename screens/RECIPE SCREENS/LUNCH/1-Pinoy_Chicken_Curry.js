import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from 'react-native-vector-icons';

import recipeStyles from '../../../styles/RecipeScreenStyles';

const Pinoy_Chicken_Curry = ({ navigation }) => {
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
                                <Text style={recipeStyles.recipeName}>Pinoy Chicken Curry</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={require('../../../img/category-recipe/LUNCH/Chicken-Curry.png')} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="time-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>1hr 10mins</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="flame-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>497kcal</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="person-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>6 Servings</Text>
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
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 lbs. Chicken (cut into serving pieces)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 tbsp curry powder
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 piece potato (cubed)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 4 cloves garlic (minced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 stalks celery (sliced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1pieces long green pepper
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 piece onion (chopped)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 thumbs ginger (cut into strips)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 5 cloves garlic (chopped)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 cups coconut milk
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 cup all-purpose cream (optional)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 cup water
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> fish sauce and ground black pepper to taste
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
                                        Heat oil in a pan. Fry potato for 1 minute per side. Remove from the pan. Set aside.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>2</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Using the remaining oil, saute garlic, onion, celery, and ginger until onion softens.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>3</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the chicken pieces. Saute until the outer part of the chicken turns light brown.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>4</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add 1 tbsp fish sauce. Continue sauteing for 1 minute.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>5</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Pour-in coconut milk and water. Let boil.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>6</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add curry powder. Stir until the powder is completely diluted. Cover the pot and continue cooking between loww to medium heat until the liquid reduces to half.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the red bell pepper and pan fried-potato. Cook for 5 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>8</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Season with fish sauce and ground black pepper as needed. You can also add all-purpose cream if desired.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>9</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Transfer to a serving bowl. Serve and enjoy!
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

export default Pinoy_Chicken_Curry;
