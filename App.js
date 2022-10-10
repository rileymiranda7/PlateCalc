import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Switch,
} from "react-native";
import FortyFive from "./plates/FortyFive";
import ThirtyFive from "./plates/ThirtyFive";
import TwentyFive from "./plates/TwentyFive";
import Ten from "./plates/Ten";
import Five from "./plates/Five";
import TwoPointFive from "./plates/TwoPointFive";
import getNumPlates from "./helper/GetNumPlates";

export default function App() {
  const [enteredWeight, setEnteredWeight] = useState(0);
  const [barbellMode, setBarbellMode] = useState(true);
  const [fortyFiveArr, setFortyFiveArr] = useState([]);
  const [twentyFiveArr, setTwentyFiveArr] = useState([]);
  const [tenArr, setTenArr] = useState([]);
  const [fiveArr, setFiveArr] = useState([]);
  const [twoPointFiveArr, setTwoPointFiveArr] = useState([]);

  useEffect(() => {
    console.log(enteredWeight);
    setFortyFiveArr([]);
    setTwentyFiveArr([]);
    setTenArr([]);
    setFiveArr([]);
    setTwoPointFiveArr([]);
    const {
      numFortyFives,
      numTwentyFives,
      numTens,
      numFives,
      numTwoPointFives,
    } = getNumPlates(enteredWeight, false, barbellMode);
    console.log("45s: " + numFortyFives);
    console.log("25s: " + numTwentyFives);
    console.log("10s: " + numTens);
    console.log("5s: " + numFives);
    console.log("2.5s: " + numTwoPointFives);
    let tempFfArr = [];
    for (let i = 0; i < numFortyFives; i++) {
      tempFfArr.push(1);
    }
    setFortyFiveArr([...tempFfArr]);

    let tempTfArr = [];
    for (let i = 0; i < numTwentyFives; i++) {
      tempTfArr.push(1);
    }
    setTwentyFiveArr([...tempTfArr]);

    let tempTArr = [];
    for (let i = 0; i < numTens; i++) {
      tempTArr.push(1);
    }
    setTenArr([...tempTArr]);

    let tempFArr = [];
    for (let i = 0; i < numFives; i++) {
      tempFArr.push(1);
    }
    setFiveArr([...tempFArr]);

    let tempTpfArr = [];
    for (let i = 0; i < numTwoPointFives; i++) {
      tempTpfArr.push(1);
    }
    setTwoPointFiveArr([...tempTpfArr]);
  }, [enteredWeight, barbellMode]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.weightsContainer}>
            {fortyFiveArr.map((_, index) => {
              return <FortyFive key={index} />;
            })}
            {twentyFiveArr.map((_, index) => {
              return <TwentyFive key={index} />;
            })}
            {tenArr.map((_, index) => {
              return <Ten key={index} />;
            })}
            {fiveArr.map((_, index) => {
              return <Five key={index} />;
            })}
            {twoPointFiveArr.map((_, index) => {
              return <TwoPointFive key={index} />;
            })}
          </SafeAreaView>
          <View style={styles.inputContainer}>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                keyboardType="decimal-pad"
                onChangeText={setEnteredWeight}
                placeholder="ex. 135"
              />
              <Text style={{ color: "white", fontSize: 30, padding: 5 }}>
                lbs
              </Text>
            </View>
            <View style={styles.inputRow}>
              <Text style={{ color: "white", fontSize: 25, padding: 5 }}>
                Barbell Mode:{" "}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={barbellMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setBarbellMode(!barbellMode)}
                value={barbellMode}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  input: {
    padding: 4,
    borderRadius: 6,
    backgroundColor: "gray",
    textAlign: "center",
    fontSize: 30,
    borderWidth: 2,
    borderColor: "white",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  weightsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
