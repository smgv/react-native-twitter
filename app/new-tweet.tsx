import tweets from "@/assets/data/tweets";
import { Text, View } from "@/components/Themed";
import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import { StyleSheet, Image, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewTweetScreen() {
  const tweet = tweets[0];
  const [content, setContent] = useState("");
  const navigation = useNavigation();

  const onTweetPress = () => {
    console.warn(content);
    setContent("");
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href={"../"} style={{ fontSize: 20 }}>
            Cancel
          </Link>
          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={tweet.user.image} style={styles.image} />
          <TextInput
            value={content}
            placeholder="What's happening?"
            multiline
            numberOfLines={5}
            style={{
              flex: 1,
            }}
            onChangeText={setContent}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
});
