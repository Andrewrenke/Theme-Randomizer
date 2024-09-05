import { Colors } from "@/constants/Colors";
import useRandomColor from "@/hooks/useRandomColor";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

type RandomColorViewType = React.FC<{
  children?: React.ReactNode;
  onTouch?: () => void;
}>;

const RandomColorView: RandomColorViewType = ({ children, onTouch }) => {
  const backgroundColor = useThemeColor(
    { light: Colors.light.background, dark: Colors.dark.background },
    "background",
  );
  const { color, regenerateColor } = useRandomColor(backgroundColor);

  const handleTouch = () => {
    onTouch?.();
    regenerateColor();
  };

  return (
    <Pressable style={styles.pressable} onPress={handleTouch}>
      <View style={[styles.container, { backgroundColor: color }]}>
        {children}
      </View>
    </Pressable>
  );
};

export default RandomColorView;

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
