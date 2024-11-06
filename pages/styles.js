import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1c1c1e',  // Fundo escuro para ambiente de terror
    },
    titleText: {
        fontSize: width * 0.07,  // Tamanho de fonte responsivo
        fontWeight: 'bold',
        color: '#e63946',  // Vermelho intenso para títulos
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#2c2c2e',  // Fundo escuro nos campos de entrada
        borderColor: '#444',  // Borda sutil para efeito de terror
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        color: '#fff',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#e63946',  // Cor vermelha intensa para botões
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: width * 0.045,  // Tamanho de fonte levemente responsivo
        fontWeight: 'bold',
    },
    horrorText: {
        color: '#e0e0e0',  // Texto cinza claro para leitura em fundo escuro
        fontSize: width * 0.045,
        marginBottom: 10,
        textAlign: 'center',
    },
});
