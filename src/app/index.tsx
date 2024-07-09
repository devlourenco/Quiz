import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container} className=" w-full h-full  items-center">
      <Image
        source={require("../assets/images/iconpib.png")}
        className=" w-48 h-48 items-center justify-center rounded-full border-gray-200 mt-36"
      />

      <View className="gap-7 mt-16">
        <Link href={"/quiz"} asChild>
          <Pressable
            style={styles.button}
            className=" w-96 items-center justify-center rounded-full h-20"
          >
            <Text className="text-gray-200 font-bold text-2xl font-serif">Iniciar Quiz</Text>
          </Pressable>
        </Link>

        <Link href={"/add"}asChild>
          <Pressable
            style={styles.button}
            className=" items-center justify-center w-96 rounded-full h-20"
          >
            <Text className="text-gray-200 font-bold text-2xl font-serif">Adicionar Perguntas</Text>
          </Pressable>
        </Link>

        <Link href={"/edit"}asChild>
          <Pressable
            style={styles.button}
            className="items-center justify-center w-96 rounded-full h-20"
          >
            <Text className="text-gray-200 font-bold text-2xl font-serif">Editar Perguntas</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303D50",
  },
  button: {
    backgroundColor: "#504330",
  },
});
