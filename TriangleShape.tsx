import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Rectangleshape = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Image
          source={require("./backgroundimage.jpg")}
          style={styles.image}
        />
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
    width: 150 * 2,
    height: 150,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 10,
    height: 10,
    resizeMode: "cover",
  },
});

export default Rectangleshape;
