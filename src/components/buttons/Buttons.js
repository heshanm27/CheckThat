import { Pressable, Text } from "react-native";
import { FONTS } from "../../../assets/constant/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const RoundedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={onPress} className="bg-indigo-500 p-2 mt-2 mb-2 flex-row justify-center w-3/5 self-center rounded-full">
        <Text className="text-center text-lg text-white" style={{ fontFamily: FONTS.bold }}>
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

export const CircleButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity>
      <Pressable onPress={onPress} className="bg-slate-100 p-2 mt-2 mb-2 flex-row justify-center  self-center rounded-full">
        {/* <Icon name={icon} size={24} /> */}
        {icon}
      </Pressable>
    </TouchableOpacity>
  );
};
