import { NavigationContainer } from "@react-navigation/native";
import { KeyboardAvoidingView, Platform } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useColorScheme } from "nativewind";
import SignInScreen from "./src/screen/SignInScreen";
import SignUpScreen from "./src/screen/SignUpScreen";

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
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          initialRouteName="welcome"
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="signin" component={SignInScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
