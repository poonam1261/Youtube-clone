import { Text, View , Image} from 'react-native'
import React, { Component } from 'react'
import * as Icon from 'react-native-feather'

export default function ShortVideoCard({item}) {
  
    return (
      <View className="h-6 relative mr-3 flex justify-between"  style={{width:180, height:200, marginTop:20}}>
        <View className="flex-row justify-end pt-3 pr-1 ">
        <Image source={item.image} className="h-full rounder-xl absolute" style={{ height:100,resizeMode:'contain', width:120, alignSelf:'center'}} />
            <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} heihgt="20"/>
        </View>
        <View className='p-2'>
            <Text className='text-white shadow-lg font-bold text-sm'>
                {item.title} 
            </Text>
            <Text className='text-white shadow-md font-semibold text-xs'>
                {item.viewCount} views
            </Text>
        </View>
      </View>
    )
  
}