import { Image, Text, View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { styles } from "./styles";

export function CreditCard() {
  return (
    <View>
      <View style={[styles.card, styles.front]}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text>SBCash</Text>

        <View style={styles.footer}>
          <Text style={styles.name}>Vinícius Boscardin Noering</Text>
          <View style={styles.flag}>
            <View style={[styles.circle, styles.red]} />
            <View style={[styles.circle, styles.orange]} />
          </View>
        </View>
      </View>

      {/* //BACK
      <View style={[styles.card, styles.back]}>
        <View style={styles.magneticBand} />
        <View style={styles.blackBand} />
      </View> */}
    </View>
  );
}
