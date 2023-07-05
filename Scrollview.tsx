import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

const handle = () => {

};

const ScrollViewdesign = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollview}>

                <View style={styles.rectangle}>
                    <Image
                        source={require("./headphone.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./camara.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./headphone.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./camara.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./headphone.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./camara.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
                <View style={styles.rectangle}>
                    <Image
                        source={require("./headphone.jpg")}
                        style={styles.image}
                    />
                             <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy Now</Text>
        </TouchableOpacity>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollview: {
        backgroundColor: 'skyblue',
        marginHorizontal: 12,
        borderColor: "black",
        borderWidth: 5
    },
    text: {
        fontSize: 70,
        color: 'grey'
    },
    rectangle: {
        width: 150 * 2,
        height: 150,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        margin: 30
    },
    image: {
        width: '70%',
        height: "70%",
        resizeMode: "cover",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "grey",
        padding: 50,
        marginTop: 10
    },
    button: {
        width: '40%',
        backgroundColor: 'skyblue',
        margin: 7,
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 2,
        marginTop: 8,
        marginBottom: 11,
      },
      buttontext: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'steelblue',
        fontWeight: 600
      }
})

export default ScrollViewdesign;