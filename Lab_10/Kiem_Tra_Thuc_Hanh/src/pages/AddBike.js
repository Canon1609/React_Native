import { TouchableOpacity, StyleSheet } from "react-native";
import { View, Text, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function EditBike({ navigation, route }) {
    const dispatch = useDispatch();
    const bikes = useSelector((state) => state.bikes.data);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        price: '',
        description: '',
        sale: '',
        category: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(fetchBikes());
    }, [dispatch]);

    useEffect(() => {
        if (bikes.length > 0) {
            const uniqueCategories = Array.from(new Set(bikes.map(bike => bike.category)));
            setCategories(uniqueCategories);
        }
        
        if (route.params?.bike) {
            setFormData(route.params.bike);
        }
    }, [bikes, route.params]);

    const handleChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            let url = 'https://64571b781a4c152cf97b4a06.mockapi.io/bike';
            let method = 'POST';
            let body = { ...formData };

            if (route.params?.bike) {
                url = `${url}/${route.params.bike.id}`;
                method = 'PUT';
            } else {
                const timestamp = new Date().getTime();
                const randomSuffix = Math.floor(Math.random() * 1000);
                body.id = `${timestamp}${randomSuffix}`;
                
                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        const existingBikes = await response.json();
                        if (Array.isArray(existingBikes) && existingBikes.length > 0) {
                            const maxId = Math.max(...existingBikes.map(bike => parseInt(bike.id)), 0);
                            body.id = (maxId + 1).toString();
                        }
                    }
                } catch (error) {
                    console.log('Using fallback ID generation due to fetch error');
                }
            }
            
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });

            if (response.ok) {
                dispatch(fetchBikes());
                navigation.navigate('Admin');
            } else {
                console.error('Failed to save bike');
            }
        } catch (error) {
            console.error('Error saving bike:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add Bike</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter bike name"
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Image URL:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter image URL"
                        value={formData.image}
                        onChangeText={(text) => handleChange('image', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter price"
                        keyboardType="numeric"
                        value={formData.price?.toString()}
                        onChangeText={(text) => handleChange('price', text)}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Description:</Text>
                    <TextInput 
                        style={[styles.input, styles.textArea]}
                        placeholder="Enter description"
                        multiline={true}
                        numberOfLines={4}
                        value={formData.description}
                        onChangeText={(text) => handleChange('description', text)}
                    />
                </View>
                
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Category:</Text>
                    <Picker
                        selectedValue={formData.category}
                        style={styles.picker}
                        onValueChange={(value) => handleChange('category', value)}
                    >
                        {categories.map((category, index) => (
                            <Picker.Item key={index} label={category} value={category} />
                        ))}
                    </Picker>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Sale Percentage:</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Enter sale percentage"
                        keyboardType="numeric"
                        value={formData.sale?.toString()}
                        onChangeText={(text) => handleChange('sale', text)}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.saveButton}
                    onPress={handleSave}
                >
                    <Text style={styles.saveButtonText}>Save Bike</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('Admin')}>
                    <Text style={styles.adminButtonText}>Go to Admin</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    form: {
        padding: 10,
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 5,
    },
    textArea: {
        height: 100,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    saveButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        alignItems: 'center',
    },
    adminButton: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        marginLeft:130
    },
    adminButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
