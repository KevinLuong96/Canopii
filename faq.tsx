"use strict";
import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import Header from "./header";
import Accordion from "react-native-collapsible/Accordion";

const aboutSections = [
  {
    title: "How will adding my tree help fight climate change?",
    content:
      "The city needs to know what trees it currently has to better decide which types of trees to plant and make sure every tree stays as healthy as possible. By adding your tree, you're providing crucial information for the city's sustainability planning! We can fight climate change, but only together!",
  },

  {
    title: "What is my data being used for?",
    content:
      "The city wants to make the best plan to fight climate change it can. With your information, the city knows where trees in the city are located and what species they are.",
  },
];

const taggingSections = [
  {
    title:
      "What if my leaf doesn't look like any of the leaves returned by the automatic species recognition?",
    content:
      "The automatic processing works best when the leaf is flat, facing straight downward and with a single leaf in focus (parts of other leaves can still be in the picture). Please try again.",
  },
  {
    title:
      "I went through the manual recognition but I couldn't find my leaf at the end.",
    content:
      "Manual recognition can be quite tricky. Try going back and double checking the choices you made.",
  },
  {
    title:
      "I tried the automatic processing a few times and I still can't find the leaf. Now what?",
    content:
      "The automatic processing isn't 100% accurate. Please try the manual flow.",
  },
  {
    title: "Why am I taking two images?",
    content:
      "Two images will increase the chances of the image recognition getting your species correct. ",
  },
];
const FAQ = () => {
  const [activeAboutSections, setActiveAboutSections] = useState([]);
  const [tagSections, setTagSections] = useState([]);
  const _renderHeader = section => {
    return (
      <View style={faqStyles.header}>
        <Text style={[styles.heading, faqStyles.headerText]}>
          {section.title}
        </Text>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View style={faqStyles.content}>
        <Text style={styles.body}>{section.content}</Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, faqStyles.container]}>
      <Text style={[styles.title, faqStyles.title]}>FAQs</Text>
      <ScrollView style={[styles.container, faqStyles.scrollContainer]}>
        <View style={faqStyles.accordion}>
          <Text style={[styles.heading, faqStyles.subTitle]}>
            About Canopii
          </Text>
          <Accordion
            sections={aboutSections}
            activeSections={activeAboutSections}
            renderHeader={section => _renderHeader(section)}
            renderContent={section => _renderContent(section)}
            onChange={sections => setActiveAboutSections(sections)}
            underlayColor={"rgba(140, 140, 140, 0.2)"}
            expandMultiple={true}
          />
        </View>
        <View style={faqStyles.accordion}>
          <Text style={[styles.heading, faqStyles.subTitle]}>
            Tagging a Tree
          </Text>
          <Accordion
            sections={taggingSections}
            activeSections={tagSections}
            renderHeader={section => _renderHeader(section)}
            renderContent={section => _renderContent(section)}
            onChange={sections => setTagSections(sections)}
            underlayColor={"rgba(140, 140, 140, 0.2)"}
            expandMultiple={true}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const faqStyles = EStyleSheet.create({
  accordion: {
    paddingBottom: 32,
  },
  header: {
    borderBottomColor: "rgba(140,140,140,0.3)",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    marginBottom: 16,
  },
  container: {
    display: "flex",
    paddingTop: 100,
    paddingBottom: 80,
  },
  subTitle: {
    fontSize: 22,
    color: "$dgreen6",
    marginBottom: 16,
  },
  scrollContainer: {
    paddingHorizontal: "5%",
  },
  title: {
    marginBottom: 24,
    paddingLeft: "5%",
  },
  padded: {
    paddingHorizontal: "10%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(140,140,140,0.25)",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
});

export default FAQ;
