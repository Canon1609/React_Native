import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DATA = [
  {
    id: '1',
    image: 'https://via.placeholder.com/100', // replace with your image URL
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/100',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
  },
  {
    id: '3',
    image: 'https://via.placeholder.com/100',
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    image: 'https://via.placeholder.com/100',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    image: 'https://via.placeholder.com/100',
    name: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    image: 'https://via.placeholder.com/100',
    name: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Book',
  },
  {
    id: '7',
    image: 'https://via.placeholder.com/100',
    name: 'Donald Trump: Thiên tài lãnh đạo',
    shop: 'Minh Long Book',
  },
];

const App = () => {
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
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopName: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  chatText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
