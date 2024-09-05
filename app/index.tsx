import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import RandomColorView from "@/components/RandomColorView";
import { playSound } from "@/helpers/sound";

export default function HomeScreen() {
  const playUiSound = () => {
    playSound(require("@/assets/audio/ui-sound.mp3"));
  };

  return (
    <RandomColorView onTouch={playUiSound}>
      <ThemedText style={styles.greeting}>Hello there</ThemedText>
    </RandomColorView>
  );
}

const styles = StyleSheet.create({
  greeting: {
    userSelect: "none",
  },
});
