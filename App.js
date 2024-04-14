import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DashboardScreen, HomeScreen, TypeSelectionScreen } from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerShown: false,
						headerBackTitleVisible: false,
					}}
				>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen
						name='Dashboard'
						component={DashboardScreen}
					/>
					<Stack.Screen
						name='TypeSelection'
						component={TypeSelectionScreen}
						options={{
							headerShown: true,
							title: 'Select your Type',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
};

export default App;
