import { STATUS } from "@/constants/misc";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { TouchableOpacityProps } from "react-native";

export interface ICustomButtonProps extends TouchableOpacityProps {
	status:STATUS,
	text:string,
	iconProps:IconProps<string>
}