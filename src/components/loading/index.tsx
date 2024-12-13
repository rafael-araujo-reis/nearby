import { colors } from "@/styles/theme";
import { ActivityIndicator } from "react-native";
import { styles } from "./styles";

export function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color={colors.green.base}
      style={styles.container}
    />
  );
}
