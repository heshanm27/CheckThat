import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NativeWindStyleSheet } from "nativewind";
import { COLORS } from "../../../assets/constant/theme";
const InputField = ({ label, iconName, error, password, placeholder, onFocus = () => {}, ...props }) => {
  const [hidePassword, setHidePassword] = React.useState(password);

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text className="label text-text-grey">{label}</Text>
      <View
        style={{
          borderColor: error ? COLORS.error : isFocused ? COLORS.accent : COLORS.border_grey,
        }}
        className="flex-row items-center bg-white rounded-xl  p-2 mt-2 border-2 "
      >
        <Icon
          name={iconName}
          style={{
            fontSize: 20,
            marginRight: 10,
            color: error ? COLORS.error : isFocused ? COLORS.accent : COLORS.text_grey,
          }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          placeholder={label}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: "grey", flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ color: COLORS.text_grey, fontSize: 20 }}
            className="text-text-grey text-2xl"
          />
        )}
      </View>
      {error && <Text className="mt-2 text-red-500 text-lg">{error}</Text>}
    </View>
  );
};

export default InputField;
