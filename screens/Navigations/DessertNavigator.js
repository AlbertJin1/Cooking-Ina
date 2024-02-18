import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Ronimaca2 from "../RECIPE SCREENS/DESSERT/1-Sweet_macaroni_salad";
import Bibingka from "../RECIPE SCREENS/DESSERT/2-Bibingka";
import BananaBread from "../RECIPE SCREENS/DESSERT/3-Banana_bread";
import BukoPandan from "../RECIPE SCREENS/DESSERT/4-Buko_pandan";
import FruitFloat from "../RECIPE SCREENS/DESSERT/5-Fruit_cocktail_float";

const Stack = createNativeStackNavigator();

const AllDessertScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Sweet Macaroni Salad"
                component={Ronimaca2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Bibingka"
                component={Bibingka}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Banana Bread"
                component={BananaBread}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Buko Pandan"
                component={BukoPandan}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Fruit Cocktail Float"
                component={FruitFloat}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default AllDessertScreen;
