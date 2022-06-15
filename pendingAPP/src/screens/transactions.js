import { auto } from 'async';
import { StatusBar } from 'expo-status-bar';
import { hidden } from 'jest-haste-map/node_modules/chalk';
import { upperCase } from 'lodash';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const bottomTab = createBottomTabNavigator();

import Home from './main';

export default class Transactions extends React.Component {
    state = {
        firstQuery: '',
    };

    render() {
        const { firstQuery } = this.state;

        const Tab = createBottomTabNavigator();

        return (

            <View style={styles.main}>
                   
                <View style={styles.mainHeader}>
                    <View style={styles.container_header}>


                        <View style={styles.container_header2}>
                            <View style={styles.containerAR}>
                                <Text style={styles.textName}>Geraldo Bueno</Text>
                            </View>

                            <View style={styles.containerData}>
                                {/* <Text style={styles.textEmail}>geraldo@pending.com</Text> */}
                                <Text style={styles.textCel}>+55 11 90000-0000</Text>
                            </View>

                            <Pressable style={styles.buttonSaldo}>
                                <Text style={styles.textButtonSaldo}>SALDO: R$400,00</Text>
                            </Pressable>
                        </View>

                        <View style={styles.containerButton}>
                            <Pressable style={styles.buttonAdd}>
                                <Text style={styles.textButton}>adicionar cliente</Text>
                            </Pressable>

                            <Pressable style={styles.buttonRemove}>
                                <Text style={styles.textButton}>adicionar compra</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View style={styles.containerBusiness}>
                    <View>
                        <Text style={styles.textBusiness}>Transações</Text>
                    </View>
                </View>

                <View style={styles.containerTransaction}>
                    <View style={styles.transaction}>
                        <Text style={styles.textPag}>Pagamento</Text>
                        <Text style={styles.textClient}>Geraldo</Text>
                    </View>

                    <View style={styles.containerTransaction2}>
                        <Text style={styles.textPag}>+ R$200,00</Text>
                        <Text style={styles.textClient}>22/04/22 1:30 PM</Text>
                    </View>
                </View>

                <View style={styles.containerTransaction}>
                    <View style={styles.transaction}>
                        <Text style={styles.textPag}>Pagamento</Text>
                        <Text style={styles.textClient}>Geraldo</Text>
                    </View>

                    <View style={styles.containerTransaction2}>
                        <Text style={styles.textPag}>+ R$200,00</Text>
                        <Text style={styles.textClient}>22/04/22 1:30 PM</Text>
                    </View>
                </View>

                <View style={styles.navBar}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Main')}>
                        <Image source={require('../assets/Home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Settings')}>
                        <Image source={require('../assets/Settings.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('statistics')}>
                        <Image source={require('../assets/Chart.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Clients')}>
                        <Image source={require('../assets/Client.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },

    navBar: {
        width: 360,
        height: 60,
        backgroundColor: '#222222',
        borderRadius: 20,
        marginBottom: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
    },


    vector: {
        position: 'absolute',
        alignSelf: 'flex-end',
    },

    textName: {
        fontSize: 23,
        fontWeight: '700',
        color: '#000',
        textTransform: 'uppercase',
    },

    mainHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    container_header: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
    },

    containerAR: {
        marginLeft: 25,
        marginTop: 50,
    },

    textEmail: {
        fontSize: 13,
        color: '#999',
    },

    textCel: {
        fontSize: 13,
        color: '#999',
    },

    containerData: {
        marginLeft: 40,
    },

    containerBusiness: {
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: '#363636',
    },

    textBusiness: {
        fontSize: 20,
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '700',

    },

    buttonAdd: {
        width: 165,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#90C9E3',
        marginBottom: 40,
    },

    buttonRemove: {
        width: 165,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#222222',
    },

    buttonSaldo: {
        width: 165,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 15,
        marginLeft: 25,
        borderWidth: 1,
    },

    textButton: {
        fontSize: 12,
        fontWeight: '700',
        color: 'white',
        textTransform: 'uppercase',
    },

    textButtonSaldo: {
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
    },

    containerButton: {
        marginLeft: 20,
        marginTop: 50,
        height: 100,

    },

    containerTransaction: {
        // marginLeft: 20,
        marginTop: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25,
    },

    transaction: {
    },

    textPag: {
        marginBottom: 1,
    },
    textClient: {
        color: '#999',
    },


});
