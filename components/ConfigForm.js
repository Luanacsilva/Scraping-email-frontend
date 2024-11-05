import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const ConfigForm = () => {
    const [config, setConfig] = useState({ hour: '8', numberOfArticles: '5' });

    const handleSaveConfig = () => {
        axios.post('http://localhost:3000/config', config)
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Configurações salvas com sucesso!'
                });
            })
            .catch(() => {
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao salvar configurações.'
                });
            });
    };

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="Configurações de Envio" />
                <Card.Content>
                    <Text>Hora de Envio:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        label="Hora de Envio"
                        value={config.hour}
                        onChangeText={(text) => setConfig({ ...config, hour: text })}
                    />
                    <Text>Número de Notícias:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        label="Número de Notícias"
                        value={config.numberOfArticles}
                        onChangeText={(text) => setConfig({ ...config, numberOfArticles: text })}
                    />
                    <Button mode="contained" onPress={handleSaveConfig}>
                        Salvar Configurações
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 10,
    },
});

export default ConfigForm;
