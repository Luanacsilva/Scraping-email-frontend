import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EmailDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email Details</Text>
            <Text style={styles.content}>Here are the details of the selected email...</Text>
            <Button title="Back to Dashboard" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
    content: { fontSize: 16, marginTop: 10, textAlign: 'center' },
});

export default EmailDetails;
