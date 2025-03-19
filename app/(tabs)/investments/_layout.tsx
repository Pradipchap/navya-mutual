import { CommonHeader } from "@/components/ScreenHeaders/CommonHeader";
import { Stack } from "expo-router";

const InvestmentScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: props => <CommonHeader headerIcon={"Home"} headerTitle="Investment" {...props} />,
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
};

export default InvestmentScreenLayout;
