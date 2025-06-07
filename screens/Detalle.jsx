import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../assets/redux/cartSlice';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapPreview from '../assets/Components/MapPreview';
import * as Location from 'expo-location'
import { useState } from 'react';

export default function Detalle({ route }) {
  const { product } = route.params;
  const dispatch = useDispatch();
  const [location,setLocation ] = useState("")

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Éxito', 'Producto agregado al carrito');
  };

  const verifyLocationPersmissions = async ()=>{

    const {status} = await Location.requestForegroundPermissionsAsync()
    if (status !=='granted')return false
    return true
   
  };

  const getLocation = async ()=>{

    const isPermissionOk = await verifyLocationPersmissions()
    if(!isPermissionOk){
      console.log("Error")
    }else{let location = await Location.getCurrentPositionAsync()
      if(location){
        console.log(location)
        setLocation(location.coords)
      }else{
        console.log("Error cosnsole")
      }


    }
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {product.image && (
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      {product.description && (
        <Text style={styles.description}>{product.description}</Text>
      )}

      <Button title="Agregar al carrito" onPress={handleAddToCart} />
      <MapPreview location={location}/>

      <Pressable style={styles.getLocation} onPress={getLocation}>
        <View style={styles.iconTextContainer}>
          <Icon name="map-marker" size={20} color="#fff" style={styles.icon} />
          <Text style={styles.getLocationText}>Obtener Ubicación del Producto</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  getLocation: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  getLocationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
