import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from 'react-native-vector-icons';

import recipeStyles from '../../../styles/RecipeScreenStyles';

const Ensaymother = ({ navigation }) => {
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
                                <Text style={recipeStyles.recipeName}>Ensaymada</Text>
                                <View style={recipeStyles.recipeImageContainer}>
                                    <Image source={require('../../../img/category-recipe/BREAD/Ensaymada.png')} style={recipeStyles.recipeImage} />
                                </View>
                            </View>
                            <View style={recipeStyles.detailsContainer}>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="time-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>35 mins</Text>
                                </View>
                                <View style={recipeStyles.detailItem}>
                                    <Ionicons name="flame-outline" style={recipeStyles.detailIcon} />
                                    <Text style={recipeStyles.detailText}>235kcal</Text>
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
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 5 cups all-purpose flour
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3/4 cup butter (melted)
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3/4 cup white sugar
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 tsp salt
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 cup grated chedder cheese
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 3 pieces raw eggs
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 pouch rapid rise yeast
                                </Text>
                                <Text style={recipeStyles.listItem}>
                                    <FontAwesome name="circle" size={18} color="#FFBA00" /> 1 cup fresh milk (warm)
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
                                        Combine warm milk, yeast, and ½ cup sugar and stir until yeast and sugar dissolves in milk. Set aside to let yeast activate (approximately 10 minutes)
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>2</Text>
                                    <Text style={recipeStyles.stepText}>
                                        In a mixing bowl, combine all the dry ingredients starting from the flour, sugar, and salt then mix thoroughly.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>3</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Add the eggs, 1/2  cup butter, and activated yeast mixture (these are the ingredients that we combined in number 1) to the mixed dry ingredients. Mix thoroughly until all ingredients are evenly distributed and a dough is formed.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>4</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Knead the dough until texture becomes fine.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>5</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put the dough back on the mixing bowl and cover the top with cloth. Allow the dough to rise for 2 hours.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>6</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put the dough on a flat surface and flatten. Punch the dough lightly to release the air inside.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>7</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Using a dough slicer, divide the dough into four pieces.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>8</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Roll each piece until shape becomes cylindrical.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>9</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Cut the cylindrical dough into individual serving pieces (1 serving piece should weigh at least 80 grams).
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>10</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Put the sliced individual serving piece in a flat surface and flatten using a rolling pin.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>11</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Combine ¼ cup melted butter with ¼ cup white sugar. Using a brush, paint the mixture on the flattened dough. Make sure to paint only the center part of the flat dough.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>12</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Sprinkle some cheese over the painted area then seal the dough by folding opposite directions and rolling it until a long cylindrical shape is formed (about 14 inches in length).
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>13</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Start forming the spiral Ensaymada shape by crossing the two opposite ends of the dough. The first end should be placed under dough while the other end should be inserted in the middle. (see video for better comprehension)
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>14</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Place the dough in a baking tray with wax paper and cover with cloth. Set aside to rise for another 45 minutes
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>15</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Pre-heat the oven at 350 degrees Fahrenheit for 10 minutes. Remove cloth on top of the tray and bake the dough for 15 minutes at 350 degrees Fahrenheit.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>16</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Remove the baked Ensaymada from the oven. Using the remaining melted butter and sugar mixture, paint the top of the baked ensaymada and sprinkle additional cheese.
                                    </Text>
                                </View>
                                <View style={recipeStyles.stepContainer}>
                                    <Text style={recipeStyles.stepNumber}>17</Text>
                                    <Text style={recipeStyles.stepText}>
                                        Serve hot. Share and Enjoy!
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

export default Ensaymother;
