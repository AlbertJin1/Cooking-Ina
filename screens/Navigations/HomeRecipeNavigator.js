import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Recipe Screens
import Chicken_Adobo from ".././RECIPE SCREENS/1-Chicken_Adobo";
import Lumpiang_Shanghai from ".././RECIPE SCREENS/2-Lumpiang_Shanghai";
import BISTEK from ".././RECIPE SCREENS/3-Filipino_style_beef_steak";
import Tortalong from ".././RECIPE SCREENS/4-Tortang_talong";
import Ronimaca from ".././RECIPE SCREENS/5-Sweet_macaroni_salad";
import Pandesal from ".././RECIPE SCREENS/6-Pandesal";

// MENU
import Menu from "../Menu";
import UserProfileScreen from "../UserProfile";
import AboutScreen from "../About";
import SettingsScreen from "../Settings";

const Stack = createNativeStackNavigator();

const HomeRecipeNavigator = () => {
    return (
        <Stack.Navigator>
            {/* Recipe Screens */}
            <Stack.Screen
                name="AdoboScreen"
                component={Chicken_Adobo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LumpiaShanghaiScreen"
                component={Lumpiang_Shanghai}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BistekScreen"
                component={BISTEK}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TortalongScreen"
                component={Tortalong}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MacaroniScreen"
                component={Ronimaca}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PandesalScreen"
                component={Pandesal}
                options={{ headerShown: false }}
            />

            {/* Menu Screen */}
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="About"
                component={AboutScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeRecipeNavigator;
