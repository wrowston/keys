import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{title: 'Welcome'}}/>
      <Stack.Screen name="SignInPage" options={{title: 'SignInPage'}}/>
    </Stack>
  ) 
}
