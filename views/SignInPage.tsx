import { Text, View, StyleSheet, Image, TextInput } from "react-native";

export default function SignInPage() {
    return (
        <View>
            <Image source={require("../assets/images/key-logo-splash-screen.png")} style={styles.keysImage}/>
            <Text>SIGN IN</Text>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#fffff',
    },
    keysImage: {
        width: 48,
        height: 48
    },
    unlock: {
        fontSize: 16
    }
  });