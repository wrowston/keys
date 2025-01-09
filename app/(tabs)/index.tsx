import SignInPage from "@/views/SignInPage";
import Welcome from "@/views/welcome";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Welcome/>
      {/* <SignInPage/> */}
    </View>
  );
}