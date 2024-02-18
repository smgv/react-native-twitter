import { StyleSheet } from "react-native";

import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TwitterBlue() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>TwitterBlue</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
