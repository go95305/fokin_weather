import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
    title:"Haze",
    subTitle:"It's Hazy outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
    title:"Clouds",
    subTitle:"Just don't go outside",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#f12711", "#f5af19"],
    title:"Clear",
    subTitle:"It's Sunny outside",
  },
  Thunderstorm: {
    iconName: "weather-tornado",
    gradient: ["#114357","#F29492"],
    title:"Thunderstorm",
    subTitle:"thunder thunder",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#0099F7","#F11712"],
    title:"Drizzle",
    subTitle:"Rain drizzling",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: [],
    title:"Rain",
    subTitle:"Rain pouring outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#525252","#3d72b4"],
    title:"Snow",
    subTitle:"snowman",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#00bf8f","#001510"],
    title:"Atmosphere",
    subTitle:"i don know what atmosphere is",
  },
  Mist: {
    iconName: "weather-hazy",
    gradient: ["#8e9eab","#eef2f3"],
    title:"Mist",
    subTitle:"i cant see",
  },
  Dust: {
    iconName: "weather-partly-cloudy",
    gradient: ["#FFA17F","#00223E"],
    title:"Dust",
    subTitle:"dusty",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 36,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: "300",
    marginBottom:10
  },
  subTitle: {
    fontSize:24,

    fontWeight: "600",
    color: "white",
  },
  textContainer:{
    paddingHorizontal:20,
    alignItems:"flex-start"
  }
});
