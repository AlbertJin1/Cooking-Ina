import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Chicken_Adobo from "../RECIPE SCREENS/DINNER/1-Chicken_Adobo";
import Lumpiang_Shanghai from "../RECIPE SCREENS/DINNER/2-Lumpiang_Shanghai";
import Tortalong from "../RECIPE SCREENS/DINNER/4-Tortang_talong";
import Chicken_Gising_Gising from "../RECIPE SCREENS/DINNER/12-Chicken_gising-gising";
import Filipino_Style_Escabeche from "../RECIPE SCREENS/DINNER/13-Filipino_style_escabeche";

const Stack = createNativeStackNavigator();

const AllDinnerScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Chicken Adobo"
                component={Chicken_Adobo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lumpiang Shanghai"
                component={Lumpiang_Shanghai}
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
                name="Tortang Talong"
                component={Tortalong}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllDinnerScreen;
