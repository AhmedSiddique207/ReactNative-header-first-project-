
// linking example
// and
// button 


import { StyleSheet, Text, View, Linking, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function index() {

    function openwebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }

    return (
        <View style={styles.container}>

            <View style={styles.buttonsContainer}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => openwebsite('https://www.lapify.site')} >
                        <Text style={styles.olx} >OLX-CLONE</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Pressable style={styles.button} onPress={() => openwebsite('https://www.lapify.site')} >
                        <Text style={styles.olx} >OLX-CLONE</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.originalButton}>
                <Button title='Native Button' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    olx: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '450'

    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#53bdeb',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        fontSize: 16,
    },
    originalButton: {
        width: 190,
        height: 100,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        fontSize: 16,

    },
})