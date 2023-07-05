import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const handle = () => {

};
const Rectangleshape = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={require("./backgroundimage.jpg")}
          style={styles.image}
        ></Image>
         <TouchableOpacity style={styles.button} onPress={handle}>
          <Text style={styles.buttontext}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle: {
    width: 160 * 2,
    height: 190,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: 'yellow'
  },
  text: {
    fontSize: 16,
    color: 'white',
    padding: 3
  },
  button: {
    width: '15%',
    backgroundColor: 'white',
    margin: 7,
    borderColor: 'skyblue',
    borderWidth: 2
  },
  buttontext: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'black'
  }
});

export default Rectangleshape;
