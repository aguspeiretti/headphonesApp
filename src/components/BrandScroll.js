import { View, Image, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import akg from "../../assets/images/akg.png";
import apple from "../../assets/images/apple.png";
import beat from "../../assets/images/beat.png";
import bosse from "../../assets/images/bose.png";
import byo from "../../assets/images/byo.png";
import jabra from "../../assets/images/jabra.png";
import jbl from "../../assets/images/jbl.png";
import schen from "../../assets/images/schen.png";
import sd from "../../assets/images/sd.png";
import sony from "../../assets/images/sony.png";
import sure from "../../assets/images/sure.png";
import tr from "../../assets/images/tr.png";
import { colors } from "../global/Colors";

const BrandScroll = () => {
  return (
    <View style={styles.brandScrollContainer}>
      <Text style={styles.title}>choose Brand</Text>
      <ScrollView horizontal>
        <View style={styles.brandContainer}>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={akg} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Akg</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={apple} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Apple</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={beat} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Beats</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={bosse} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Bosse</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={byo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Bang & Olufsen</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={jabra} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Jabra</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={jbl} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>JBL</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={schen} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Sennheiser</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={sd} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Audio-Technica</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={sony} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Sony</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={sure} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Shure</Text>
            </View>
          </View>
          <View style={styles.logoAndName}>
            <View style={styles.logoCont}>
              <Image source={tr} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.textCont}>
              <Text>Beyerdynamic</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BrandScroll;

const styles = StyleSheet.create({
  brandScrollContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.calidwhite,
  },
  brandContainer: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  logoAndName: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 4,
      height: 5,
    },
    elevation: 7,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    color: colors.secondaryLighter,
    marginBottom: 20,
    fontSize: 18,
  },
  logoCont: {
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  textCont: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
});
