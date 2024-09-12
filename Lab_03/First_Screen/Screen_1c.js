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

export default function Screen_1c({ navigation }) {
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
        <Text
          style={{
            color: "black",
            fontSize: 70,
            lineHeight: 70,
            fontWeight: "700",
            fontFamily: "Roboto",
            textAlign: "center",
            top: 30,
          }}
        >
          CODE
        </Text>
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
          VERIFICATION
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
          Enter onetime password sent on {"\n"}++84123456789
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: 340, // Độ rộng tổng thể của View
          height: 48, // Chiều cao tổng thể của View
          left: 35, // Điều chỉnh vị trí của View
        }}
      >
        {/* Tạo 6 ô TextInput liền nhau */}
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            style={{
              backgroundColor: "transparent", // Đặt nền TextInput trong suốt
              width: 50, // Chiều rộng cho mỗi ô TextInput
              height: 48, // Chiều cao cho mỗi ô TextInput
              borderWidth: 1, // Đường viền
              borderColor: "black", // Màu viền đen
              textAlign: "center", // Căn giữa văn bản trong ô
              marginHorizontal: 0, // Khoảng cách giữa các ô
              fontSize: 20, // Kích thước chữ
              color: "black", // Màu chữ
            }}
            maxLength={1} // Giới hạn nhập 1 ký tự cho mỗi ô
            keyboardType="numeric" // Chỉ cho phép nhập số
          />
        ))}
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
            VERYFICODE
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
