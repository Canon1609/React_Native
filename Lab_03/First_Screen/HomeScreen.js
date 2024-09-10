import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#00CCF9', '#00CCF9']} // Gradient màu bạn muốn áp dụng
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/Ellipse 8.png")}
          style={{ height: 140, width: 140 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20, // Để căn giữa văn bản
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            lineHeight: 29.3,
            fontWeight: "700",
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          GROWN{"\n"} YOUR BUSINESS
        </Text>
      </View>
      
      <View 
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text
          style={{
            color: "black",
            width: 350,
            fontSize: 15,
            lineHeight: 17.58,
            fontWeight: "700",
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          We will help you to grow your business using online server
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={{ backgroundColor: '#E3C000', width: 119, height: 48, borderRadius: 10 }}
        onPress={() => navigation.navigate('Screen_1a')}
        >
          <Text style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 50, textAlign: 'center' }}>LOGIN</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={{ backgroundColor: '#E3C000', width: 119, height: 48, borderRadius: 10 }}
        onPress={() => navigation.navigate('Screen_1a')}
        >
          <Text style={{ fontFamily: 'Roboto', fontWeight: 700, fontSize: 20, lineHeight: 50, textAlign: 'center' }}>SIGN UP</Text>
          
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
