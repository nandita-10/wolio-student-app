import { ScrollView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import StatsRow from "../components/Home/StatsRow";
import ContinueCard from "../components/Home/ContinueCard";
import TodayFocusRow from "../components/Home/TodayFocusRow";
import WeekChart from "../components/Home/WeekChart";
import DailyConsistency from "../components/Home/DailyConsistency";
import UpNext from "../components/Home/UpNext";
import FocusTime from "../components/Home/FocusTime";
import QuickActions from "../components/Home/QuickActions";
import Insights from "../components/Home/Insights";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <StatsRow />
      <ContinueCard />
      <TodayFocusRow />
      <WeekChart />
      <DailyConsistency />
      <UpNext />
      <FocusTime />
      <QuickActions />
      <Insights />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 10,
  },
});
