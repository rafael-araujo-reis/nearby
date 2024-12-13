import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
  },
  description: {
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fontFamily.regular,
    marginTop: 14,
  },
});
