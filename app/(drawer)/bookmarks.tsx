import { StyleSheet } from "react-native";

import { Text } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookMarksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BookMarksScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
