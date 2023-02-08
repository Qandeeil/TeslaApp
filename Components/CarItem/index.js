import React from "react";
import { View, ImageBackground, Text, Pressable } from 'react-native';
import styles from "./Styles";

const CarItem = (props) => {

    const { name, tagline, image } = props.cars
    return(
        <View style={styles.carContainer}>
            <ImageBackground 
                source={image}
                style={styles.imageBackground}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable 
                    style={styles.buttonOne}
                    onPress={() => console.warn("Cutom order was pressed")}
                >
                    <Text style={styles.textButtonOne}>CUSTOM ORDER</Text>
                </Pressable>
                <Pressable 
                    style={styles.buttonTow}
                    onPress={() => console.warn("Exiting invintory was pressed")}
                >
                    <Text>EXITING INVINTORY</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default CarItem