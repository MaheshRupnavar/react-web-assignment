import { View, Text, TouchableOpacity, StatusBar, Platform, KeyboardAvoidingView } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import screenNames from '../constants/screenNames';
import { CreatePost, Home, Splash } from '../screens';


const Stack = createStackNavigator();

const AppContainer = () => {


    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor={COLORS.bg} barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={0}>
                    <Stack.Navigator screenOptions={{ cardShadowEnabled: true }}>

                        <Stack.Group
                            screenOptions={{
                                detachPreviousScreen: false,
                                cardStyle: { backgroundColor: COLORS.bg },
                                cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
                            }}>
                            <Stack.Screen
                                name={screenNames.SPLASH}
                                component={Splash}
                                options={{ headerShown: false }}
                            />
                        </Stack.Group>

                        <Stack.Group
                            screenOptions={{
                                detachPreviousScreen: false,
                                cardStyle: { backgroundColor: COLORS.bg },
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                            }}>
                            <Stack.Screen
                                name={screenNames.HOME}
                                component={Home}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name={screenNames.CREATE_POST}
                                component={CreatePost}
                                options={{ headerShown: false }}
                            />
                        </Stack.Group>

                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </View>
        </NavigationContainer>
    )
}

export default AppContainer