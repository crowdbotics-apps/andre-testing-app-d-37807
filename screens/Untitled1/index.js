import { useSelector } from "react-redux";
import { Text } from "react-native";
import { useEffect } from "react";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const {
    entities: dogbreed2api_response_get_Random
  } = useSelector(state => state.dogbreed2api_response_get_Random);
  useEffect(() => {}, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.evSrxFFm}>Dog call status {dogbreed2api_response_get_Random[0].status}</Text><Text style={styles.McFTfSHQ}>Dog call message {dogbreed2api_response_get_Random[0].message}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  evSrxFFm: {
    width: 347,
    height: 49,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  QWNNjbLa: {
    width: 107,
    height: 122
  },
  McFTfSHQ: {
    width: 347,
    height: 43,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;