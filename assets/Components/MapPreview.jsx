import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native";

const MapPreview = (location) => {
  return (
    <View >
        {
            location ?
            <Image style={styles.map} source={{uri:`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=250x250&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.latitude},${location.longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`}} />
            : <Icon name="map" size={128} color="#bdc3c7" />
        } 
      
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  map: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: '#bdc3c7', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});






