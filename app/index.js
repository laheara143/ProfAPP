import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import foodbag from '../assets/foodbag.png'
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const HomeHeader = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/Tandem.png")}
        style={{
          width: 150,
          height: 60,
        }}
        resizeMode="contain"
      />
      <Text style={styles.btnContainer}>
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
            headerStyle: { 
              backgroundColor: COLORS.complimentary,
              backgroundImage: `url(${foodbag})`,
              height: 100, //Does not work
              //width: Dimensions.get('window').width,
              //Color is not covering full image length
            },
            headerShadowVisible: false,
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
            ),
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
    //make larger
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
    color: COLORS.primary,
    fontSize: SIZES.body2,
    marginTop: SIZES.small,
  },
});

export default Home;
