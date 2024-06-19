import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { featuredJobsMockup, popularJobsMockup } from "../db/JobsMockup";

const Header = ({ name, email }) => (
  <View style={styles.headerContainer}>
    <View>
      <Text style={styles.userNameText}>{name}</Text>
      <Text style={styles.userEmailText}>{email}</Text>
    </View>
    <Image
      style={styles.ellipseIcon}
      source={require("../assets/Ellipse.png")}
    />
    <View style={styles.ovalContainer}>
      <View style={styles.oval}></View>
    </View>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBarContainer}>
    <View style={styles.searchInputContainer}>
      <Image
        style={styles.searchIcon}
        source={require("../assets/search.png")}
      />
      <TextInput style={styles.inputField} placeholder="Search" />
    </View>
    <View style={styles.filterIconContainer}>
      <Image
        style={styles.filterIcon}
        source={require("../assets/filter.png")}
      />
    </View>
  </View>
);

const FeaturedJobSection = () => (
  <View style={styles.featuredSectionContainer}>
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={styles.seeAllLink}>See all</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {featuredJobsMockup.map((item) => (
        <View
          key={item.id}
          style={[styles.jobCard, { backgroundColor: item.backgroundColor }]}
        >
          <View style={styles.jobInfoRow}>
            <View style={styles.companyLogoContainer}>
              <Image style={styles.companyLogo} source={item.companyLogo} />
            </View>
            <View style={styles.jobDetailsContainer}>
              <Text style={styles.jobTitleText}>{item.name}</Text>
              <Text style={styles.companyNameText}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.featuredJobInfo}>
            <Text style={styles.salaryText}>{item.salary}</Text>
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const PopularJobSection = () => (
  <View style={styles.popularSectionContainer}>
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.seeAllLink}>See all</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {popularJobsMockup.map((item) => (
        <View key={item.id} style={styles.popularJobCard}>
          <View style={styles.popularJobInfoRow}>
            <Image
              style={styles.popularCompanyLogo}
              source={item.companyLogo}
            />
            <View style={styles.popularJobDetailsContainer}>
              <Text style={styles.popularJobTitleText}>{item.name}</Text>
              <Text style={styles.popularCompanyNameText}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.popularJobInfoTwo}>
            <Text style={styles.popularJobSalaryText}>{item.salary}</Text>
            <Text style={styles.popularJobLocationText}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const Home = () => {
  const route = useRoute();
  const { name, email } = route.params || {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header name={name} email={email} />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedJobSection />
        <PopularJobSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FCFCFF",
    padding: 20,
  },
  headerContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ellipseIcon: {
    width: 50,
    height: 50,
  },
  ovalContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 15,
    height: 15,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  oval: {
    backgroundColor: "red",
    borderRadius: 100,
    width: 10,
    height: 10,
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userEmailText: {
    fontSize: 16,
    color: "#666",
  },
  searchBarContainer: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  inputField: {
    marginLeft: 10,
    fontSize: 18,
  },
  filterIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    padding: 6,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  featuredSectionContainer: {
    marginTop: 25,
  },
  sectionHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllLink: {
    fontSize: 14,
    color: "#E79292",
  },
  jobCard: {
    marginRight: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 280,
    height: 186,
    borderRadius: 25,
    padding: 18,
    marginBottom: 10,
  },
  companyLogoContainer: {
    backgroundColor: "#F9FBFF",
    borderRadius: 10,
    padding: 10,
    width: 50,
  },
  companyLogo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  jobInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  featuredJobInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jobDetailsContainer: {
    marginLeft: 20,
  },
  jobTitleText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
  },
  companyNameText: {
    fontSize: 14,
    color: "#F9FBFFB8",
  },
  salaryText: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  locationText: {
    fontSize: 15,
    color: "#FFF",
  },
  popularSectionContainer: {
    marginTop: 25,
  },
  popularJobCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  popularJobInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularJobDetailsContainer: {
    marginLeft: 8,
  },
  popularJobTitleText: {
    flexWrap: "wrap",
    width: 120,
    fontSize: 16,
    fontWeight: "bold",
  },
  popularCompanyLogo: {
    width: 40,
    height: 40,
  },
  popularCompanyNameText: {
    flexWrap: "wrap",
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobLocationText: {
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobSalaryText: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
  popularJobInfoTwo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export default Home;
