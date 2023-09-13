/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

import SpecificFeaturePage from './src/screens/SpecificFeature';
import HomePage from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import RootPage from './src/screens/Root';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const AppStack = createStackNavigator();
const SpecificFeatureStack = createStackNavigator();

const defaultStackParams = Object.freeze({
  screenOptions: {headerShown: false},
});

// LEVEL 4
/**
 *
 * fabric on: 38
 * fabric off: 63
 */
const SpecificFetaureStackRoute: React.FC = () => {
  return (
    <SpecificFeatureStack.Navigator {...defaultStackParams}>
      <SpecificFeatureStack.Screen
        name="SpecificFetureMain"
        component={SpecificFeaturePage}
      />
    </SpecificFeatureStack.Navigator>
  );
};

// LEVEL 3

/**
 *
 * /**
 * generated to 48 level
 *
 */
const AppStackRoute: React.FC = () => {
  return (
    <AppStack.Navigator {...defaultStackParams}>
      <AppStack.Screen name="Home" component={HomePage} />
      <AppStack.Screen
        name="SpecificFeature"
        component={SpecificFetaureStackRoute}
      />
    </AppStack.Navigator>
  );
};

// LEVEL 2

const TrialApp = () => {
  return (
    <View style={{paddingTop: 100}}>
      <Text>This is APP level</Text>
      <Text>This is APP level</Text>
      <Text>This is APP level</Text>
    </View>
  );
};

/**
 * generated to 34 level
 *
 */
const MainStackRoute: React.FC = () => {
  return (
    <MainStack.Navigator {...defaultStackParams}>
      <MainStack.Screen name="App" component={AppStackRoute} />
    </MainStack.Navigator>
  );
};

// LEVEL 1
/**
 * generated to 22 level
 *
 */
function Root(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator {...defaultStackParams}>
        <RootStack.Screen name="Root" component={RootPage} />
        <RootStack.Screen name="Main" component={MainStackRoute} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Root;
