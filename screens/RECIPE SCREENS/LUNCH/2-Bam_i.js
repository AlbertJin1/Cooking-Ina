import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from 'react-native-vector-icons';

import recipeStyles from '../../../styles/RecipeScreenStyles';

const Bam_I = ({ navigation }) => {
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
                                <Text style={recipeStyles.recipeName}>Bam-I</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={require('../../../img/category-recipe/LUNCH/Bam-I.png')} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="time-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>50 mins</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="flame-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>496kcal</Text>
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
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 lb pork (sliced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 lb checken (boiled and shredded)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 4 pieces Chinese sausage (sliced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 lb shrimp (shelled and heads removed)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 8 ounces flour sticks (pancit canton noodles)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 4 to 6 ounces rice noodles (sotanghon soaked in water)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 1/2 to 2 cups chicken stock
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 cups cabbage (chopped)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3.4 cup carrots (julienned)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 cup dried wood ear (soake in water and chopped)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 medium onion (diced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/4 cup parsley (cleaned and chopped)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 cup shrimp juice (derived by pounding the head of the shrimp)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1/2 cup soy sauce
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 piece chicken cube or bouillon
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 tbsp garlic (minced)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> Slat and ground black pepper to taste
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 to 3 tbsp cooking oil
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
                                        Heat a cooking pot then pour-in cooking oil.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>2</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Saute garlic adn onions then add the sliced pork and cook for 3 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>3</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put-in the Chines sausage and shredded chicken and cook for 3 to 5 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>4</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add soy sauce, shrimp juice, salt, ground black pepper, chicken bouillon, and chicken stock then let boil. Simmer for 5 to 8 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>5</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put the shrimps, cabbage, carrots, and wood ears in the cook for 2 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>6</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the soaked noodles then stir. Cook for a minute.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put-in the flour sticks then stir well. Cook for 3 minutes or until the liquid is gone.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Top with green onions and place calamansi on the side.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Serve hot. Share and enjoy! Mangaon na ta!
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

export default Bam_I;
