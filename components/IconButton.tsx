import { Text, View } from "@/components/Themed";
import { EvilIcons } from "@expo/vector-icons";

type IconButtonType = {
  name: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = (props: IconButtonType) => {
  const { name, text } = props;
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={name} size={22} color={"gray"} />
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
