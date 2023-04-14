import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,

} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const foodTypes = ["Bagels", "Beverages", "Salads", "Cream Cheese", "Lunch Sandwiches"];


const Welcome = () => {
  const router = useRouter();
  const [activeFoodType, setActiveFoodType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
      




      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder="Looking for something specific?"
            placeholderTextColor="grey"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>

      </View>

      <View style={styles.tabsContainer}>
      <FlatList
  data={foodTypes}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.tab(activeFoodType, item)}
      onPress={() =>{
        setActiveFoodType(item);
        router.push(`/menu/${item}`)
      }}
    >
      <Text style={styles.tabText(activeFoodType, item)}>{item}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={item => item}
  contentContainerStyle={{ columnGap: SIZES.small}}
  horizontal
/>

      </View>
    </View>
  )
}

export default Welcome
