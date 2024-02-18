import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Filipino_Omelet from "../RECIPE SCREENS/BREAKFAST/7-Filipino_Omelet";
import Corned_Beef_Silog from "../RECIPE SCREENS/BREAKFAST/8-Corn_beef_silog";
import Chicken_Fried_Rice from "../RECIPE SCREENS/BREAKFAST/9-Chicken_fried_rice";
import Hotsilog from "../RECIPE SCREENS/BREAKFAST/10-Hotsilog";
import Picadillo from "../RECIPE SCREENS/BREAKFAST/11-Picadillo";


const Stack = createNativeStackNavigator();

const AllBreakfastScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Filipino Omelet"
                component={Filipino_Omelet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Corned Beef Silog"
                component={Corned_Beef_Silog}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chicken Fried Rice"
                component={Chicken_Fried_Rice}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Hotsilog"
                component={Hotsilog}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Picadillo"
                component={Picadillo}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllBreakfastScreen;
