import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chicken_Adobo from "../RECIPE SCREENS/MAIN/1-Chicken_Adobo";
import Lumpiang_Shanghai from "../RECIPE SCREENS/MAIN/2-Lumpiang_Shanghai";
import BabyBackRibs from "../RECIPE SCREENS/MAIN/3-Baby_Back_Ribs";
import RenelManok from "../RECIPE SCREENS/MAIN/4-Rellenong_Manok";
import GrilledTuna from "../RECIPE SCREENS/MAIN/5-Grilled_Tuna _Belly";

// Import Recipe Screens



const Stack = createNativeStackNavigator();

const AllMainCourseScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Baby Back Ribs"
                component={BabyBackRibs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lumpiang Shanghai"
                component={Lumpiang_Shanghai}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Rellenong Manok"
                component={RenelManok}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Grilled Tuna Belly"
                component={GrilledTuna}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chicken Adobo"
                component={Chicken_Adobo}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllMainCourseScreen;
