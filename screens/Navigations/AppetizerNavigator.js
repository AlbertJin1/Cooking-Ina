import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chicken_Dynamite_Lumpia from "../RECIPE SCREENS/APPETIZER/1-Chicken_Dynamite_Lumpia copy";
import Tuna_Kilawin from "../RECIPE SCREENS/APPETIZER/2-Tuna_Kilawin";
import Cheesy_Onion_Rings from "../RECIPE SCREENS/APPETIZER/3-Cheesy_Onion_Rings";
import Loaded_Nachos from "../RECIPE SCREENS/APPETIZER/4-Loaded_Nachos";
import Chicken_Siomai from "../RECIPE SCREENS/APPETIZER/5-Chicken_Siomai";

// Import Recipe Screens


const Stack = createNativeStackNavigator();

const AllAppetizerScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Chicken Dynamite Lumpia"
                component={Chicken_Dynamite_Lumpia}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Tuna Kilawin"
                component={Tuna_Kilawin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cheesy Onion Rings"
                component={Cheesy_Onion_Rings}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Loaded Nachos"
                component={Loaded_Nachos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chicken Siomai"
                component={Chicken_Siomai}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllAppetizerScreen;
