import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Appearance } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import SignInScreen from "./src/screen/SignInScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";

const Stack = createStackNavigator();

export default function App() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  useEffect(() => {
    setColorScheme("system");
  }, [colorScheme]);

  if (!loaded) return null;
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1">
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="SignIn"
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}
