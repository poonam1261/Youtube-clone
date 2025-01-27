import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import * as Icon from 'react-native-feather'
import { formatViews } from '../utils/numbers'

export default function VideoCard({video}) {
 
    return (
      <View className="h-10 w-full">
        <Image source={require('../images/cat2.png')} className="h-52 w-10" style={{resizeMode:'contain', height:300, width:"100%"}} />
        <View className="flex items-end ml-2 mr-2 mb-5" style={{width:60, alignSelf:'flex-end',}}>
            <View className="ml-11" style={{marginTop:-24, backgroundColor:'black', paddingLeft:5, paddingRight:5, alignSelf:'flex-end', borderRadius:5}}>
                <Text className="text-white font-semibold text-xs">
                {video.lengthText}
                </Text>
            </View> 
        
        </View>
        <View className="flex-row justify-between items-center pb-5 space-x-3 mx-2 gap-1 mt-4">
           <Image source={require('../images/cat1.png')} className="w-7 h-7 rounded-full ml-3 mr-4" style={{marginRight:9}} />
            <View className="flex-1 space-y-1"> 
                <Text className="text-white font-semibold">
                {video.title}
                </Text>
                <Text className="text-white">
                {video.channelTitle.length>20 ? video.channelTitle.slice(0,20)+'...' : video.channelTitle} • {formatViews(video.viewCount)} views • {video.publishedText} 
                </Text>
                
            </View>
            <View>
                <Icon.MoreVertical stroke="white" strokeWidth={2} height={15}/> 
                
            </View>
        </View>
      </View>
    )         
  
}