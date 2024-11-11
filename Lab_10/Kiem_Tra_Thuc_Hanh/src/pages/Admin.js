import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function Admin({ navigation }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.bikes.data);
    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: 10}}>Bike Dashboard</Text> 
            
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 10, width: 50, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 50}} onPress={() => navigation.navigate('EditBike')}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10, paddingBottom: 150}}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('EditBike', { bike: item })}
                            style={{
                                borderBottomWidth: 1, 
                                borderColor: 'gray', 
                                padding: 10,
                                width: '100%'
                            }}
                        >
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={{flex: 1}}>
                                    <Text style={{color: '#333', fontSize: 12}}>ID: {item.id}</Text>
                                    <Text style={{color: '#333', fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
                                    <Text style={{color: '#666', fontSize: 13}}>Category: {item.category}</Text>
                                    <Text style={{color: '#666', fontSize: 13}} numberOfLines={2}>Description: {item.description}</Text>
                                </View>
                                <View style={{alignItems: 'flex-end', marginLeft: 10}}>
                                    <Text style={{color: '#333', fontSize: 15, fontWeight: 'bold'}}>${item.price}</Text>
                                    <Text style={{color: item.sale ? 'green' : 'red', fontSize: 13}}>
                                        {item.sale}%
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={{position: 'absolute', bottom: 0, width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: 'purple', borderRadius: 10, width: 150, height: 30, justifyContent: 'center', alignItems: 'center', margin: 10}} onPress={() => navigation.navigate('Screen02')}>
                    <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Go to Bike</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}