import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Calamansi_Juice from "../RECIPE SCREENS/BEVERAGES/1-Calamansi_Juice";
import Buko_Shake from "../RECIPE SCREENS/BEVERAGES/2-Buko_Shake";
import Tsokolate from "../RECIPE SCREENS/BEVERAGES/3-Tsokolate";
import Melon_Juice from "../RECIPE SCREENS/BEVERAGES/4-Melon_Juice";
import Mango_Juice from "../RECIPE SCREENS/BEVERAGES/5-Mango_Juice";

const Stack = createNativeStackNavigator();

const AllBeverageScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Calamansi Juice"
                component={Calamansi_Juice}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Buko Shake"
                component={Buko_Shake}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Tsokolate"
                component={Tsokolate}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Melon Juice"
                component={Melon_Juice}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Mango Juice"
                component={Mango_Juice}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllBeverageScreen;
