import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { globalStyles as styles } from '../styles';

const ConfigForm = () => {
    const [config, setConfig] = useState({ hour: '8', numberOfArticles: '5' });

    const handleSaveConfig = () => {
        axios.post(`${BACKEND_URL}/config`, config)
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Configuração salva com sucesso!',
                });
            })
            .catch((error) => {
                console.error(error);
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao salvar configuração.',
                });
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Configurações de Scraping</Text>
            <TextInput
                label="Hora"
                value={config.hour}
                onChangeText={(value) => setConfig({ ...config, hour: value })}
                style={styles.input}
            />
            <TextInput
                label="Número de Artigos"
                value={config.numberOfArticles}
                onChangeText={(value) => setConfig({ ...config, numberOfArticles: value })}
                style={styles.input}
            />
            <Button mode="contained" onPress={handleSaveConfig} style={styles.button}>
                <Text style={styles.buttonText}>Salvar Configuração</Text>
            </Button>
        </View>
    );
};

export default ConfigForm;
