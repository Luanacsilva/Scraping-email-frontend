import React, { useState } from 'react';
import { View, Button, StyleSheet, ActivityIndicator } from 'react-native';
import ConfigForm from './components/ConfigForm';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import axios from 'axios';

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para alternar o tema claro/escuro
    const [loading, setLoading] = useState(false); // Estado para exibir o indicador de carregamento

    // Função para iniciar o scraping e envio de e-mail manualmente
    const handleScrapeAndEmail = () => {
        setLoading(true); // Exibe o indicador de carregamento
        axios.get('http://localhost:3000/scrape-and-email') // Endpoint para iniciar scraping e envio de e-mail
            .then(() => {
                // Exibe mensagem de sucesso com Toast
                Toast.show({
                    type: 'success',
                    text1: 'Scraping e envio de email realizados com sucesso!'
                });
            })
            .catch(() => {
                // Exibe mensagem de erro com Toast
                Toast.show({
                    type: 'error',
                    text1: 'Erro ao realizar scraping e enviar e-mail.'
                });
            })
            .finally(() => {
                setLoading(false); // Esconde o indicador de carregamento após a operação
            });
    };

    return (
        <PaperProvider theme={isDarkTheme ? DarkTheme : DefaultTheme}> {/* Tema do app */}
            <View style={styles.container}>
                <ConfigForm /> {/* Formulário de configuração */}
                
                <Button title="Iniciar Scraping e Envio" onPress={handleScrapeAndEmail} /> {/* Botão para scraping */}
                
                <Button
                    title="Alternar Tema"
                    onPress={() => setIsDarkTheme(!isDarkTheme)} // Alterna entre tema claro e escuro
                />
                
                {loading && (
                    <View style={styles.loading}> {/* Exibe indicador de carregamento se loading for true */}
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} /> {/* Referência do Toast para exibir mensagens */}
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
});

export default App;
