import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return (
    <Image
      source={require('../assets/cog_prim_lg_sm_tgln_hrz_r_rgb_pos_2022.png')}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 120,
    marginBottom: 7,
  },
})
