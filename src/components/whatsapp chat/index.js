
//map function example

import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { students } from '../../utils/constants/data';

const index = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'black'} />
            {students.map((item) => (
                <View key={item.uid} style={styles.studentContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.qualification}>{item.qualification}</Text>
                    <Text style={styles.city}>{item.city}</Text>
                </View>
            ))}

        </View>
    );
};
export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    studentContainer: {
        marginBottom: 12,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'red'
    },
    qualification: {
        fontSize: 16,
        color: '#555',
        marginBottom: 2,
    },
    city: {
        fontSize: 14,
        color: '#888',
    },
});


