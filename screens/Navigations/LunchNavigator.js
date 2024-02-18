import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Pinoy_Chicken_Curry from "../RECIPE SCREENS/LUNCH/1-Pinoy_Chicken_Curry";
import Bam_I from "../RECIPE SCREENS/LUNCH/2-Bam_i";
import Chicken_Gising_Gising from "../RECIPE SCREENS/LUNCH/3-Chicken_gising-gising";
import Filipino_Style_Escabeche from "../RECIPE SCREENS/LUNCH/4-Filipino_style_escabeche";
import Bangus_Sisig from "../RECIPE SCREENS/LUNCH/5-Bangus_Sisig";

const Stack = createNativeStackNavigator();

const AllLunchScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Pinoy Chicken Curry"
                component={Pinoy_Chicken_Curry}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Bam-I (Pancit Bisaya)"
                component={Bam_I}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chicken Gising-gising"
                component={Chicken_Gising_Gising}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Filipino Style Escabeche"
                component={Filipino_Style_Escabeche}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Bangus Sisig"
                component={Bangus_Sisig}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllLunchScreen;
