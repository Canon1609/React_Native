import { useEffect } from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
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
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Bike Dashboard</Text> 
            
            <View style={styles.addButtonContainer}>
                <TouchableOpacity 
                    style={styles.addButton} 
                    onPress={() => navigation.navigate('AddBike')}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('AddBike', { bike: item })}
                            style={styles.listItem}
                        >
                            <View style={styles.itemContent}>
                                <View style={styles.itemTextContainer}>
                                    <Text style={styles.itemId}>ID: {item.id}</Text>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCategory}>Category: {item.category}</Text>
                                    <Text style={styles.itemDescription} numberOfLines={2}>Description: {item.description}</Text>
                                </View>
                                <View style={styles.itemPriceContainer}>
                                    <Text style={styles.itemPrice}>${item.price}</Text>
                                    <Text style={[styles.itemSale, { color: item.sale ? 'green' : 'red' }]}>
                                        {item.sale}%
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.footerButton} 
                    onPress={() => navigation.navigate('Screen02')}
                >
                    <Text style={styles.footerButtonText}>Go to Bike</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    addButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        paddingBottom: 150,
    },
    listItem: {
        borderBottomWidth: 1, 
        borderColor: 'gray', 
        padding: 10,
        width: '100%',
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTextContainer: {
        flex: 1,
    },
    itemId: {
        color: '#333',
        fontSize: 12,
    },
    itemName: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',
    },
    itemCategory: {
        color: '#666',
        fontSize: 13,
    },
    itemDescription: {
        color: '#666',
        fontSize: 13,
    },
    itemPriceContainer: {
        alignItems: 'flex-end',
        marginLeft: 10,
    },
    itemPrice: {
        color: '#333',
        fontSize: 15,
        fontWeight: 'bold',
    },
    itemSale: {
        fontSize: 13,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
    },
    footerButton: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    footerButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
