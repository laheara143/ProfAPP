import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS} from '../../../constants';
import NearbyjobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import BagelMenuItemCard from '../Bagel/BagelMenuItemCard';


const bagelMenuItems = [
  {
    id: 1,
    name: "Plain Bagel",
    description: "A classic plain bagel",
    price: 2.50
  },
  {
    id: 2,
    name: "Everything Bagel",
    description: "A delicious everything bagel",
    price: 3.00
  },
  {
    id: 3,
    name: "Blueberry Bagel",
    description: "A sweet blueberry bagel",
    price: 3.50
  },
  // Add more items as needed
];

const BagelMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>All-Day Menu</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {bagelMenuItems.map((menuItem) => (
          <BagelMenuItemCard
            menuItem={menuItem}
            key={`bagel-menu-item-${menuItem?.id}`}
          />
        ))}
      </View>
    </View>
  )
}

export default BagelMenu;
