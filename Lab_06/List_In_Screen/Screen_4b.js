import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Dữ liệu mẫu tĩnh (static data)
const data = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/daucam1.png'),
    rating: 4.5,
    discount: '-39%',
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/daucam1.png'),
    rating: 4.5,
    discount: '-39%',
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/daynguon 1.png'),
    rating: 4.5,
    discount: '-39%',
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/giacchuyen 1.png'),
    rating: 4.5,
    discount: '-39%',
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/dauchuyendoi 1.png'),
    rating: 4.5,
    discount: '-39%',
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 ₫',
    imageUrl: require('./assets/daynguon 1.png'),
    rating: 4.5,
    discount: '-39%',
  },
];

const Screen_4b = () => {
  const navbar = (
    <View>
      <View
        style={{
          backgroundColor: '#1BA9FF',
          marginTop: 30,
          alignItems: 'center',
          paddingHorizontal: 30,
          height: 42,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <Image source={require('./assets/back.png')} style={styles.imageicon} />
        <Text style={{ color: 'white', fontSize: 23 }}>Dây cáp USB</Text>
        <Image
          source={require('./assets/online-shopping.png')}
          style={styles.imageicon}
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'black', fontSize: 15, padding: 10 }}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>
    </View>
  );

  const footer = (
    <View>
      <View
        style={{
          backgroundColor: '#1BA9FF',
          alignItems: 'center',
          paddingHorizontal: 30,
          height: 42,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <Image
          source={require('./assets/more-information.png')}
          style={styles.imageicon}
        />
        <Image
          source={require('./assets/interface.png')}
          style={styles.imageicon}
        />
        <Image source={require('./assets/back.png')} style={styles.imageicon} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.imageUrl} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDiscount}>{item.discount}</Text>
      <Text style={styles.productRating}>⭐ {item.rating}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {navbar}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
      {footer}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productList: {
    paddingHorizontal: 10,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'center',
  },
  productPrice: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  productDiscount: {
    color: '#00AEEF',
    fontSize: 12,
  },
  productRating: {
    fontSize: 12,
    color: '#FFD700',
  },
  imageicon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
});

export default Screen_4b;
