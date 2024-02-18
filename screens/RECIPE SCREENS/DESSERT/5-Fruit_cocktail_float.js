import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from 'react-native-vector-icons';

import recipeStyles from '../../../styles/RecipeScreenStyles';

const FruitFloat = ({ navigation }) => {
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
                                <Text style={recipeStyles.recipeName}>Fruit Cocktail Float</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={require('../../../img/category-recipe/DESSERT/FruitCocktailFloat.png')} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="time-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>21 minutes</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="flame-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>307kcal</Text>
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
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 16 oz. 473 ml cold heavy whipping cream
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 7.6 oz. 225 ml table cream or all purpose cream
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 2 15.25 oz. cans of fruit cocktail
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 9 tablespoons condensed milk
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 teaspoon vanilla extract
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 12 pieces Graham crackers
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 8 to 10 pieces Maraschino cherries
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 tablespoons crushed Graham
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
                                        Drain the fruit cocktail by pouring each can in a strainer. Set aside.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>2</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Prepare the whipping cream mixture by pouring the heavy whipping cream in a mixing bowl. Whisk in medium speed using an electric mixer. Set to high speed after 2 minutes and continue to whisk until soft peaks form (around 5 more minutes).
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>3</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Stir-in the table cream, condensed milk, and vanilla extract. Continue to whisk for 1 to 2 minutes.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>4</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Arrange a layer of Graham crackers at the bottom of a wide 8x8 baking pan.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>5</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Pour-in half of the whipping cream mixture. Spread.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>6</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Create another layer by adding half of the fruit cocktail. Spread.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Make another layer of Graham crackers. Top with the remaining heavy cream mixture.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>8</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Arrange the remaining fruit cocktail on top and add some cherries.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>9</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Sprinkle the crushed Graham on top.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>10</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Refrigerate for 3 to 5 hours. Serve.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>11</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Share and enjoy!
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

export default FruitFloat;
