import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authLogoText}>Jobbiz</Text>
      <Text style={styles.authGreetingText}>Hello Welcome 👋</Text>
      <Text style={styles.authDescriptionText}>
        Let’s log in. Apply to jobs!
      </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.authInputField}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.authInputField}
      />
      <TouchableOpacity
        style={styles.authButtonContainer}
        onPress={() => navigation.navigate("Home", { name, email })}
      >
        <Text style={styles.authButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.horzontalBarOrContainer}>
        <View style={styles.line} />
        <Text style={styles.text}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.authIcons}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/cib_apple.png")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/flat-color-icons_google.png")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require("../assets/ion_logo-facebook.png")}
          />
        </View>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account?</Text>
        <Text style={styles.registerText}>Register</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FAFAFD",
    padding: 24,
  },
  authLogoText: {
    fontWeight: "600",
    fontSize: 22,
    color: "#356899",
  },
  authGreetingText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "600",
  },
  authDescriptionText: {
    marginTop: 8,
    fontSize: 14,
    color: "#9B9B9B",
  },
  authInputField: {
    marginTop: 32,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  authButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    backgroundColor: "#356899",
    height: 56,
  },
  authButtonText: {
    fontWeight: "600",
    fontSize: 16,
    color: "#FFFFFF",
  },
  authIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
    padding: 12,
  },
  horzontalBarOrContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  text: {
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#9B9B9B",
  },
  iconContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 50,
    shadowColor: "#0000002B",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 30.84,
    elevation: 6,
  },
  icon: {
    width: 26,
    height: 26,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  signupText: {
    fontSize: 14,
    color: "#9B9B9B",
  },
  registerText: {
    fontSize: 14,
    color: "#356899",
    marginLeft: 4,
  },
});
