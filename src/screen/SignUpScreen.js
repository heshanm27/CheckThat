import { View, Text, TextInput, Button, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgImage from "../../assets/svg/undraw_develop_app_re_bi4i";
import { CircleButton, MakePressable, RoundedButton } from "../components/buttons/Buttons";
import { FONTS } from "../../assets/constant/theme";
import InputField from "../components/inputs/InputField";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "../../assets/svg/Icons";

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1  dark:bg-slate-800 justify-between">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View className="scale-50 -m-16 ">
          <SvgImage />
        </View>

        <View className=" flex-1 p-5 justify-center dark:bg-bg-light rounded-t-3xl">
          <View className="flex-1 justify-between">
            <Text style={{ fontFamily: FONTS.bold }} className="text-text-grey text-4xl break-before-left">
              Sign Up
            </Text>
          </View>
          <View className="flex-1 justify-between mt-1 ">
            <InputField error={false} iconName="account-outline" label="FullName" inputType="default" />
            <InputField error={false} iconName="email-outline" label="Email" inputType="email-address" />
            <InputField error={false} iconName="lock-outline" label="Password" inputType="pass" password />

            <RoundedButton onPress={() => {}} title="Sign Up" />
            <Text className="text-center mb-2">OR</Text>
          </View>

          <View className="flex-row justify-around">
            <CircleButton icon={<FacebookIcon width={36} height={36} />} />
            <CircleButton icon={<GoogleIcon width={36} height={36} />} />
            <CircleButton icon={<TwitterIcon width={36} height={36} />} />
          </View>

          <View className="flex-row justify-center items-baseline ">
            <Text style={{ fontFamily: FONTS.regular }} className="text-center ">
              Already have an account?{" "}
            </Text>
            <MakePressable handlePress={() => navigation.navigate("signin")}>
              <Text style={{ fontFamily: FONTS.bold }} className=" text-indigo-500   ">
                Sign In
              </Text>
            </MakePressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
