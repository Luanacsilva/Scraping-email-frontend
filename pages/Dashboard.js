import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

const Dashboard = ({ onLogout, onScrapeAndEmail }) => {
    const [loading, setLoading] = useState(false);

    const handleScrapeAndEmail = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/scrape-and-email');
            Alert.alert('Success', response.data.message || 'Scraping e envio de email realizados com sucesso!');
        } catch (error) {
            Alert.alert('Error', 'Erro ao realizar scraping e enviar e-mail');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <Button title="Run Scrape and Email" onPress={handleScrapeAndEmail} />
            )}
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});

export default Dashboard;
