import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import vsmart_blue from "../assets/image/vsmart.png";
import { Text } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

function Screen01() {
    return ( 
        <View style={styles.container}>
            <View style={styles.imageContainer}><Image source={vsmart_blue} style={{width: 200, height: 200}}/></View>
            <Text style={{...styles.rowContainer}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={{...styles.rowContainer}}> 
            <View style={{flexDirection: "row", justifyContent: "space-between", width:120}}>
                <Icon name="star" size={25} color="#ffd700" />
                <Icon name="star" size={25} color="#ffd700" />
                <Icon name="star" size={25} color="#ffd700" />
                <Icon name="star" size={25} color="#ffd700" />
                <Icon name="star" size={25} color="#ffd700" />
            </View>
            <Text style={{marginLeft:30, marginTop:3}}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{...styles.rowContainer}}>
                <Text style={{fontWeight: "bold", fontSize: 20}}>2.990.000đ</Text>
                <Text style={{textDecorationLine: "line-through", fontSize: 13, paddingTop:5, paddingLeft:40, color: "#333"}}>2.990.000đ</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={{fontWeight: "bold", color:"red"}}>
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                </Text>
                <Icon name="question-circle-o" size={20} style={{paddingLeft:30}}/>
            </View>
            <TouchableOpacity style={{borderRadius: 10, borderWidth:1, padding:5, ...styles.rowContainer, height: 40, justifyContent:"space-around"}}>
                <Text style={{fontSize:18, paddingLeft: 50}}>4 MÀU-CHỌN MÀU</Text>
                <Text style={{fontSize:18}}>{'>'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.rowContainer, borderRadius: 10, borderWidth: 3, marginTop: 50, height:50, justifyContent:"center", backgroundColor:"red"}}>
                <Text style={{marginTop: 8, fontSize:20, fontWeight: "bold", color:"#fff"}}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
     );
}

export default Screen01;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
      justifyContent: 'center',
      padding: 20,
    },
    rowContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    paragraph: {
      margin: 20,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviewContainer:{

    },

})