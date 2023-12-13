import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./components/Dashboard";

export default function App() {
  const AIO_KEY = "aio_Rsgu76sq602faWuk9IQhmApxFdsQ"; //zalo to get this key
  const AIO_USERNAME = "huynhngoctan";

  const [temp, setTemp] = useState(null);
  const fetchTempData = async () => {
    const options = {
      headers: {
        "X-AIO-Key": AIO_KEY,
      },
    };
    const FEED_NAME = "dclv.kitchen-temp";
    const result = await axios.get(
      `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data/last`,
      options
    );
    console.log(result);
    setTemp(result.data.value);
  };

  useEffect(() => {
    fetchTempData();
  }, []);
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
    backgroundColor: "#faf8ff66",
  },
  text: {
    color: "#000",
  },
});
