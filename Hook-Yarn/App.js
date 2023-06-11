import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PatternScreenNavigator } from './screens/PatternNavigation';
import { ProjectScreenNavigator } from './screens/ProjectNavigation';
import { YarnScreenNavigator } from './screens/YarnNavigation';

import { COLORS } from "./assets/themes";


const Tab = createBottomTabNavigator();



function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: "Hook and Yarn",
        headerStyle: { backgroundColor: COLORS.primary, }
      }}>
        <Tab.Screen name="Project" component={ProjectScreenNavigator} options={{ tabBarIcon: () => <Image source={require('./assets/Icons/user.png')} style={{ width: 24, height: 24 }} /> }} />
        <Tab.Screen name="Pattern" component={PatternScreenNavigator} options={{ tabBarIcon: () => <Image source={require('./assets/Icons/document.png')} style={{ width: 24, height: 24 }} /> }} />
        <Tab.Screen name="Yarn" component={YarnScreenNavigator} options={{ tabBarIcon: () => <Image source={require('./assets/Icons/yarn.png')} style={{ width: 24, height: 24 }} /> }} />
        
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default App;