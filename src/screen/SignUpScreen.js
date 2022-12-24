import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  return (
    <SafeAreaView className="flex-1 p-4 dark:bg-slate-800 justify-between">
      <View>
        <Text>SignUpScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
