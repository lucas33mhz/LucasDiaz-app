import { View, Text, } from "react-native"
import { FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
//import  products  from "../data/Products";
import { useGetProductsQuery } from '../assets/redux/Services/ShopService';



export default function HomeScreen({ navigation }) {

    const { data: products, error, isLoading } = useGetProductsQuery();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('Detalle', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.container}>
                <Text style={styles.header}>Productos Electrónicos</Text>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    contentContainerStyle={styles.productList}

                />
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f4f4f4', padding: 16 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#333' },
    search: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    productList: { paddingBottom: 20 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        marginBottom: 16,
        width: '48%',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        alignItems: 'center',
    },
    image: { width: 100, height: 100, resizeMode: 'contain', marginBottom: 10 },
    name: { fontSize: 14, fontWeight: '600', textAlign: 'center', color: '#333' },
    price: { fontSize: 13, color: '#888', marginTop: 4 },
});


