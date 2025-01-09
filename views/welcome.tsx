import CreateAccountButton from "../components/CreateAccountButton";
import SignInButton from "../components/SignInButton";
import { Text, View, StyleSheet } from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.keys}>KEYS</Text>
                <Text style={styles.unlock}>Unlock the door to your next home</Text>
            </View>
            <View>
                <CreateAccountButton/>
                <SignInButton />
            </View>
        </View>
    )
}

// TODO: change background color to all white
// TODO: fix icon and slashpage. Create custom if necessary
// TODO: remove index header

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#fffff',
    },
    keys: {
        fontSize: 111,
        fontFamily: 'Playfair Display' //TODO: import font
    },
    unlock: {
        fontSize: 16
    }
  });