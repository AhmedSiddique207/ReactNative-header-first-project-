// flatlist and icons example

import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Entypo';

const Index = () => {
    const arr = [
        { id: '1', name: 'ahmed' },
        { id: '2', name: 'shafay' },
        { id: '3', name: 'ahad' },
        { id: '4', name: 'owais' },
        { id: '5', name: 'hadi' },
        { id: '6', name: 'Akmal' },
        { id: '7', name: 'Aslam' },
        { id: '8', name: 'Jawaid' },
        { id: '9', name: 'Yousuf' },
        { id: '10', name: 'Hussain' },
        { id: '11', name: 'Amin' },
    ];

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={'#202a32'}
                barStyle='light-content'
            />

            <View style={styles.topbar}>
                <Text style={styles.whatsapp}>Whatsapp</Text>
                <Icon2 style={styles.icons} name='camera' color={'white'} size={22} />
                <Icon style={styles.icons} name='search' color={'white'} size={22} />
                <Icon3 style={styles.icons} name='dots-three-vertical' color={'white'} size={22} />
            </View>

            <View style={styles.flatListContainer}>
                <Text>Flat-list Horizontal Direction</Text>
                <FlatList
                    data={arr}
                    renderItem={({ item }) => <Text style={styles.flatlist}>{item.name}</Text>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

                <Text>Flat-list Vertical Direction</Text>
                <FlatList
                    data={arr}
                    renderItem={({ item }) => <Text style={styles.flatlist}>{item.name}</Text>}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141921',
    },
    topbar: {
        width: '100%',
        height: '15%',
        backgroundColor: '#1a2228',
        flexDirection: 'row',
        paddingTop: 18,
        alignItems: 'center',
    },
    whatsapp: {
        color: '#ffffff',
        fontWeight: 'bold',
        height: 40,
        marginLeft: 10,
        fontSize: 20,
        flex: 1,
    },
    icons: {
        padding: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContainer: {
        flex: 1,
        padding: 10,
    },
    flatlist: {
        height: 140,
        padding: 10,
        color: '#000',
        backgroundColor: '#FFFF00',
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
    }
});


