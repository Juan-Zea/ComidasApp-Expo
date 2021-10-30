import React,{useContext,useEffect} from 'react';
import {StyleSheet,Button,Text,View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import FirebaseContext from '../Services/context/firebase/firebaseContext';
import PedidoContext from '../Services/context/pedidos/pedidosContext';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import globalStyles from '../styles/global';

const Menu = () => {

    //
    const { menu, obtenerProductos } = useContext(FirebaseContext);

    //context de pedido
    const { seleccionarPlatillo } = useContext(PedidoContext)

    //hook para redireccionar
    const navigation = useNavigation();

    useEffect(() => {
        obtenerProductos();
    }, []);
    
    const mostrarHeading = (categoria,i) =>{
        
        if(i>0){
            const categoriaAnterior = menu[i - 1].categoria;
            
            if(categoriaAnterior !== categoria){
                return(
                    <Separator styles={styles.Separator}> 
                    <Text styles={styles.SeparatorTexto}>{categoria}</Text>
                </Separator> 
             )
            }else{
                return(
                <Separator styles={styles.Separator}>
                <Text styles={styles.SeparatorTexto}>{categoria}</Text>
                </Separator> 
            )
            

        }
        
        }
        
    }
    return(
        <ScrollView styles={[globalStyles.contenedor,{backgroundColor: '#FFF'}]}>
            
            {menu.map((platillo,i) =>{
                       const{url,nombre,descripcion,categoria,precio,id} = platillo;

                       return(
                           <ListItem 
                           key={id}
                           bottomDivider
                           onPress
                           >
                               <ListItem.Chevron/>
                                   <Avatar
                                    source={{
                                        uri:
                                          url,
                                      }}
                                      rounded
                                   />
                               <ListItem.Content>
                                <ListItem.Title>{nombre}</ListItem.Title>
                                <ListItem.Subtitle>{descripcion}</ListItem.Subtitle>
                                <ListItem.Subtitle>{precio}</ListItem.Subtitle>
                                </ListItem.Content>
                           </ListItem>
                       )})
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Separator: {
        backgroundColor:'#000',
    },
    separadorTexto:{
        color:'#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Menu;