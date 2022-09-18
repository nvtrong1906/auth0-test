import React from 'react'
import { View, Text } from 'react-native'

import styles from './index.styles'

const UserData = (props) => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Text style={[styles.label, styles.text]}> {props.label}: </Text>
      <Text style={[styles.value, styles.text]}> {props.value} </Text>
    </View>
  )
}

export default UserData