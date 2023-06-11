//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";


import AddNoteScreen from "./ProjectScreens/NewProj";
import ProjectScreen from "./NestedProject";
import ViewNoteScreen from "./ProjectScreens/ViewProj";


const Stack = createStackNavigator();


const ProjectScreenNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>  
       <Stack.Screen
        name="Projectscreen"
        component={ProjectScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewProject"
        component={AddNoteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewNoteScreen"
        component={ViewNoteScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
 );
}

 export {ProjectScreenNavigator};