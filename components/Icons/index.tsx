import {
  AntDesign,
  Entypo,
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
    case "FlashOff":
      return <Ionicons {...rest} style={style} name="flash-off" color={defaultColor} size={defaultSize} />;
    case "Flash":
      return <Ionicons {...rest} style={style} name="flash" color={defaultColor} size={defaultSize} />;
    case "ScanDocument":
      return <MaterialIcons {...rest} style={style} name="document-scanner" color={defaultColor} size={defaultSize} />;
    case "Image":
      return <Feather {...rest} style={style} name="image" color={defaultColor} size={defaultSize} />;
    case "FlipCamera":
      return <Ionicons {...rest} style={style} name="camera-reverse-outline" color={defaultColor} size={defaultSize} />;
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
    case "Shuffle":
      return <Entypo {...rest} name="shuffle" size={defaultSize} color={defaultColor} style={style} />;
    case "Repeat":
      return <MaterialCommunityIcons {...rest} name="repeat" size={defaultSize} color={defaultColor} style={style} />;
    case "RepeatOff":
      return <MaterialCommunityIcons {...rest} name="repeat-off" size={defaultSize} color={defaultColor} style={style} />;
    case "RepeatOnce":
      return <MaterialCommunityIcons {...rest} name="repeat-once" size={defaultSize} color={defaultColor} style={style} />;
    case "NextPage":
      return <MaterialIcons {...rest} name="navigate-next" size={defaultSize} color={defaultColor} style={style} />;
    case "PrevPage":
      return <MaterialIcons {...rest} name="navigate-before" size={defaultSize} color={defaultColor} style={style} />;
    case "Cross":
      return <AntDesign {...rest} name="close" size={defaultSize} color={defaultColor} style={style} />;
    case "Search":
      return <Feather {...rest} name="search" size={defaultSize} color={defaultColor} style={style} />;
    case "Music":
      return <Feather {...rest} name="music" size={defaultSize} color={defaultColor} style={style} />;
    case "Duration":
      return <Ionicons {...rest} name="timer-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "Menu":
      return <Feather {...rest} name="menu" size={defaultSize} color={defaultColor} style={style} />;
    case "Sort":
      return <MaterialIcons {...rest} name="sort" size={defaultSize} color={defaultColor} style={style} />;
    case "PlayNext":
      return <Ionicons {...rest} name="play-skip-forward-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "PlayBack":
      return <Ionicons {...rest} name="play-skip-back-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "Plus":
      return <AntDesign {...rest} name="plus" size={defaultSize} color={defaultColor} style={style} />;
    case "AddPlaylist":
      return <MaterialIcons {...rest} name="playlist-add" size={defaultSize} color={defaultColor} style={style} />;
    case "Queue":
      return <MaterialIcons {...rest} name="queue" size={defaultSize} color={defaultColor} style={style} />;
    case "Restart":
      return <MaterialIcons {...rest} name="restart-alt" size={defaultSize} color={defaultColor} style={style} />;
    case "Artist":
      return (
        <MaterialCommunityIcons {...rest} name="account-music-outline" size={defaultSize} color={defaultColor} style={style} />
      );
    case "Download":
      return <Feather {...rest} name="download" size={defaultSize} color={defaultColor} style={style} />;

    case "Library":
      return <Ionicons {...rest} name="library-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "Setting":
      return <Ionicons {...rest} name="settings-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "Feedback":
      return <MaterialIcons {...rest} name="feedback" size={defaultSize} color={defaultColor} style={style} />;
    case "Star":
      return <Feather {...rest} name="star" size={defaultSize} color={defaultColor} style={style} />;
    case "Share":
      return <Entypo {...rest} name="share" size={defaultSize} color={defaultColor} style={style} />;
    case "Group":
      return <FontAwesome6 {...rest} name="people-group" size={defaultSize} color={defaultColor} style={style} />;
    case "Loading":
      return <AntDesign {...rest} name="loading1" size={defaultSize} color={defaultColor} style={style} />;
    case "Check":
      return <AntDesign {...rest} name="check" size={defaultSize} color={defaultColor} style={style} />;
    case "Cross":
      return <Entypo {...rest} name="cross" size={defaultSize} color={defaultColor} style={style} />;
    case "Update":
      return <MaterialIcons {...rest} name="system-update-alt" size={defaultSize} color={defaultColor} style={style} />;
    case "Money":
      return <FontAwesome {...rest} name="money" size={defaultSize} color={defaultColor} style={style} />;
    case "Tasks":
      return <FontAwesome5 {...rest} name="tasks" size={defaultSize} color={defaultColor} style={style} />;
    case "Date":
      return <Fontisto {...rest} name="date" size={defaultSize} color={defaultColor} style={style} />;
    case "Camera":
      return <SimpleLineIcons {...rest} name="camera" size={defaultSize} color={defaultColor} style={style} />;
    case "Note":
      return <SimpleLineIcons {...rest} name="note" size={defaultSize} color={defaultColor} style={style} />;
    case "Filter":
      return <Ionicons {...rest} name="filter-outline" size={defaultSize} color={defaultColor} style={style} />;
    case "Mail":
      return <AntDesign {...rest} name="mail" size={defaultSize} color={defaultColor} style={style} />;
    case "AddUser":
      return <MaterialIcons {...rest} name="person-add" size={defaultSize} color={defaultColor} style={style} />;
    default:
      return null;
  }
}
