import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConfigForm from '../components/ConfigForm';
import { globalStyles as styles } from '../styles';

const Configurations = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Configurações</Text>
            <ConfigForm /> {/* Exibe o formulário de configuração */}
        </View>
    );
};

export default Configurations;
// Configuration file for backend settings
export const BACKEND_URL = 'http://localhost:3000';  // Set backend URL here
