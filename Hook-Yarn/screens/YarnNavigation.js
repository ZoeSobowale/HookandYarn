//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import AddBallScreen from "./YarnScreens/NewYarn";
import YarnScreen from "./NestedYarn";
import ViewBallScreen from "./YarnScreens/ViewYarn";


const Stack = createStackNavigator();


const YarnScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>   
       <Stack.Screen
        name="Yarnscreen"
        component={YarnScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewYarn"
        component={AddBallScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewBallScreen"
        component={ViewBallScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
 );
}

 export {YarnScreenNavigator};