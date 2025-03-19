import { CommonHeader } from "@/components/ScreenHeaders/CommonHeader";
import { Stack } from "expo-router";

const SchemeScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: props => <CommonHeader headerIcon={"Home"} headerTitle="Scheme" {...props} />,
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
};

export default SchemeScreenLayout;
