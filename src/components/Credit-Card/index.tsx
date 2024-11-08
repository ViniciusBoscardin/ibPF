import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import Animated, {
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";

type CreditCardProps = {
  cardSide: SharedValue<number>;
};

export enum CARD_SIDE {
  front = 0,
  back = 1,
}

export function CreditCard({ cardSide }: CreditCardProps) {
  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {};
  });

  return (
    <View>
      <Animated.View style={[styles.card, styles.front]}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/logo-white.png")}
            style={styles.logo}
          />
        </View>
        {/* <Text>SBCash</Text> */}

        <View style={styles.footer}>
          <Text style={styles.name}>Vinícius B Noering</Text>
          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={[styles.card, styles.back]}>
        <View>
          <Text style={styles.label}>Número do cartão</Text>
          <Text style={styles.value}>1234 6578 9012 3456</Text>
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={styles.label}>Validade</Text>
            <Text style={styles.value}>12/02</Text>
          </View>

          <View>
            <Text style={styles.label}>CVV</Text>
            <Text style={styles.value}>666</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
