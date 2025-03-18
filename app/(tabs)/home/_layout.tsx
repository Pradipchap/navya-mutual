import { CommonHeader } from "@/components/ScreenHeaders/CommonHeader";
import { Stack } from "expo-router";

const HomeScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: props => <CommonHeader headerIcon={"Home"} headerTitle="Home" {...props} />,
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
};

export default HomeScreenLayout;
