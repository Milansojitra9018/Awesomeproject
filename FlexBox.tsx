import React from "react";
import { Text, View, StyleSheet} from "react-native";



const SecondPage = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Hello User</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
        fontSize: 20,
        color: 'black',
        padding: 20,
      },
});

export default SecondPage;