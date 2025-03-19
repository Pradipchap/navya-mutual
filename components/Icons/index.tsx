import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons
} from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { Appearance } from "react-native";

export default function Icon({ name, color, size, style, ...rest }: IconProps<string>) {
  const colorScheme = Appearance.getColorScheme();
  const iconColor = colorScheme === "dark" ? "#ffffff" : "#000000";

  const defaultColor = color || iconColor;
  const defaultSize = size || 24;

  switch (name) {
    case "Cart":
      return <EvilIcons {...rest} style={style} name="cart" color={defaultColor} size={defaultSize} />;
    case "Home":
      return <SimpleLineIcons {...rest} style={style} name="home" color={defaultColor} size={defaultSize} />;
    case "Down":
      return <Entypo {...rest} style={style} name="chevron-thin-down" color={defaultColor} size={defaultSize} />;
    case "ThreeDots":
      return <Entypo {...rest} style={style} name="dots-three-horizontal" color={defaultColor} size={defaultSize} />;
    case "Next":
      return <MaterialIcons {...rest} name="skip-next" size={defaultSize} color={defaultColor} style={style} />;
    case "Prev":
      return <MaterialIcons {...rest} name="skip-previous" size={defaultSize} color={defaultColor} style={style} />;
    case "NextPage":
      return <MaterialIcons {...rest} name="navigate-next" size={defaultSize} color={defaultColor} style={style} />;
    case "PrevPage":
      return <MaterialIcons {...rest} name="navigate-before" size={defaultSize} color={defaultColor} style={style} />;
    case "Cross":
      return <AntDesign {...rest} name="close" size={defaultSize} color={defaultColor} style={style} />;
    case "Search":
      return <Feather {...rest} name="search" size={defaultSize} color={defaultColor} style={style} />;
    case "Plus":
      return <AntDesign {...rest} name="plus" size={defaultSize} color={defaultColor} style={style} />;
    case "Loading":
      return <AntDesign {...rest} name="loading1" size={defaultSize} color={defaultColor} style={style} />;
    case "Check":
      return <AntDesign {...rest} name="check" size={defaultSize} color={defaultColor} style={style} />;
    case "Cross":
      return <Entypo {...rest} name="cross" size={defaultSize} color={defaultColor} style={style} />;
    case "Money":
      return <FontAwesome {...rest} name="money" size={defaultSize} color={defaultColor} style={style} />;
    case "Investment":
      return <AntDesign {...rest} name="linechart" size={defaultSize} color={defaultColor} style={style} />;
    default:
      return null;
  }
}
