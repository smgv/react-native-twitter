import { Stack, withLayoutContext } from "expo-router";
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { Text } from "@/components/Themed";

const DrawerNavigator = createDrawerNavigator().Navigator;
const Drawer = withLayoutContext(DrawerNavigator);

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <Text
        style={{
          alignSelf: "flex-start",
          padding: 10,
          fontSize: 20,
        }}
      >
        Ganesh Patra
      </Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Drawer.Screen
        name="bookmarks"
        options={{ headerShown: false, title: "Bookmarks" }}
      />
      <Drawer.Screen
        name="twitter-blue"
        options={{ headerShown: false, title: "Twitter Blue" }}
      />
    </Drawer>
  );
}
