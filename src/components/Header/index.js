import React from "react";
import { View, Image, Text, StyleSheet, useColorScheme, StatusBar, statusBarStyle, } from 'react-native';
import { call, login } from "../../utils/constants/images";
import Designtemp from "../Boxes/Designtemp";

function Index() {
    const isDarkMode = useColorScheme() === "dark";
    return (
        <>
            <View style={isDarkMode ? styles.containerLight : styles.containerDark}>

                <StatusBar
                    animated={true}
                    backgroundColor={isDarkMode ? '#000000' : 'purple'}
                    barStyle={statusBarStyle}
                />

                { /* Navbar starts */}
                <View style={styles.topbar}>

                    <Text style={styles.meezan} >MEEZAN BANK LIMITED</Text>
                    <Image source={login} style={styles.imageicon} />
                    <Image source={call} style={styles.imageicontwo} />

                </View>
                { /* Navbar ends */}


                <View style={styles.account}>

                    <Text style={isDarkMode ? styles.namecustomerLight : styles.namecustomerDark}>Hello Ahmed!</Text>
                    <Text style={isDarkMode ? styles.balanceLight : styles.balanceDark}>Your Account Balance = Rs:50,000/=</Text>

                </View>
                <View>

                    <Designtemp />

                </View>

            </View>


        </>
    );
}

const styles = StyleSheet.create({
    containerDark: {
        flex: 1,
        backgroundColor: 'white'

    },
    containerLight: {
        flex: 1,
        backgroundColor: 'black'

    },
    topbar: {
        width: '100%',
        height: '5%',
        backgroundColor: 'purple',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',


    },
    meezan: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 10,
        flex: 1,

    },
    imageicon: {
        width: 25,
        height: 25,
        marginLeft: 'auto',
        marginRight: 10,

    },
    imageicontwo: {
        width: 25,
        height: 25,
        marginLeft: 'auto',
        marginRight: 5,

    },
    account: {
        width: '100%',
        height: '5%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    namecustomerDark: {
        fontWeight: "600",
        color: 'black',
        marginLeft: 10,
        flex: 1,

    },
    balanceDark: {
        marginLeft: 10,
        color: 'gray'
    },
    namecustomerLight: {
        fontWeight: "600",
        color: 'white',
        marginLeft: 10,
        flex: 1,
        color: 'white'
    },
    balanceLight: {
        marginLeft: 10,
        color: 'gold'
    }
});

export default Index;