import {
  Pressable,
  Image,
  View,
  StyleSheet,
  TextInput,
  Alert,
  Text,
} from "react-native";

export default function Add() {
  return (
    <View
      style={styles.container}
      className="flex-1 w-full h-full items-center justify-center"
    >
      <Image
        source={require("@/assets/images/iconpib.png")}
        className="w-44 h-44 rounded-full"
      />
      <View className="gap-5 mt-16">
        <TextInput
          style={styles.input}
          placeholder="Insira a pergunta"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-12 text-gray-200"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira a primeira alternativa"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-12 text-gray-200"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira a segunda alternativa"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-12 text-gray-200"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira a terceira alternativa"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-12 text-gray-200"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira a quarta alternativa"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-12 text-gray-200"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira a letra da alternativa correta"
          placeholderTextColor={"rgb(255 255 255)"}
          className="bg-white w-96 items-center text-center rounded-full h-14  text-gray-200"
        />
        <Pressable
          style={styles.button}
          className="w-48 h-12 content-center items-center mx-24 rounded-full"
         
        >
          <Text className="text-gray-200 font-bold font-serif items-center justify-center text-base text-center mt-2">
            Adicionar Pergunta
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303D50",
  },
  input: {
    backgroundColor: "#504330",
  },
  button: {
    backgroundColor: "#504330",
  },
});
