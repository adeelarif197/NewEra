import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/authscreens/Login';
import SignUp from './src/authscreens/SignUp';
import Splash from './src/Screens/Splash';

const Stack = createNativeStackNavigator();

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Splash}>
				    <Stack.Screen name ="Splash" component={Splash}/>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="SignUp" component={SignUp} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
