import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import LineChart from "./LineChart";

const Dashboard = () => {
  const AIO_KEY = "aio_Rsgu76sq602faWuk9IQhmApxFdsQ"; //zalo to get this key
  const AIO_USERNAME = "huynhngoctan";
  const [tempGraph, setTempGraph] = useState({ label: ["0"], value: [0] });
  const fetchTempGraph = async () => {
    const FEED_NAME = "dclv.kitchen-temp";
    const result = await axios.get(
      `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${FEED_NAME}/data/chart?hours=12&resolution=60`,
      {
        headers: {
          "X-AIO-Key": AIO_KEY,
        },
      }
    );

    var labelArr = [];
    var valueArr = [];
    result.data.data.map((item) => {
      labelArr.push(
        item[0].toLocaleString("en-US", {
          hour: "numeric",
          hour12: true,
        })
      );
      valueArr.push(Number(item[1]));
    });
    setTempGraph({
      label: labelArr,
      value: valueArr,
    });
  };
  useEffect(() => {
    fetchTempGraph();
  }, []);
  return (
    <View>
      <Text style={styles.name}>Hi Phuc Khang!</Text>
      <ScrollView horizontal={true} style={styles.topNav}>
        <View>
          <Text style={titleActive}>Dashboard</Text>
        </View>
        <View>
          <Text style={styles.title}>Living Room</Text>
        </View>
        <View>
          <Text style={styles.title}>Kitchen</Text>
        </View>
        <View>
          <Text style={styles.title}>Bed Room</Text>
        </View>
      </ScrollView>

      <View style={styles.container}>
        <LineChart data={tempGraph} />
        <LineChart data={tempGraph} />
        <LineChart data={tempGraph} />
        <LineChart data={tempGraph} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 16,
    opacity: 0.3,
  },
  title: {
    // marginBottom: 16,
    marginRight: 36,
    fontSize: 20,
    fontWeight: 600,
    opacity: 0.3,
  },
  active: {
    opacity: 1,
    fontSize: 24,
    fontWeight: 600,
  },
  container: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
  },
});

const titleActive = StyleSheet.flatten([styles.title, styles.active]);
export default Dashboard;
