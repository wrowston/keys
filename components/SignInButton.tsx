import { Text, View, TouchableOpacity, StyleSheet} from "react-native";
import { router } from "expo-router";

export default function SignInButton() {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => {
                router.push({pathname: "/"})
            }}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    buttonText: {
        color: "#000",
        alignSelf: "center"
    }
});
