import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export type TabType = "Books" | "Notes" | "Collections";

const tabs: TabType[] = ["Books", "Notes", "Collections"];

interface Props {
  active: TabType;
  setActive: (tab: TabType) => void;
}

const LibraryTabs: React.FC<Props> = ({ active, setActive }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, active === tab && styles.activeTab]}
          onPress={() => setActive(tab)}
        >
          <Text style={active === tab ? styles.activeText : styles.text}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LibraryTabs;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 14,
    marginHorizontal: 16,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 12,
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
  },
  text: { color: "#777" },
  activeText: { fontWeight: "600", color: "#000" },
});
