import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleApplyDiscount = () => {
    // Xử lý mã giảm giá tại đây
    console.log("Mã giảm giá:", discountCode);
  };

  const totalPrice = 141800 * quantity;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image source={require("./assets/book.png")} style={styles.bookImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.title}>Nguyên hàm, Tích phân và Ứng dụng</Text>
          <Text style={styles.supplier}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 đ</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleDecreaseQuantity}
            >
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.quantityInput}
              value={String(quantity)}
              editable={false}
            />
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleIncreaseQuantity}
            >
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>
                <Text
                  style={{ color: "blue" }}
                  onPress={() => Linking.openURL("https://www.example.com")}
                >
                 {"\t\t\t\t\t\t\t\t"} Mua sau
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>
          Mã giảm giá đã lưu{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.example.com")}
          >
            Xem tại đây
          </Text>
        </Text>
      </View>
      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity
          style={styles.applyButton}
          onPress={handleApplyDiscount}
        >
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.example.com")}
          >
            Nhập tại đây?
          </Text>
        </Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Tạm tính</Text>
          <Text style={styles.summaryText}>
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  bookImage: {
    width: 80,
    height: 100,
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  supplier: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: "#d32f2f",
    fontWeight: "bold",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#e0e0e0",
    padding: 5,
    borderRadius: 4,
  },
  quantityText: {
    fontSize: 16,
  },
  quantityInput: {
    width: 40,
    height: 30,
    textAlign: "center",
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
  },
  couponContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: "#1e88e5",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 4,
  },
  applyButtonText: {
    color: "#fff",
  },
  summaryContainer: {
    backgroundColor: "#fff",
    padding: 20,
    //borderRadius: 8,
    marginBottom: 150,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  checkoutButton: {
    backgroundColor: "#d32f2f",
    paddingVertical: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default App;
