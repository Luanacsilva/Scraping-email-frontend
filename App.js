import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ConfigForm from './components/ConfigForm';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BACKEND_URL } from './config';
import { globalStyles as styles } from './styles';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Configurations from './pages/Configurations';
import EmailDetails from './pages/EmailDetails';
import Help from './pages/Help';

const Stack = createStackNavigator();

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = await AsyncStorage.getItem('authToken');
            setIsLoggedIn(!!token);
        };
        checkLoginStatus();
    }, []);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('authToken');
        setIsLoggedIn(false);
        Toast.show({
            type: 'info',
            text1: 'Logout realizado com sucesso.',
        });
    };

    const handleScrapeAndEmail = () => {
        setLoading(true);
        axios.get(`${BACKEND_URL}/scrape-and-email`)
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Scraping e envio de email realizados com sucesso!'
                });
            })
            .catch((error) => {
                console.error(error);
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao realizar scraping e enviar e-mail.'
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={isLoggedIn ? 'Dashboard' : 'Login'}>
                    {isLoggedIn ? (
                        <>
                            <Stack.Screen name="Dashboard">
                                {(props) => (
                                    <Dashboard {...props} onLogout={handleLogout} onScrapeAndEmail={handleScrapeAndEmail} />
                                )}
                            </Stack.Screen>
                            <Stack.Screen name="Configurations" component={Configurations} />
                            <Stack.Screen name="EmailDetails" component={EmailDetails} />
                            <Stack.Screen name="Help" component={Help} />
                        </>
                    ) : (
                        <Stack.Screen name="Login" component={Login} />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </PaperProvider>
    );
};

export default App;
