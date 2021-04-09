import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function goalItem(props) {
  const { item, index } = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this,index)}>
      <View key={index} style={styles.listItem}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "90%",
    borderColor: "grey",
    backgroundColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});
