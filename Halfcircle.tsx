import React from "react";
import { View, StyleSheet } from "react-native";

const HalfCircleshape = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  halfCircle: {
    width: 150,
    height: 80,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
  },
});

export default HalfCircleshape;
