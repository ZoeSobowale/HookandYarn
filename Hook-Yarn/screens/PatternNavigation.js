//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import PtnBeanie from "./PatternScreens/PtnBeanie";
import PtnBee from "./PatternScreens/PtnBee";
import PtnChain from "./PatternScreens/PtnChain";
import PtnDble from "./PatternScreens/PtnDble";
import PtnGran from "./PatternScreens/PtnGran";
import PtnHeart from "./PatternScreens/PtnHeart";
import PatternScreen from "./NestedPattern";


const Stack = createStackNavigator();

const PatternScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>  
       <Stack.Screen
        name="Patterns"
        component={PatternScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Beanie"
        component={PtnBeanie}
      />
    <Stack.Screen
        name="Plush Bee"
        component={PtnBee}
      />
    
    <Stack.Screen
        name="Chain"
        component={PtnChain}
      />

    <Stack.Screen
        name="Double Crochet"
        component={PtnDble}
      />

    <Stack.Screen
        name="Granny Square"
        component={PtnGran}
      />

    <Stack.Screen
      name="Love Heart"
      component={PtnHeart}
      />
    </Stack.Navigator>
  );
}

export {PatternScreenNavigator};
