import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Category Screens
import AppetizerScreen from "../Categories/Appetizer";
import BeverageScreen from "../Categories/Beverage";
import BreadScreen from "../Categories/Bread";
import BreakfastScreen from "../Categories/Breakfast";
import DessertsScreen from "../Categories/Dessert";
import DinnerScreen from "../Categories/Dinner";
import LunchScreen from "../Categories/Lunch";
import MainCourseScreen from "../Categories/MainCourse";

// NESTED NAVS
import AllBreakfastScreen from "./BreakfastNavigator";
import AllDinnerScreen from "./DinnerNavigator";
import AllLunchScreen from "./LunchNavigator";
import AllMainCourseScreen from "./MainCourseNavigator";
import AllAppetizerScreen from "./AppetizerNavigator";
import AllBreadScreen from "./BreadNavigator";
import AllBeverageScreen from "./BeverageNavigator";
import AllDessertScreen from "./DessertNavigator";


const Stack = createNativeStackNavigator();

const CategoriesScreen = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Breakfast"
                component={BreakfastScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lunch"
                component={LunchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dinner"
                component={DinnerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Appetizer"
                component={AppetizerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Desserts"
                component={DessertsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Bread"
                component={BreadScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={MainCourseScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Beverage"
                component={BeverageScreen}
                options={{ headerShown: false }}
            />

            {/* NESTED NAVS */}
            <Stack.Screen
                name="BreakfastNav"
                component={AllBreakfastScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LunchNav"
                component={AllLunchScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DinnerNav"
                component={AllDinnerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AppetizerNav"
                component={AllAppetizerScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DessertNav"
                component={AllDessertScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BreadNav"
                component={AllBreadScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainCourseNav"
                component={AllMainCourseScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BeverageNav"
                component={AllBeverageScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    );
};

export default CategoriesScreen;
