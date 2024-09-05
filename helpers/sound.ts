import { Audio, AVPlaybackSource } from "expo-av";

export const playSound = async (source: AVPlaybackSource) => {
  const { sound } = await Audio.Sound.createAsync(source);
  await sound.playAsync();
};
