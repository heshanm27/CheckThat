import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FONTS } from "../../assets/constant/theme";
import SVGLOGO from "../../assets/svg/undraw_house_searching_re_stk8";
import { StatusBar } from "expo-status-bar";
import { MakePressable, RoundedButton } from "../components/buttons/Buttons";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {};
  return (
    <SafeAreaView className="flex-1 p-4 dark:bg-slate-800 justify-between">
      <StatusBar />
      <View className=" mt-5 mb-2   text-center  ">
        <Text style={{ fontFamily: FONTS.bold }} className="text-6xl break-all   text-left text-gray-800 dark:text-white ">
          Let’s
        </Text>
        <Text style={{ fontFamily: FONTS.bold }} className="text-6xl break-all text-indigo-500  ">
          CheckThat
        </Text>
        <Text style={{ fontFamily: FONTS.bold }} className="text-6xl break-all   text-gray-800  dark:text-white">
          Out!
        </Text>
      </View>
      <View className="mb-10 w-full">
        <SVGLOGO />
      </View>
      <View className="  mb-5 w-full">
        <RoundedButton onPress={() => navigation.navigate("signup")} title="Sign Up" />
        <View className="flex-row justify-center items-baseline mt-4">
          <Text style={{ fontFamily: FONTS.regular }} className="text-center  dark:text-white">
            Already have an account?{" "}
          </Text>
          <MakePressable handlePress={() => navigation.navigate("signin")}>
            <Text style={{ fontFamily: FONTS.bold }} className=" text-indigo-500   ">
              Sign In
            </Text>
          </MakePressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
