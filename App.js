import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';

const users = [
    { name: 'John', image: 'image1.jpg' },
    { name: 'Jane', image: 'image2.jpg' },
    { name: 'Bob', image: 'image3.jpg' },
    // Add more user profiles as necessary
];

export default class App extends Component {
    renderCard = (card, index) => {
        return (
            <Card key={index}>
                <Image style={styles.image} source={{ uri: card.image }} />
                <Text style={styles.text}>{card.name}</Text>
            </Card>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    cards={users}
                    renderCard={this.renderCard}
                    onSwiped={(cardIndex) => {console.log(cardIndex)}}
                    onSwipedLeft={(cardIndex) => {console.log('Swiped left')}}
                    onSwipedRight={(cardIndex) => {console.log('Swiped right')}}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'transparent',
    },
    image: {
        flex: 1,
        height: 300,
        width: null,
        borderRadius: 10,
    },
});
