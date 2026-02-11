import { ScrollView, StyleSheet } from "react-native";
import ProfileHeader from "../components/Profile/ProfileHeader";
import UserCard from "../components/Profile/UserCard";
import MiniStatsRow from "../components/Profile/MiniStatsRow";
import StrengthChips from "../components/Profile/StrengthChips";
import MasteryMap from "../components/Profile/MasteryMap";
import Achievements from "../components/Profile/Achievements";
import Insights from "../components/Profile/Insights";
import BottomActions from "../components/Profile/BottomActions";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <UserCard />
      <MiniStatsRow />
      <StrengthChips />
      <MasteryMap />
      <Achievements />
      <Insights />
      <BottomActions />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F6F8", padding: 16 },
});
