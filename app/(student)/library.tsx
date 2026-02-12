import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import LibraryHeader from "../components/Library/LibraryHeader";
import LibraryTabs, { TabType } from "../components/Library/LibraryTabs";
import SectionTitle from "../components/Library/SectionTitle";
import BookItem from "../components/Library/BookItem";
import InfoCard from "../components/Library/InfoCard";
import NotesCard from "../components/Library/NotesCard";
import CollectionCard from "../components/Library/CollectionCard";
import NewCollectionCard from "../components/Library/NewCollectionCard";

export default function Library() {
  const [activeTab, setActiveTab] = useState<TabType>("Books");

  const renderNotes = () => (
    <View>
      <NotesCard
        title="Newton's Laws Summary"
        description="Force equals mass times acceleration..."
        book="Physics: Motion & Energy"
        time="2 hours ago"
      />
      <NotesCard
        title="Personal Legend Concept"
        description="Everyone has a personal legend..."
        book="The Alchemist"
        time="Yesterday"
      />
      <NotesCard
        title="System 1 vs System 2 Thinking"
        description="Fast vs slow thinking..."
        book="Thinking, Fast and Slow"
        time="3 hours ago"
      />
    </View>
  );

  const renderBooks = () => (
    <>
      <SectionTitle title="In Progress" />
      <View style={styles.grid}>
        <BookItem image={require("../../assets/wolio/book1.png")} />
        <BookItem image={require("../../assets/wolio/book1.png")} />
      </View>

      <SectionTitle title="Completed" />
      <View style={styles.grid}>
        <BookItem image={require("../../assets/wolio/book1.png")} />
      </View>

      <InfoCard title="Recently Read" subtitle="3 books" />
      <InfoCard title="Frequently Highlighted" subtitle="3 books" />
    </>
  );

  const renderCollections = () => (
  <View style={{ marginTop: 20 }}>
    <SectionTitle title="Collections" />

    <View style={styles.collectionGrid}>
      <CollectionCard title="Physics" count={4} color="#1976D2" />
      <CollectionCard title="Self Growth" count={6} color="#37B24D" />
      <CollectionCard title="Creative Thinking" count={3} color="#FB8C00" />
      <NewCollectionCard />
    </View>
  </View>
);


  return (
    <ScrollView style={styles.container}>
      <LibraryHeader />
      <LibraryTabs active={activeTab} setActive={setActiveTab} />

      {activeTab === "Books" && renderBooks()}
      {activeTab === "Notes" && renderNotes()}
      {activeTab === "Collections" && renderCollections()}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  collectionGrid: {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  paddingHorizontal: 16,
},

});
