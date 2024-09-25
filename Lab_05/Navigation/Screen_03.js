import { StyleSheet, Text, View, Image, TouchableOpacity ,Button} from "react-native";

function Screen_03({ navigation }) {

    return (
        
        <View style={{flex:4}}>
            <View style={styles.item}>
              <View>
                <Image
                  source={require("./assets/vs_red.png")}
                  style={{ height: 145, width: 112 }}
                ></Image>
              </View>
              <View style={{justifyContent:'space-evenly'}}>
                <View>
                <Text style={{fontSize:18}}>
                  Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng
                </Text>
                </View>
                <View>
                <Text style={{fontSize:18}}>
                  Màu: <Text style={{ fontWeight: 'bold' }}>đỏ</Text>
                </Text>
                </View>
                <View>
                <Text style={{fontSize:18}}>
                Cung cấp bởi: <Text style={{ fontWeight: 'bold' }}>Tiki Trading</Text>
                </Text>
                </View>
                <View>
                <Text style={{fontSize:18}}>
                <Text style={{ fontWeight: 'bold' }}>1.790.000 đ</Text>
                </Text>
                </View>
              </View>

            </View>
            <View style={styles.choose_color}>
              <View style={{marginLeft:20,marginTop:10}}>
                <Text style={{fontSize:18}}>
                  Chọn một màu bên dưới:
                </Text>
              </View>
              
              <View  style={{alignItems:'center'}}>
                <View>
                <TouchableOpacity style={styles.touch}
                onPress={() => navigation.navigate("Screen_01")}
                >

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touch1}
                onPress={() => navigation.navigate("Screen_04")}
                >

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touch2}>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touch3}>

                </TouchableOpacity>
              </View>
              </View>
              <View style={{alignItems: 'center',}}>
                <TouchableOpacity style={styles.touch4}
                onPress={() => navigation.navigate("Screen_04")}
                >
                  <Text style={{color:'white',fontSize:25}}>
                    XONG
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

        </View>
      );

}

const styles = StyleSheet.create({
  item:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  choose_color:{
    flex:3,
    backgroundColor: '#C4C4C4',
  },
  touch:{
    backgroundColor: "#C5F1FB",
    width: 85,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5,
  },
  touch1:{
    backgroundColor: "red",
    width: 85,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5,
  },
  touch2:{
    backgroundColor: "black",
    width: 85,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5,
  },
  touch3:{
    backgroundColor: "#234896",
    width: 85,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:5,
  },
  touch4:{
    backgroundColor: "#1952E294",
    width: 326,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20,
    borderRadius: 10,
  },
  
  



});




export default Screen_03;