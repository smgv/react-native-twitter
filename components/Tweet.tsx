import { StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { TweetType } from "@/types";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = (props: TweetProps) => {
  const { tweet } = props;
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.userName}>{tweet.user.name}</Text>
        <Text style={styles.userContent}>{tweet.content}</Text>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgrey",
    backgroundColor: "white",
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontWeight: "600",
  },
  userContent: {
    lineHeight: 20,
    marginTop: 5,
  },
});
