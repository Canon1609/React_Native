import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function Screen02({ navigation }) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.bikes.data);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => item.category === selectedCategory));
        }
    }, [selectedCategory, data]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>The world's Best Bike</Text>
                <TouchableOpacity style={styles.goBackContainer} onPress={() => navigation.navigate('Screen01')}>
                    <IconAntDesign name="arrowleft" size={20} color="black" />
                    <Text style={styles.goBackText}>Go Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.categoryContainer}>
                <FlatList 
                    data={[{category: 'All'}, ...Array.from(new Set(data.map(item => item.category))).map(category => ({category}))]}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={[
                                styles.categoryButton,
                                { backgroundColor: selectedCategory === item.category ? 'red' : 'blue' }
                            ]}
                            onPress={() => setSelectedCategory(item.category)}
                        >
                            <Text style={styles.categoryButtonText}>{item.category}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.productContainer}>
                <FlatList 
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.productCard}>
                            <View style={styles.productImageContainer}>
                                <IconAntDesign name="hearto" size={20} color="#fff" />
                                <Image source={{ uri: item.image }} style={styles.productImage} />
                            </View>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productPrice}>${item.price}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    goBackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goBackText: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    categoryContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    categoryButton: {
        borderRadius: 10,
        width: 90,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    categoryButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    productContainer: {
        paddingBottom: 130,
    },
    productCard: {
        flex: 1,
        backgroundColor: '#E941411A',
        borderRadius: 10,
        width: 150,
        height: 200,
        alignItems: 'center',
        margin: 10,
    },
    productImageContainer: {
        marginTop: 5,
        padding: 10,
        flexDirection: 'row',
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productName: {
        marginTop: 5,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
    productPrice: {
        marginTop: 5,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
