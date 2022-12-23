import { Pressable, Text } from "react-native";
import { FONTS } from "../../../assets/constant/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RoundedButton = ({ title, styles, textStyle, onPress }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={onPress} className="bg-indigo-500 p-3 flex-row justify-center w-8/12 self-center rounded-full">
        {/* {({ pressed }) => <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>} */}
        <Text className="text-center text-lg text-white" style={{ fontFamily: FONTS.bold, ...textStyle }}>
          {title}
        </Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export const MakePressable = ({ children, handlePress }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={handlePress}>{children}</Pressable>
    </TouchableOpacity>
  );
};
