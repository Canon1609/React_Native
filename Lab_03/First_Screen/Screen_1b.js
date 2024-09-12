import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Screen_1b({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]} // Gradient màu bạn muốn áp dụng
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
          FORGET{"\n"} PASSWORD
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            width: 350,
            fontSize: 17,
            lineHeight: 17.58,
            fontWeight: "700",
            fontFamily: "Roboto",
            textAlign: "center",
          }}
        >
          Provide your account's email for which you want to reset password
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#BDBDBD", // Đặt màu nền xám giống trong hình
          width: 340, // Độ rộng tổng thể của View
          height: 48, // Chiều cao tổng thể của View
          left: 35, // Điều chỉnh vị trí của TextInput
        }}
      >
        {/* Icon Email */}
        <Image
          source={require("./assets/email.png")}
          style={{ height: 30, width: 30, marginLeft: 5 }} // Điều chỉnh kích thước và căn lề cho icon
        />

        {/* TextInput */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6B6B6B"
          style={{
            backgroundColor: "transparent", // Đặt nền TextInput trong suốt
            width: 280, // Điều chỉnh chiều rộng TextInput
            height: 48,
            paddingLeft: 15, // Thêm khoảng cách giữa icon và text
            fontSize: 16, // Kích thước chữ
            color: "black", // Màu chữ
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          top: 15,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E3C000",
            width: 340,
            height: 48,
          }}
            onPress={() => navigation.navigate("Screen_1c")}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: 20,
              lineHeight: 50,
              textAlign: "center",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: 302,
          height: 53,
          top: -50,
          left: 60,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      ></View>
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
