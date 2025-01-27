import { Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import "../global.css"
import * as Icon from 'react-native-feather'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { categories, shortVideos } from '../constants/info';
import ShortVideoCard from '../components/shortVideocard';
import VideoCard from '../components/videoCard';
import { fetchTrendingVideos } from '../components/api/youtube';


const HomeScreen = ({ navigation }) => {
    const [activityCategory, setActivityCategory] = useState('All');
    const [videos, setVideos] = useState([]);
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetchTrendingVideos();
        console.log('video',data[0].thumbnail[1].url);

        setVideos(data);
    }
    return (
        <View style={{backgroundColor: 'black'}} className="flex-1 ">
            {/* logo and profile icon*/}
            <SafeAreaView className="flex-row justify-between mx-4">
                <View className="flex-row items-center space-x-1">
                    <Image source={require('../images/youtube.png')} className="h-7 w-10" />
                    <Text className="text-white font-semibold text-xl tracking-tighter">  Youtube</Text>
                </View>
                <View className="flex-row gap-4">
                    <Icon.Cast stroke="white" strokeWidth={1.2} height="22"  />
                    <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
                    <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
                    <Image source={require('../images/avatar.png')} 
                    className="h-7 w-7 rounded-full" />
                </View>

            </SafeAreaView>

            <ScrollView className="flex-1 mt-4" showsVerticalScrollIndicator={false}>
            <View className="py-2 pb-5">
                <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                    {
                       categories.map((category, index) => {
                        let isActive = category==activityCategory;
                        let textClass = isActive? 'text-black': 'text-white';
                        return (
                            <TouchableOpacity 
                            onPress={() => setActivityCategory(category)}
                            key ={index} 
                            style={{backgroundColor: isActive? 'white':  'rgba(255,255,255, 0.1)'}} 
                            className="rounded-md p-1 px-3 mr-2"
                            >
                                <Text className={textClass}>{category}</Text>
                            </TouchableOpacity>
                        )
                       })
                    }

                </ScrollView>
            </View>

            {/*recommendeation */}
           {/* <VideoCard video={videos.at(0)} />*/}

{/*shorts */}
            <View 
            className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0"
            >
                <View className="mx-4 flex-row items-center">
                    <Image source={require('../images/shortIcon.png')} className="h-6 w-5"/>
                    <Text className="text-white font-semibold text-lg tracking-tighter ml-3"> Shorts</Text>
                </View>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                className="px-4">
                    {
                        shortVideos.map((item, index) =>
                            <ShortVideoCard item={item} key={index} />
                        )
                    }

                </ScrollView>
            </View>

            {/**videos */}
            <ScrollView showsVerticalScrollIndicator={false}>

            </ScrollView>
                    {
                        videos.map((video, index) => <VideoCard video={video} key={index} />
                    )
                    }
            </ScrollView>
        </View>
    )
};

export default HomeScreen;