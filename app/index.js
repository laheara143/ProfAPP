import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, Welcome } from "../components";

const HomeHeader = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/Tandem.png")}
        style={{
          width: 150,
          height: 50,
        }}
        resizeMode="contain"
      />
      <Text style={styles.btnContainer}>
        Family Owned - Breakfast - Friendly
      </Text>
    </View>
  );
};

const Home = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/bagelbg.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: () => <HomeHeader />,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    padding: SIZES.medium,
  },
  btnContainer: {
    color: COLORS.white,
    fontSize: SIZES.body2,
    marginTop: SIZES.small,
  },
});

export default Home;
