import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen01({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>A premium online store for sporter and their stylish choice</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/bluebike.png')} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>POWER BIKE</Text>
                <Text style={styles.titleText}>SHOP</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen02')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Admin')}>
                <Text style={styles.buttonText}>Go to Admin</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headerTextContainer: {
        marginTop: 30,
        textAlign: 'center',
        width: '80%',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imageContainer: {
        marginTop: 30,
        width: '90%',
        backgroundColor: '#E941411A',
        alignContent: 'center',
        padding: 20,
        borderRadius: 30,
    },
    titleContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: 'blue',
        borderRadius: 10,
        width: '80%',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
