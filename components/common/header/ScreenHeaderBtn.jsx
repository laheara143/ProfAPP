import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import foodbag from '../../../assets/foodbag.png'
const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
     
     <Image
     source={foodbag}
     resizeMode='cover'
     style={styles.btnImg(dimension)}
     />
    
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
