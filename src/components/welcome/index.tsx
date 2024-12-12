import { Image, Text, View } from "react-native";
import { style } from "./style";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={style.logo} />
      <Text style={style.title}>Boas vindas ao Nearby</Text>
      <Text style={style.subtitle}>
        Tenha cupons de vantagens para usar em {"\n"} seus estabelecimentos
        favoritos.
      </Text>
    </View>
  );
}
