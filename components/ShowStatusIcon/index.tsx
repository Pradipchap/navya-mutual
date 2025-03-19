import { STATUS } from "@/constants/misc";
import Icon from "../Icons";
import { ActivityIndicator } from "react-native";

interface Props {
  status: STATUS;
  color?: { [key in STATUS]?: string };
  icon?: { [key in STATUS]?: string };
  size?: number;
}
export const ShowStatus = ({ status, color, size, icon }: Props) => {
  const iconSize = size || 20;
  const iconColor = color?.[status];
  const iconName = icon?.[status];

  switch (status) {
    case STATUS.FAILED:
      return <Icon name={iconName || "Cross"} size={iconSize} color={iconColor || "red"} />;
    case STATUS.LOADING:
      return <ActivityIndicator color={iconColor || "white"} />;
    case STATUS.SUCCESS:
      return <Icon name={iconName || "Check"} size={iconSize} color={iconColor || "green"} />;
    default:
      return null;
  }
};
