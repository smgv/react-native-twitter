import { StyleSheet, FlatList, Pressable } from "react-native";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import { View } from "@/components/Themed";
import { Entypo } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable
        style={styles.floatingButton}
        onPress={() => router.push("/new-tweet")}
      >
        <Entypo name="plus" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    right: 15,
    bottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
