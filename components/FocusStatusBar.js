import { useIsFocused } from '@react-navigation/core'
import React from 'react'
import { StatusBar } from 'react-native'

const FocusStatusBar = (props) => {
    const isFocused = useIsFocused()
  return (
    isFocused ? <StatusBar animated={true} {...props} /> : null
  )
}

export default FocusStatusBar