import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart as LineChartKit } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  // backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  // useShadowColorFromDataset: true, // optional
};

const LineChart = ({ data }) => {
  console.log(data);
  const chartData = {
    // labels: data?.label,
    datasets: [
      {
        data: data?.value,
        color: (opacity = 1) => `#CDC1FF`, // optional
        strokeWidth: 3, // optional
        withDots: false,
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Text style={styles.value}>47 °C</Text>
      <Text style={styles.title}>Temperature</Text>
      <View style={styles.graph}>
        <LineChartKit
          data={chartData}
          width={150}
          height={480}
          chartConfig={chartConfig}
          fromZero={true}
          withVerticalLines={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          segments={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: "43%",
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#CDC1FF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 7,
  },
  title: {
    fontWeight: 600,
    opacity: 0.5,
    marginTop: 4,
  },
  value: {
    color: "#A594F9",
    fontWeight: 700,
    fontSize: 20,
  },
  graph: {
    overflow: "hidden",
    height: 40,
  },
});

export default LineChart;
