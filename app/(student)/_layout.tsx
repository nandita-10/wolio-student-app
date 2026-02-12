import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";


export default function StudentLayout() {
  const GRADIENT: [string, string] = ["#fff", "#fff"];
  const OUTER_GRADIENT: [string, string, string] = ["#EEE6FA", "#cbb3e6ff", "#F4E1F2"];



  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarStyle: styles.tabBar,

        tabBarItemStyle: {
    borderRadius: 20,
    marginHorizontal: 15,
    paddingVertical: 6,
    paddingTop: 15,   // pushes icons + label down
  },

      

        tabBarActiveTintColor: "#984EF6",
        tabBarInactiveTintColor: "#9CA3AF",

        tabBarLabelStyle: {
          fontSize: 8,
          marginTop: 3,
        
        },

        tabBarBackground: () => (
          <BlurView
            intensity={60}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Dashboard",
         tabBarIcon: ({ color, focused }) =>
  focused ? (
  <LinearGradient
    colors={OUTER_GRADIENT}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.outerGradientRing}
  >
    <View style={styles.innerWhiteBox}>
      <Ionicons name="home-outline" size={22} color="#62748E" />
    </View>
  </LinearGradient>
) : (
  <View style={styles.baseIconBoxInactive}>
    <Ionicons name="home-outline" size={22} color={color} />
  </View>
)





        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
         tabBarIcon: ({ color, focused }) =>
  focused ? (
  <LinearGradient
    colors={OUTER_GRADIENT}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.outerGradientRing}
  >
    <View style={styles.innerWhiteBox}>
      <Ionicons name="book-outline" size={22} color="#62748E" />
    </View>
  </LinearGradient>
) : (
  <View style={styles.baseIconBoxInactive}>
    <Ionicons name="book-outline" size={22} color={color} />
  </View>
)



        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
       tabBarIcon: ({ color, focused }) =>
  focused ? (
  <LinearGradient
    colors={OUTER_GRADIENT}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.outerGradientRing}
  >
    <View style={styles.innerWhiteBox}>
      <Ionicons name="compass-outline" size={22} color="#62748E" />
    </View>
  </LinearGradient>
) : (
  <View style={styles.baseIconBoxInactive}>
    <Ionicons name="compass-outline" size={22} color={color} />
  </View>
)



        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        tabBarIcon: ({ color, focused }) =>
  focused ? (
  <LinearGradient
    colors={OUTER_GRADIENT}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.outerGradientRing}
  >
    <View style={styles.innerWhiteBox}>
      <Ionicons name="person-outline" size={22} color="#62748E" />
    </View>
  </LinearGradient>
) : (
  <View style={styles.baseIconBoxInactive}>
    <Ionicons name="person-outline" size={22} color={color} />
  </View>
)




        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
  position: "absolute",
  bottom: 1,
  // left: 16,
  // right: 16,
  height: 75,
  borderRadius: 40,
  overflow: "hidden",
  // padding: 15,

  backgroundColor: "rgba(255,255,255,0.6)",

  borderWidth: 1,
  borderColor: "rgba(255,255,255,0.6)",

  shadowColor: "#9B4DF2",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.4,
  shadowRadius: 25,
  elevation: 15,
},

  activeIcon: {
  padding: 12,
  borderRadius: 14,
  shadowColor: "#9B4DF2",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.5,
  shadowRadius: 12,
  elevation: 10,
},

inactiveIcon: {
  padding: 6,
  borderRadius: 14,
},
baseIconBox: {
  padding: 6,
  borderRadius: 14,
  backgroundColor: "white",
  borderWidth: 1.5,
  borderColor: "rgba(155,77,242,0.35)",
},

baseIconBoxInactive: {
  padding: 6,
  borderRadius: 14,
  backgroundColor: "white",
  borderWidth: 1.5,
  borderColor: "rgba(155,77,242,0.35)",
},

outerGradientRing: {
  padding: 10,          // thickness of gradient ring
  borderRadius: 12,
  shadowColor: "#9B4DF2",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.5,
  shadowRadius: 12,
  elevation: 10,
},

innerWhiteBox: {
  padding: 6,
  borderRadius: 14,
  backgroundColor: "white",
},

tabBarLabelStyle: {
  fontSize: 7,   // was 11
  marginTop: 2,
},


});
