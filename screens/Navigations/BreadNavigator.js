import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Pandesal_2 from "../RECIPE SCREENS/BREAD/1-Pandesal";
import Ensaymother from "../RECIPE SCREENS/BREAD/2-Ensaymada";
import Monay_2 from "../RECIPE SCREENS/BREAD/3-Monay";
import Ube_Cheese_Pandesal from "../RECIPE SCREENS/BREAD/4-Ube_Cheese_Pandesal";
import Star_Bread from "../RECIPE SCREENS/BREAD/5-Star_Bread";

const Stack = createNativeStackNavigator();

const AllBreadScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Pandesal"
                component={Pandesal_2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Ensaymada"
                component={Ensaymother}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Monay"
                component={Monay_2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Ube Cheese Pandesal"
                component={Ube_Cheese_Pandesal}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Star Bread"
                component={Star_Bread}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllBreadScreen;
