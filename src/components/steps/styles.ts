import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
  title: {
    color: colors.gray[500],
    fontSize: 24,
    fontFamily: fontFamily.regular,
  },
});
