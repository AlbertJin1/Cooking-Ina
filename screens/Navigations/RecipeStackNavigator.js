import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeTemplate from ".././RecipeTemplate";

const RecipeStack = createNativeStackNavigator();

const RecipeStackNavigator = () => {
    return (
        <RecipeStack.Navigator>
            <RecipeStack.Screen
                name="RecipeTemplate"
                component={RecipeTemplate}
                options={{ headerShown: false }}
            />
        </RecipeStack.Navigator>
    );
};

export default RecipeStackNavigator;
