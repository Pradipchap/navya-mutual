import { CommonHeader } from "@/components/ScreenHeaders/CommonHeader";
import { Stack } from "expo-router";

const SchemeScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: props => <CommonHeader canGoBack headerIcon={"Money"} headerTitle="Scheme" {...props} />,
          headerShadowVisible: false
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          header: props => <CommonHeader canGoBack headerIcon={"Money"} headerTitle="Scheme Details" {...props} />,
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
};

export default SchemeScreenLayout;
