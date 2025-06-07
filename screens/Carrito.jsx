import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


export default function Carrito() {
  const items = useSelector((state) => state.cart.items);
  

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito</Text>
      {items.length === 0 ? (
        <Text>Tu carrito está vacío</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
          
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    color: 'gray',
  },
  separator: {
    height: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'right',
  },
});
