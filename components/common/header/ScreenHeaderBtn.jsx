import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return ( //Duplicate Image Error
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
     
    
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn