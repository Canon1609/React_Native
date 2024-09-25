import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function Screen_01({ navigation }) {
  return (
    <View style={{ flex: 2 }}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Image
          source={require("./assets/vs_blue.png")}
          style={{ height: 350, width: 280 }}
        ></Image>
        <Text style={styles.text}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", left: 30, top: -40 }}>
          <Image
            source={require("./assets/star.png")}
            style={styles.rate}
          ></Image>
          <Image
            source={require("./assets/star.png")}
            style={styles.rate}
          ></Image>
          <Image
            source={require("./assets/star.png")}
            style={styles.rate}
          ></Image>
          <Image
            source={require("./assets/star.png")}
            style={styles.rate}
          ></Image>
          <Image
            source={require("./assets/star.png")}
            style={styles.rate}
          ></Image>

          <View style={{ left: 60 }}>
            <Text style={styles.text}>(Xem 828 đánh giá)</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", left: 30, top: -30 }}>
          <View>
            <Text
              style={{
                color: "black",
                fontSize: 22,
                fontStyle: "Roboto",
                lineheight: 20,
                fontWeight: "bold",
              }}
            >
              1.790.000 đ
            </Text>
          </View>
          <View style={{ left: 70 }}>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "black",
                fontSize: 18,
                fontStyle: "Roboto",
                lineheight: 20,
              }}
            >
              1.790.000 đ
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", left: 30, top: -10 }}>
          <Text
            style={{
              color: "#FA0000",
              fontSize: 18,
              fontStyle: "Roboto",
              lineheight: 20,
            }}
          >
            Ở đâu rẻ hơn hoàn tiền ?
          </Text>
          <Ionicons name="help-circle-outline" size={24} color="black" style={{ marginLeft: 5 }} />
        </View>
        <View style={{justifyContent: 'space-around' }}>
        <View style={{ left: 30 ,marginBottom: 30}}>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate("Screen_02")}
          >
            <Text style={styles.text}>4 MÀU: CHỌN MÀU</Text>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ left: 30,justifyContent:'space-around'}}>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: 350,
              height: 44,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Screen_02")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 18,
    fontStyle: "Roboto",
    lineheight: 20,
  },
  rate: {
    width: 25,
    height: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 350, // Điều chỉnh kích thước của button
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default Screen_01;
