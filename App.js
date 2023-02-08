import { StyleSheet, View } from 'react-native';
import CarList from './Components/CarList';
import Header from './Components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
