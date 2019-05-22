import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import moment from 'moment';
import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';

export default class Agenda extends Component{
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.title}>{moment().format('ddd, D [of] MMMM')}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <Text>Task 1</Text>
                    <Text>Task 2</Text>
                    <Text>Task 3</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 23,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    }
});