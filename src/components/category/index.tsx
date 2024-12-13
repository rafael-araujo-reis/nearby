import { colors } from "@/styles/colors";
import { styles } from "./styles";

import { categoriesIcons } from "@/utils/categories-icons";
import { Pressable, PressableProps, Text } from "react-native";

type Props = PressableProps & {
  iconId: string;
  name: string;
  isSelected?: boolean;
};
export function Category({ iconId, name, isSelected = false, ...rest }: Props) {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  );
}
