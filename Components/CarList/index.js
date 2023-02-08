import React from "react";
import { FlatList, View, Dimensions } from 'react-native';
import cars from "./cars";
import CarItem from "../CarItem";

const CarList = () => {
    return(
        <View style={{width: '100%'}}>
            <FlatList 
                data = {cars}
                renderItem = {items => <CarItem cars = {items.item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment = {"start"}
                decelerationRate = "normal"
                snapToInterval = {Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList;