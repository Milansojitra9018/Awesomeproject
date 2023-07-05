import React from "react";
import { StyleSheet, View} from "react-native";

const Squaredesign = () => {
    return (<View style={styles.container}>
      <View style={styles.square}/>
    </View>
  )};
  
   const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    square: {
      width: 200,
      height: 200,
      backgroundColor: "red",
    },
  });

export default Squaredesign;