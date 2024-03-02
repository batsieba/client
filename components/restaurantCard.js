import { View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function RestaurantCard({item}) {
  return (
    <TouchableWithoutFeedback>
      <View className="mr-6 bg-white runded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
      </View>
    </TouchableWithoutFeedback>
  )
}