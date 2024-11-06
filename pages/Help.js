import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Help = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Help</Text>
            <Text style={styles.content}>
                Welcome to the Help page. Here you'll find instructions on how to use the app.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    content: { fontSize: 16, marginTop: 10, textAlign: 'center' },
});

export default Help;
