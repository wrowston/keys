import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CreateAccountButton() {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    buttonText: {
        color: "#fff"
    }
  });
