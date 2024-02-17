import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import { TweetType } from "@/types";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = (props: TweetProps) => {
  const { tweet } = props;
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          src={tweet.user.image}
          alt={tweet.user.name}
          style={styles.userImage}
        />
        <View style={styles.mainContainer}>
          <View style={styles.userNameContainer}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.userName}>{tweet.user.username} ·2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>

          <Text style={styles.userContent}>{tweet.content}</Text>

          {tweet?.image && (
            <Image
              src={tweet.image}
              alt={tweet.user.name}
              style={styles.tweetImage}
            />
          )}

          <View style={styles.footer}>
            <IconButton name={"comment"} text={tweet.numberOfComments} />
            <IconButton name={"retweet"} text={tweet.numberOfRetweets} />
            <IconButton name={"heart"} text={tweet.numberOfLikes} />
            <IconButton name={"chart"} text={tweet.impressions || 0} />
            <IconButton name={"share-apple"} />
          </View>
        </View>
      </Pressable>
    </Link>
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
  userNameContainer: {
    flexDirection: "row",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
  userName: {
    color: "gray",
    marginLeft: 5,
  },
  userContent: {
    lineHeight: 20,
    marginTop: 5,
  },
  tweetImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
