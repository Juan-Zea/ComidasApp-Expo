import React from "react";
import { View, StyleSheet, ImageBackground,TouchableOpacity,Text, } from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const NuevaOrden = () => {
  const navigation = useNavigation();
  const image = {
    uri: "https://i.pinimg.com/originals/a0/bd/96/a0bd96889b1c5e10d8a237ecd5a20c45.jpg",
  };

  return (
    <View style={globalStyles.contenedor}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={[globalStyles.contenido, styles.contenido]}>
          <TouchableOpacity
            style={globalStyles.boton}
            rounded
            block
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={globalStyles.botonTexto}>Crear Nueva Orden</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.boton}
            rounded
            block
            onPress={() => navigation.navigate("Reservas")}
          >
            <Text style={globalStyles.botonTexto}>Reservas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.boton}
            rounded
            block
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={globalStyles.botonTexto}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contenido: {
    flexDirection: "column",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default NuevaOrden;
