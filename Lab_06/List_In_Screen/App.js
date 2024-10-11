import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Screen_4b from "./Screen_4b";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hàm gọi API từ MockAPI
  const fetchData = async () => {
    try {
      const response = await fetch("https://6459e17165bd868e930aa3ad.mockapi.io/users");
      const json = await response.json();
      setData(json); // Cập nhật dữ liệu lấy từ API
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Gọi API khi component được mount
  useEffect(() => {
    fetchData();
  }, []);

  const navbar = (
    <View>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          marginTop: 30,
          alignItems: "center",
          paddingHorizontal: 30,
          height: 42,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("./assets/back.png")}
          style={styles.imageicon}
        />
        <Text style={{ color: "white", fontSize: 23 }}>Chat</Text>
        <Image
          source={require("./assets/online-shopping.png")}
          style={styles.imageicon}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "black", fontSize: 15, padding: 10 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
    </View>
  );

  const footer = (
    <View>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          alignItems: "center",
          paddingHorizontal: 30,
          height: 42,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Image
          source={require("./assets/more-information.png")}
          style={styles.imageicon}
        />
        <Image
          source={require("./assets/interface.png")}
          style={styles.imageicon}
        />
        <Image
          source={require("./assets/back.png")}
          style={styles.imageicon}
        />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.shopName}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {navbar}
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {footer}
    </View>
    //Screen_4b()
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  imageicon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  shopName: {
    fontSize: 14,
    color: "#666",
  },
  chatButton: {
    backgroundColor: "#F31111",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chatText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default App;
