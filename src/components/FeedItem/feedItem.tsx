import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import { useRef, useState } from "react";
import { Video } from 'expo-av'

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        zIndex: 99,
        left: 8,
        padding: 8

    },
    name:{
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8
    },
    description:{
        color: '#fff',
        marginRight: 14,
        textShadowColor: 'rgba(0,0,0,0.20)',
        textShadowOffset: {width: -1, height: 1.5},
        textShadowRadius: 8
    }
})
const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem({ data }) {
    const video = useRef(null)
    const [status, setStatus] = useState({})

    function handlePlayer() {
        // @ts-ignore
        status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync()
    }
    return (
        <Pressable onPress={handlePlayer}>
            <View
                style={[styles.info, {bottom: 110}]}
            >
                <Text style={styles.name}>{data?.name}</Text>
                <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
            </View>
            <Video
                ref={video}
                style={{ width: '100%', height: heightScreen }}
                source={{ uri: data?.video }}
                // @ts-ignore
                resizeMode="cover"
                shouldPlay={false}
                isMuted={false}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
        </Pressable>
    )
}

